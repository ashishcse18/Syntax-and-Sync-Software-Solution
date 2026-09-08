import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  coreValues = [
    {
      title: 'Innovation',
      desc: 'Pioneering modern tech stacks, cloud-native patterns, and AI-driven solutions to solve complex business challenges.',
      icon: '💡'
    },
    {
      title: 'Integrity',
      desc: 'Building transparent, trustworthy, and long-lasting partnerships with enterprise clients across global markets.',
      icon: '🛡️'
    },
    {
      title: 'Quality',
      desc: 'Enforcing clean code standards, microservice best practices, robust CI/CD pipelines, and zero-compromise security.',
      icon: '⭐'
    },
    {
      title: 'Commitment',
      desc: 'Dedicated to on-time delivery, continuous technical support, and scalable software maintenance throughout the product lifecycle.',
      icon: '🎯'
    },
    {
      title: 'Customer Success',
      desc: 'Measurable impact, business automation, efficiency gains, and high ROI for every technology deployment.',
      icon: '🚀'
    }
  ];
}
