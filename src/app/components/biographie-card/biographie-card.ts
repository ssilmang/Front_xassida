import { Component, Input, signal } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { lucideBookMarked, lucideCalendar, lucideTag, lucideUser } from '@ng-icons/lucide';
import { environment } from '../../../environments/environment';
import { RouterLink } from "@angular/router";


@Component({
  selector: 'app-biographie-card',
  imports: [NgIconComponent, RouterLink],
  templateUrl: './biographie-card.html',
  styleUrl: './biographie-card.css',
  standalone: true,
   providers: [
    provideIcons({
      lucideBookMarked,
      lucideUser,
      lucideTag,
      lucideCalendar,
    })
  ],
})
export class BiographieCard {
    @Input({ required: true }) bibliography=signal<any>(null);
    envioronment = environment.imagesUrl
}
