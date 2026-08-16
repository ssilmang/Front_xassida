import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarikhaSection, tarikhaSections } from '../../shared/data/mockData';
import { ChevronRight, Compass, LucideAngularModule } from 'lucide-angular';


@Component({
  selector: 'app-tarikha',
  standalone: true,
  imports: [CommonModule,LucideAngularModule],
  templateUrl: './tarikha.html',
})
export class Tarikha {
  sections: TarikhaSection[] = tarikhaSections;
  activeSectionId = this.sections[0].id;
  readonly Compass = Compass;
   readonly ChevronRight = ChevronRight;
  setActiveSection(id: string): void {
    this.activeSectionId = id;
  }

  get currentSection(): TarikhaSection | undefined {
    return this.sections.find(s => s.id === this.activeSectionId);
  }

  formatLine(line: string): string {
    return line.replace(
      /\*\*(.*?)\*\*/g,
      '<strong class="text-foreground font-semibold">$1</strong>'
    );
  }
}
