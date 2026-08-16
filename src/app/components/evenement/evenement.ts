import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, Calendar } from 'lucide-angular';
import { Event } from '../../shared/data/mockData';
import { EvenementCard } from '../evenement-card/evenement-card';
import { EvenementService } from '../../services/evenement-service';


@Component({
  selector: 'app-evenements',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    LucideAngularModule,
    EvenementCard
  ],
  templateUrl: './evenement.html',
})
export class Evenement implements OnInit{
  readonly Calendar = Calendar;
  events = signal<Event[]>([]);
  eventService = inject(EvenementService);

  ngOnInit(): void {
    this.getEvenement();
  }

  getEvenement(){
    this.eventService.getEvenement().subscribe({
      next:(value)=> {
        this.events.set(value)
      },
      error:(error)=>{
        console.error(error.error.message);
        
      }
    })
  }
}
