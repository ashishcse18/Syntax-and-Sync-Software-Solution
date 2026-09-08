import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    company: '',
    requirement: 'Enterprise Software Development',
    message: ''
  };

  requirementsList = [
    'Enterprise Software Development',
    'Custom Web Applications',
    'Java Spring Boot & Microservices',
    'Angular Frontend Development',
    'Cloud & DevOps Engineering',
    'AI & Automation Integration',
    'HRMS & Recruitment Platforms',
    'IT Consulting & Architecture Review'
  ];

  isSubmitted = signal(false);
  isSubmitting = signal(false);

  submitForm(event: Event) {
    event.preventDefault();
    this.isSubmitting.set(true);

    setTimeout(() => {
      this.isSubmitting.set(false);
      this.isSubmitted.set(true);

      // Reset form after 4 seconds
      setTimeout(() => {
        this.isSubmitted.set(false);
        this.formData = {
          name: '',
          email: '',
          phone: '',
          company: '',
          requirement: 'Enterprise Software Development',
          message: ''
        };
      }, 4000);
    }, 1200);
  }
}
