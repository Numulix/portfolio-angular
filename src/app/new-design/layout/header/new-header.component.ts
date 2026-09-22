import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NewNavbarComponent } from '../navbar/new-navbar.component';
import { NbButtonComponent } from '../../../shared/design-system';

@Component({
  selector: 'app-new-header',
  standalone: true,
  imports: [CommonModule, RouterModule, NewNavbarComponent, NbButtonComponent],
  templateUrl: './new-header.component.html'
})
export class NewHeaderComponent {
  navOpen = false;
  resumeUrl = 'https://raspy-bonus-452c.jbabic999.workers.dev/Jovan-Babic-CV.pdf';

  toggleNavOpen(): void {
    this.navOpen = !this.navOpen;
  }

  closeNav(): void {
    this.navOpen = false;
  }
}
