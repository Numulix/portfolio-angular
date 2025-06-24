import { Component } from '@angular/core';
import { skills } from '../../../consts/skills';
import { SkillCardComponent } from './skill-card/skill-card.component';
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SkillCardComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  readonly skills = skills;
}
