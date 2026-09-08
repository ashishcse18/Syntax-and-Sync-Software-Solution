import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why-choose-us.component.html',
  styleUrls: ['./why-choose-us.component.scss']
})
export class WhyChooseUsComponent {
  pillars = [
    { title: 'Enterprise Architecture', desc: 'Designed for high concurrency, microservices, and multi-tenant isolation.', icon: '🏛️' },
    { title: 'Secure Development', desc: 'Built-in Spring Security, OWASP top 10 compliance, and JWT encryption.', icon: '🔒' },
    { title: 'Scalable Applications', desc: 'Horizontal auto-scaling, cloud readiness, and caching for high traffic.', icon: '📈' },
    { title: 'Cloud Ready', desc: 'Native Docker containerization and AWS infrastructure deployment.', icon: '☁️' },
    { title: 'Agile Development', desc: 'Bi-weekly sprints, continuous integration, and transparent client demos.', icon: '🔄' },
    { title: 'AI Integration', desc: 'Embedded LLM workflows, intelligent assistants, and predictive analytics.', icon: '🤖' },
    { title: 'Quality Assurance', desc: 'Automated unit testing, static code analysis, and integration verification.', icon: '✅' },
    { title: 'Long-Term Partnership', desc: 'Dedicated client success teams focused on continuous product evolution.', icon: '🤝' },
    { title: 'On-Time Delivery', desc: 'Strict milestone tracking and disciplined project management execution.', icon: '⏱️' },
    { title: 'Dedicated Support', desc: '24/7 technical assistance, monitoring, and maintenance SLAs.', icon: '🎧' }
  ];
}
