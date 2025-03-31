import { Component } from '@angular/core';
import { WorkExperience } from '../../consts/experience';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  readonly workExperience = WorkExperience;
}
