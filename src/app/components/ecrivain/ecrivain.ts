import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { LucideAngularModule, Users } from 'lucide-angular';
import { EcrivainWithXassidas } from '../../shared/data/mockData';
import { WriterCard } from '../writer-card/writer-card';
import { Biographie } from '../../services/biographie';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-ecrivain',
  standalone: true,
  imports: [WriterCard,LucideAngularModule,CommonModule],
  templateUrl: './ecrivain.html',
})
export class Ecrivain  implements OnInit {
  readonly Users = Users;
  biographieService = inject(Biographie);

  writers = signal<EcrivainWithXassidas[]>([]);

  ngOnInit(): void {
    // Initialization logic if needed
    this.ecrivainWithXassidas();
  }
  getAnimationDelay(index: number) {
    return `${index * 105}ms`;
  }
  ecrivainWithXassidas(){
    this.biographieService.ecrivainsWithXassidas().subscribe((data:any)=>{
      this.writers.set(data);
    });
  }
}
