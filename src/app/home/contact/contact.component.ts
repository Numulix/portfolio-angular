import { Component } from '@angular/core';
import { socials } from '../../../consts/socials';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  readonly socials = socials;
}
