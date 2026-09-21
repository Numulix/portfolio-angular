import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { skills, SkillItem } from '../../../../consts/skills';
import { NbBadgeComponent } from '../../../shared/design-system';

@Component({
  selector: 'app-skills-arsenal',
  standalone: true,
  imports: [CommonModule, NbBadgeComponent],
  templateUrl: './skills-arsenal.component.html',
  styles: [`
    :host {
      display: block;
      width: 100%;
    }
  `]
})
export class SkillsArsenalComponent {
  skillList: SkillItem[] = skills;
}
