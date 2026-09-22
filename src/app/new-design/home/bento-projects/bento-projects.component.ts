import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { defaultProjects } from '../../../../consts/projects';
import { ProjectItem } from '../../../../consts/types';
import { JsonSiloService } from '../../../services/jsonsilo.service';
import { NbBadgeComponent, NbButtonComponent, ButtonVariant } from '../../../shared/design-system';

@Component({
  selector: 'app-bento-projects',
  standalone: true,
  imports: [CommonModule, NbBadgeComponent, NbButtonComponent],
  templateUrl: './bento-projects.component.html',
  styles: [`
    :host {
      display: block;
      width: 100%;
    }
  `]
})
export class BentoProjectsComponent implements OnInit {
  projects: ProjectItem[] = defaultProjects;

  private readonly accentClasses = [
    'bg-nb-yellow',
    'bg-nb-blue',
    'bg-nb-mint',
    'bg-nb-pink',
    'bg-nb-purple',
    'bg-nb-coral'
  ];

  private readonly buttonVariants: ButtonVariant[] = [
    'yellow',
    'blue',
    'mint',
    'pink',
    'purple'
  ];

  private readonly tagClasses = [
    'bg-nb-mint',
    'bg-nb-blue',
    'bg-nb-yellow',
    'bg-nb-pink',
    'bg-nb-purple'
  ];

  constructor(private jsonSiloService: JsonSiloService) {}

  ngOnInit(): void {
    this.jsonSiloService.getProjects().subscribe({
      next: (remoteProjects) => {
        if (Array.isArray(remoteProjects) && remoteProjects.length > 0) {
          this.projects = remoteProjects;
        }
      },
      error: () => {
        // Keep defaultProjects on offline / error
      }
    });
  }

  getAccentBg(index: number): string {
    return this.accentClasses[index % this.accentClasses.length];
  }

  getButtonVariant(index: number): ButtonVariant {
    return this.buttonVariants[index % this.buttonVariants.length];
  }

  getTagBg(tagIndex: number): string {
    return this.tagClasses[tagIndex % this.tagClasses.length];
  }

  formatNumber(index: number): string {
    return (index + 1).toString().padStart(2, '0');
  }

  formatRepoLabel(link: string): string {
    if (!link) return '';
    return link.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
  }
}
