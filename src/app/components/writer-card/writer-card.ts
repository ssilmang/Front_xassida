import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, BookOpen } from 'lucide-angular';
import { EcrivainWithXassidas, Writer } from '../../shared/data/mockData';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-writer-card',
  standalone: true,
  imports: [RouterModule, LucideAngularModule,CommonModule],
  templateUrl: './writer-card.html',
})
export class WriterCard {
  @Input({ required: true }) writer!: EcrivainWithXassidas;

  readonly BookOpen = BookOpen;
  environment = environment.imagesUrl;

  get initial(): string {
    console.log(this.writer);
    
    return this.writer?.nom_complet?.charAt(0) ?? '';
  }
}
