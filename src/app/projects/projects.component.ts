import { Component } from '@angular/core';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectItem } from '../../consts/types';
import { JsonSiloService } from '../services/jsonsilo.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: ProjectItem[] = [];

  constructor(private _jsonSiloService: JsonSiloService) {}

  ngOnInit(): void {
    this._jsonSiloService.getProjects().subscribe((projects) => {
      this.projects = projects;
    });
  }
}
