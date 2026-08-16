import { Component, inject, OnInit, signal } from '@angular/core';
import { bibliography } from '../../shared/data/mockData';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  lucideBookMarked,
  lucideUser,
  lucideTag,
} from '@ng-icons/lucide';

import { CommonModule } from '@angular/common';
import { BiographieCard } from '../biographie-card/biographie-card';
import { Biographie } from '../../services/biographie';


@Component({
  selector: 'app-biographie-user',
  standalone: true,
  templateUrl: './biographie-user.html',
  imports: [NgIconComponent,CommonModule,BiographieCard],
   providers: [
    provideIcons({
      lucideBookMarked,
      lucideUser,
      lucideTag
    })
  ],
})
export class BiographieUser implements OnInit {
  ngOnInit(): void {
    this.getBiography();
  }
  bibliography = signal<any>(null);
  biographyService = inject(Biographie);
  getBiography() {
    this.biographyService.getBiographie().subscribe((data:any)=>{
      console.log(data);
      this.bibliography.set(data);
    });
  }
}
