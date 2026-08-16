import { Component, signal, computed } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

import {
  BookOpen,
  Users,
  Calendar,
  Compass,
  ArrowRight,
  Sparkles
} from 'lucide-angular';

// import { HeaderComponent } from '@/components/layout/header.component';
// import { FooterComponent } from '@/components/layout/footer.component';
// import { XassidaCardComponent } from '@/components/xassida/xassida-card.component';

import { xassidas, writers, events } from '../../shared/data/mockData';
import { Navbar } from '../../shared/components/navbar/navbar';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [
    RouterModule,
    LucideAngularModule,
    // FooterComponent,
    // XassidaCardComponent
  ],
  templateUrl: './accueil.html',
})
export class Accueil {

  // 🔹 Données en signals
  readonly xassidas = signal(xassidas);
  readonly writers = signal(writers);
  readonly events = signal(events);

  readonly featuredXassidas = computed(() =>
    this.xassidas().slice(0, 4)
  );

  // 🔹 Icônes Lucide
  readonly icons = {
    book: BookOpen,
    users: Users,
    calendar: Calendar,
    compass: Compass,
    arrow: ArrowRight,
    sparkles: Sparkles,
  };

  readonly features = [
    {
      icon: this.icons.book,
      title: 'Bibliothèque de Xassidas',
      description: 'Accédez à une collection riche de poèmes spirituels en français et en arabe.',
      href: '/xassidas',
    },
    {
      icon: this.icons.users,
      title: 'Biographies des Écrivains',
      description: 'Découvrez la vie et les œuvres des grands maîtres spirituels.',
      href: '/ecrivains',
    },
    {
      icon: this.icons.calendar,
      title: 'Événements',
      description: 'Restez informés des célébrations et rassemblements religieux.',
      href: '/evenements',
    },
    {
      icon: this.icons.compass,
      title: 'Tarikha',
      description: 'Explorez les pratiques spirituelles : Wird, Wazifa, et Lazim.',
      href: '/tarikha',
    },
  ];
}
