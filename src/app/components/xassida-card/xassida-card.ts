import { Component, Input } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { LucideAngularModule, FileText, User } from 'lucide-angular';
import { Xassida } from '../../shared/data/mockData';
import { XassidaInterface } from '../../core/models/xassida-interface';

@Component({
  selector: 'app-xassida-card',
  standalone: true,
  imports: [RouterModule, LucideAngularModule,RouterLink],
  templateUrl: './xassida-card.html',
})
export class XassidaCard {
  @Input({ required: true }) xassida!: XassidaInterface;

  readonly FileText = FileText;
  readonly User = User;
}

