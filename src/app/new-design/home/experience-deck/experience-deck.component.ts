import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { richExperiences, RichExperienceItem } from '../../../../consts/experience';
import { NbBadgeComponent } from '../../../shared/design-system';

@Component({
  selector: 'app-experience-deck',
  standalone: true,
  imports: [CommonModule, NbBadgeComponent],
  templateUrl: './experience-deck.component.html',
  styles: [`
    :host {
      display: block;
      width: 100%;
    }
  `]
})
export class ExperienceDeckComponent {
  experiences: RichExperienceItem[] = richExperiences;

  getBadgeBgClass(variant: 'yellow' | 'mint' | 'blue' | 'pink'): string {
    switch (variant) {
      case 'yellow':
        return 'bg-nb-yellow';
      case 'mint':
        return 'bg-nb-mint';
      case 'blue':
        return 'bg-nb-blue';
      case 'pink':
        return 'bg-nb-pink';
    }
  }
}
