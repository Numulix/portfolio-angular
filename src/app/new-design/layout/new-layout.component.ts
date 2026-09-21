import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NewHeaderComponent } from './header/new-header.component';
import { NewFooterComponent } from './footer/new-footer.component';

@Component({
  selector: 'app-new-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, NewHeaderComponent, NewFooterComponent],
  templateUrl: './new-layout.component.html'
})
export class NewLayoutComponent {}
