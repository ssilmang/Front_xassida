import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { LucideAngularModule,ArrowLeft } from 'lucide-angular';
import { Biographie } from '../../services/biographie';
import { sign } from 'crypto';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { lucideBookMarked, lucideCalendar, lucideTag, lucideUser } from '@ng-icons/lucide';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-view-biographie',
  imports: [LucideAngularModule,NgIconComponent,RouterLink,RouterModule],
  standalone: true,
  templateUrl: './view-biographie.html',
  styleUrl: './view-biographie.css',
   providers: [
    provideIcons({
      lucideBookMarked,
      lucideUser,
      lucideTag,
      lucideCalendar,
    })
  ],
})
export class ViewBiographie implements OnInit {
 biographie = signal<any>(null);
  readonly ArrowLeft = ArrowLeft
  readonly environment = environment.imagesUrl
  bioId = signal<string | null>(null);
   constructor(private route: ActivatedRoute) {
    this.bioId.set(this.route.snapshot.paramMap.get('id'));
  }
  bioService = inject(Biographie);
   formatLine(line: string): string {

    return line.replace(
      /\*\*(.*?)\*\*/g,
      '<strong class="text-foreground font-semibold">$1</strong>'
    );
  }
  ngOnInit(): void {
    this.getBiographieDetail();
  }
  getBiographieDetail() {
    const id = this.bioId();
    if (id!==null) {
      this.bioService.getBiographieById(id).subscribe({
        next: (data) => {
          this.biographie.set(data);
        },
        error: (error) => {
          console.error('Error fetching biographie details:', error);
        }
      });
    }
  }
  } 