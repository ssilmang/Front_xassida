import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterLinkActive, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, BookOpen } from 'lucide-angular';
import { filter } from 'rxjs';
@Component({
  selector: 'app-navbar',

  imports: [CommonModule, RouterModule, FormsModule, LucideAngularModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
})
export class Navbar {
  @Input() searchQuery: string = '';
  @Input() showSearch: boolean = true;
  @Input() onSearchChange?: (value: string) => void;

  isMenuOpen = false;
  readonly BookOpenIcon = BookOpen;
  route = inject(Router);
  navigation = [
    { name: 'Accueil', href: '/accueil' },
    { name: 'Xassidas', href: '/xassidas' },
    { name: 'Écrivains', href: '/ecrivains' },
    { name: 'Événements', href: '/evenements' },
    { name: 'Tarikha', href: '/tarikha' },
    { name: 'Biographie', href: '/biographie' },
  ];

  constructor() {
   this.route.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateSearchVisibility();
    });
    this.updateSearchVisibility(); 
  }
   private updateSearchVisibility() {
    const currentUrl = this.route.url.split('?')[0];

    this.showSearch = this.navigation.some(
      nav => nav.href === currentUrl
    );
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  isActive(href: string): boolean {
    return this.route.url === href;
  }

  handleSearch(value: string) {
    this.searchQuery = value;
    this.onSearchChange?.(value);
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
