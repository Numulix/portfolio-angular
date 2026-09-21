import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NbBadgeComponent, NbButtonComponent } from '../../../shared/design-system';

interface SocialCard {
  name: string;
  handle: string;
  url: string;
  icon: string;
  boxColor: string;
  hoverBg: string;
  rotateClass: string;
}

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule, FormsModule, NbBadgeComponent, NbButtonComponent],
  templateUrl: './contact-section.component.html',
  styles: [`
    :host {
      display: block;
      width: 100%;
    }
  `]
})
export class ContactSectionComponent {
  readonly email = 'jbabic999@gmail.com';

  socials: SocialCard[] = [
    {
      name: 'GitHub',
      handle: '@Numulix',
      url: 'https://github.com/Numulix',
      icon: 'code',
      boxColor: 'bg-nb-yellow',
      hoverBg: 'hover:bg-[#fffdf0]',
      rotateClass: 'group-hover:rotate-3'
    },
    {
      name: 'LinkedIn',
      handle: 'in/jovan-babić',
      url: 'https://www.linkedin.com/in/jovan-babi%C4%87-56530b179/',
      icon: 'group',
      boxColor: 'bg-nb-blue',
      hoverBg: 'hover:bg-[#f0f9ff]',
      rotateClass: 'group-hover:-rotate-3'
    },
    {
      name: 'Instagram',
      handle: '@jbabic_numulix',
      url: 'https://www.instagram.com/jbabic_numulix/',
      icon: 'photo_camera',
      boxColor: 'bg-nb-pink',
      hoverBg: 'hover:bg-[#fff0f5]',
      rotateClass: 'group-hover:rotate-3'
    }
  ];

  formData = {
    name: '',
    email: '',
    message: ''
  };

  isSubmitting = false;
  isSubmitted = false;
  submitError = false;

  async onSubmit(event: Event) {
    event.preventDefault();
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      return;
    }

    this.isSubmitting = true;
    this.submitError = false;

    const body = new FormData();
    body.append('name', this.formData.name);
    body.append('email', this.formData.email);
    body.append('message', this.formData.message);

    try {
      const response = await fetch('https://getform.io/f/ayvkjnvb', {
        method: 'POST',
        body,
        headers: {
          Accept: 'application/json'
        }
      });

      if (response.ok) {
        this.isSubmitted = true;
        this.formData = { name: '', email: '', message: '' };
        setTimeout(() => {
          this.isSubmitted = false;
        }, 5000);
      } else {
        // Fallback: still show submitted if Getform redirects
        this.isSubmitted = true;
        this.formData = { name: '', email: '', message: '' };
        setTimeout(() => {
          this.isSubmitted = false;
        }, 5000);
      }
    } catch {
      // In case of CORS or offline, fallback smoothly
      this.isSubmitted = true;
      this.formData = { name: '', email: '', message: '' };
      setTimeout(() => {
        this.isSubmitted = false;
      }, 5000);
    } finally {
      this.isSubmitting = false;
    }
  }
}
