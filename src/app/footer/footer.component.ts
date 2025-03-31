import { Component } from '@angular/core';
import { ButtonComponent } from "../buttons/primary-button/button.component";
import { navItems } from '../../consts/navItems';
import { socials } from '../../consts/socials';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  readonly navItems = navItems;
  readonly socials = socials;
}
