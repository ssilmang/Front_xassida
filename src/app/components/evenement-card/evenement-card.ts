import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LucideAngularModule,
  Calendar,
  Clock,
  MapPin,
} from 'lucide-angular';
import { Event } from '../../shared/data/mockData';

@Component({
  selector: 'app-evenement-card',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './evenement-card.html',
})
export class EvenementCard {
  @Input({ required: true }) event!: Event;

  readonly Calendar = Calendar;
  readonly Clock = Clock;
  readonly MapPin = MapPin;

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }
}
