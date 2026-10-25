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
  private readonly defaultFormData = {
    name: '',
    email: '',
    phone: '',
    company: '',
    requirement: 'Enterprise Software Development',
    message: ''
  };

  formData = {
    ...this.defaultFormData
  };
  honeypot = '';

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
  submissionError = signal('');

  async submitForm(event: Event) {
    event.preventDefault();
    this.isSubmitted.set(false);
    this.submissionError.set('');
    this.isSubmitting.set(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...this.formData, website: this.honeypot })
      });
      const result: unknown = await response.json();

      if (
        !result ||
        typeof result !== 'object' ||
        !('message' in result) ||
        typeof result.message !== 'string'
      ) {
        throw new Error('The contact service returned an invalid response.');
      }

      if (!response.ok) {
        this.submissionError.set(result.message);
        return;
      }

      if (
        !('sent' in result) ||
        !result.sent ||
        typeof result.sent !== 'object' ||
        !('email' in result.sent) ||
        !('whatsapp' in result.sent) ||
        typeof result.sent.email !== 'boolean' ||
        typeof result.sent.whatsapp !== 'boolean'
      ) {
        throw new Error('The contact service returned an invalid response.');
      }

      if (response.ok && result.sent.email && result.sent.whatsapp) {
        this.isSubmitted.set(true);
        this.formData = { ...this.defaultFormData };
        this.honeypot = '';
      } else {
        this.submissionError.set(result.message);
      }
    } catch {
      this.submissionError.set(
        'We could not confirm delivery. Please try again or contact us directly at ashishcse18@gmail.com.'
      );
    } finally {
      this.isSubmitting.set(false);
    }
  }
}
