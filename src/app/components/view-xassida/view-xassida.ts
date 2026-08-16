import { AfterViewInit, ChangeDetectionStrategy, Component, computed, ElementRef, inject, Inject, NgZone, OnDestroy, OnInit, PLATFORM_ID, signal, ViewChild } from '@angular/core';
import { Bayt, InterfaceXassida, XassidaInterface } from '../../core/models/xassida-interface';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';
import { isPlatformBrowser } from '@angular/common';
import { XassidaService } from '../../services/xassidaService';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { ArrowLeft, LucideAngularModule } from 'lucide-angular';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { lucideFastForward, lucideMoreHorizontal, lucidePause, lucidePlay, lucideRewind, lucideX } from '@ng-icons/lucide';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-view-xassida',
  imports: [LucideAngularModule,NgIconComponent,RouterLink,RouterModule,ReactiveFormsModule,FormsModule],
  standalone: true,
  templateUrl: './view-xassida.html',
  styleUrl: './view-xassida.css',
  providers: [
    provideIcons({
      lucidePlay,
      lucidePause,
      lucideRewind,
      lucideFastForward,
      lucideX,
      lucideMoreHorizontal
    })
  ]
 
})
export class ViewXassida  implements OnInit, OnDestroy {
  router = inject(Router);
  readonly ArrowLeft = ArrowLeft;
  environment = environment.imagesUrl;

  // ── Services ───────────────────────────────────────────────────────
  private route     = inject(ActivatedRoute);
  private sanitizer = inject(DomSanitizer);
  private svc       = inject(XassidaService);

  // ── Data ───────────────────────────────────────────────────────────
  xassida = signal<InterfaceXassida | null>(null);

  /** Vers parsés depuis x.contenues */
  abiat = computed<Bayt[]>(() => {
    const x = this.xassida();
    if (!x?.contenues) return [];
    return this.parseContenues(x.contenues);
  });

  // ── Audio ──────────────────────────────────────────────────────────
  private audio: HTMLAudioElement | null = null;
  playing     = false;
  currentTime = 0;
  duration    = 0;
  volume      = 0.8;
  progress    = 0;

  /** Barres de la visualisation waveform (hauteurs en px) */
  waveBars: number[] = Array.from({ length: 40 },
    () => Math.floor(Math.random() * 28) + 8
  );

  // ──────────────────────────────────────────────────────────────────
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.svc.findXassidaById(+id).subscribe((data:any) => {
        this.xassida.set(data.data);
       
        if (data.audio) this.initAudio(data.audio);
      });
    }
  }

  ngOnDestroy(): void {
    this.audio?.pause();
    this.audio = null;
  }

  // ══════════════════════════════════════════════════════════════════
  //  PARSING  contenues → Bayt[]
  // ══════════════════════════════════════════════════════════════════

  /**
   * Stratégies de parsing (du plus précis au plus générique) :
   *
   * 1. Séparateur explicite  « | »  →  "شطر أول | شطر ثاني\nvers2..."
   * 2. Ligne double          « \n\n » sépare les vers, espace médian « / »
   * 3. Lignes simples par paires (chaque ligne = un hémistiche)
   */
  private parseContenues(text: string): any[] {
    const cleaned = text.trim();

    // ── Stratégie 1 : séparateur pipe "|" ──────────────────────────
    if (cleaned.includes('|')) {
      return cleaned
        .split('\n')
        .map(l => l.trim())
        .filter(l => l.length > 0)
        .map(line => {
          const [awwal, thani] = line.split('|').map(s => s.trim());
          return { awwal: awwal || '', thani: thani || '' };
        })
        .filter(b => b.awwal || b.thani);
    }

    // ── Stratégie 2 : blocs séparés par lignes vides ────────────────
    const blocks = cleaned.split(/\n{2,}/);
    if (blocks.length > 1) {
      return blocks
        .map(block => {
          const lines = block.split('\n').map(l => l.trim()).filter(Boolean);
          if (lines.length >= 2) {
            return { awwal: lines[0], thani: lines[1] };
          }
          // bloc d'une seule ligne : on split sur « / » ou « ـ »
          if (lines.length === 1) {
            const parts = lines[0].split(/\s*[\/ـ]\s*/);
            return {
              awwal: parts[0]?.trim() || '',
              thani: parts[1]?.trim() || ''
            };
          }
          return null;
        })
        .filter((b): b is Bayt => b !== null && (!!b.awwal || !!b.thani));
    }

    // ── Stratégie 3 : lignes par paires ─────────────────────────────
    const lines = cleaned.split('\n').map(l => l.trim()).filter(Boolean);
    const result: Bayt[] = [];
    for (let i = 0; i < lines.length; i += 2) {
      result.push({
        awwal: lines[i]     || '',
        thani: lines[i + 1] || ''
      });
    }
    return result;
  }

  /** Formater un contenu brut en HTML lisible (fallback) */
  formatContenu(text: string): string {
    return text
      .split('\n')
      .map(l => `<p class="verse-line">${l}</p>`)
      .join('');
  }

  // ══════════════════════════════════════════════════════════════════
  //  AUDIO
  // ══════════════════════════════════════════════════════════════════

  private initAudio(url: string): void {
    this.audio = new Audio(url);
    this.audio.volume = this.volume;

    this.audio.addEventListener('loadedmetadata', () => {
      this.duration = this.audio!.duration;
    });

    this.audio.addEventListener('timeupdate', () => {
      this.currentTime = this.audio!.currentTime;
      this.progress    = this.duration
        ? (this.currentTime / this.duration) * 100
        : 0;
    });

    this.audio.addEventListener('ended', () => {
      this.playing  = false;
      this.progress = 0;
    });
  }

  togglePlay(): void {
    if (!this.audio) return;
    if (this.playing) {
      this.audio.pause();
    } else {
      this.audio.play();
    }
    this.playing = !this.playing;
  }

  rewind(): void {
    if (this.audio) this.audio.currentTime = Math.max(0, this.audio.currentTime - 10);
  }

  forward(): void {
    if (this.audio) this.audio.currentTime = Math.min(this.duration, this.audio.currentTime + 10);
  }

  seekByClick(event: MouseEvent): void {
    if (!this.audio || !this.duration) return;
    const track = event.currentTarget as HTMLElement;
    const ratio  = event.offsetX / track.clientWidth;
    this.audio.currentTime = ratio * this.duration;
  }

  setVolume(event: Event): void {
    const val = +(event.target as HTMLInputElement).value;
    this.volume = val;
    if (this.audio) this.audio.volume = val;
  }

  /** Retourne true si la barre waveform $index doit être "active" (animée) */
  isBarActive(index: number): boolean {
    return this.playing && (index / this.waveBars.length) * 100 < this.progress;
  }

  // ══════════════════════════════════════════════════════════════════
  //  HELPERS
  // ══════════════════════════════════════════════════════════════════

  formatTime(sec: number): string {
    if (isNaN(sec)) return '0:00';
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  }

  /** Convertit un nombre en chiffres arabes orientaux ١ ٢ ٣ … */
  toArabicNum(n: number): string {
    return n.toString().replace(/\d/g, d => '٠١٢٣٤٥٦٧٨٩'[+d]);
  }

  getImageUrl(path: string): string {
    // Adaptez selon votre backend
    return path.startsWith('http') ? path : `/assets/${path}`;
  }

  getPdfUrl(path: string): SafeResourceUrl {
    const url = path.startsWith('http') ? path : `/assets/${path}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}