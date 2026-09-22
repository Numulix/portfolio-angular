import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NbBadgeComponent } from '../../../shared/design-system';

@Component({
  selector: 'app-new-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, NbBadgeComponent],
  templateUrl: './new-footer.component.html'
})
export class NewFooterComponent {
  currentYear = new Date().getFullYear();
}
