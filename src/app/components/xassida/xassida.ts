import { Component, ElementRef, inject, Input, OnDestroy, OnInit, signal, ViewChild } from '@angular/core';
import { XassidaService } from '../../services/xassidaService';
import { environment } from '../../../environments/environment';
import { XassidaInterface } from '../../core/models/xassida-interface';
import { EnhancedTransliterationService } from '../../core/services/enhancedTransliteration';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subject, takeUntil } from 'rxjs';
import { BookOpen, LucideAngularModule } from 'lucide-angular';
@Component({
  selector: 'app-xassida',
  imports: [LucideAngularModule],
  templateUrl: './xassida.html',
  styleUrl: './xassida.css',
})
export class Xassida  implements  OnInit , OnDestroy {
xassidaService = inject(XassidaService);
transliteration = inject(EnhancedTransliterationService);
@Input() filteredXassidas: any[] = [];

readonly BookOpen = BookOpen;
constructor() {}
router = inject(Router);
environment = environment;
private destroy$ = new Subject<void>();
dataXassida=signal<XassidaInterface[]>([]);

  ngOnInit() {
    this.getXassida();
        // Exemple d'utilisation
         this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        takeUntil(this.destroy$)
      )
      .subscribe((event: NavigationEnd) => {
        // Recharger si on revient sur cette page
        if (event.url === '/xassidas' || event.urlAfterRedirects === '/xassidas') {
          this.getXassida();
        }
      });
    
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  getXassida() {
    this.xassidaService.getXassida().subscribe((data) => {
    const arabicText = "السلام عليكم";
    const latinText = this.transliteration.arabicToLatin(arabicText);
    
      this.dataXassida.set(data.data);
    });
  }
  viewXassida(item: XassidaInterface) {
    console.log(item);
    this.router.navigate(['/xassidas',item.id],{state:{xassida:item}});
   
    // alert(`Vous avez cliqué sur la xassida : ${item.wording}`);
  }

  // Audio controls
 
 
}
