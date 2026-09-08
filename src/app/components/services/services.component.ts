import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ServiceItem {
  id: string;
  title: string;
  category: 'core' | 'cloud' | 'enterprise' | 'support';
  description: string;
  icon: string;
  features: string[];
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  selectedCategory = signal<string>('all');

  categories = [
    { id: 'all', label: 'All Services' },
    { id: 'core', label: 'Core Engineering' },
    { id: 'cloud', label: 'Cloud & AI' },
    { id: 'enterprise', label: 'Enterprise Systems' },
    { id: 'support', label: 'Consulting & Support' }
  ];

  services: ServiceItem[] = [
    {
      id: 'enterprise-dev',
      title: 'Enterprise Software Development',
      category: 'core',
      description: 'End-to-end engineered, high-concurrency software architectures built for global enterprise workloads.',
      icon: '🏢',
      features: ['Scalable Systems', 'Modular Architecture', 'High Availability']
    },
    {
      id: 'custom-web',
      title: 'Custom Web Applications',
      category: 'core',
      description: 'Tailor-made web portals with dynamic user interfaces, micro-frontend readiness, and seamless API integrations.',
      icon: '🌐',
      features: ['Responsive UI', 'PWA & SPA', 'Performance Focused']
    },
    {
      id: 'java-springboot',
      title: 'Java Spring Boot Development',
      category: 'core',
      description: 'Robust backend systems powered by Spring Boot, Spring Security, Hibernate ORM, and enterprise Java ecosystem.',
      icon: '☕',
      features: ['Spring Security', 'Hibernate ORM', 'Enterprise Java']
    },
    {
      id: 'angular-dev',
      title: 'Angular Development',
      category: 'core',
      description: 'Single-page applications using modern Angular standalone components, RxJS state management, and Angular Material.',
      icon: '🅰️',
      features: ['Standalone Architecture', 'RxJS State', 'Material Components']
    },
    {
      id: 'rest-api',
      title: 'REST API Development',
      category: 'core',
      description: 'Secure, documented, and high-throughput RESTful endpoints adhering to OpenAPI and Swagger standards.',
      icon: '⚡',
      features: ['OpenAPI / Swagger', 'OAuth2 / JWT', 'Rate Limiting']
    },
    {
      id: 'microservices',
      title: 'Microservices Architecture',
      category: 'core',
      description: 'Decoupled, event-driven microservices designed for fault tolerance, independent deployment, and cloud scale.',
      icon: '🧩',
      features: ['Event Driven', 'Service Mesh', 'Independent Scale']
    },
    {
      id: 'cloud-devops',
      title: 'Cloud & DevOps',
      category: 'cloud',
      description: 'Automated CI/CD pipelines, Docker containerization, Kubernetes orchestration, and AWS infrastructure management.',
      icon: '☁️',
      features: ['AWS Deployment', 'Docker & Kubernetes', 'Automated CI/CD']
    },
    {
      id: 'ai-integration',
      title: 'AI Integration',
      category: 'cloud',
      description: 'Embed intelligent LLMs, predictive analytics, automated chatbots, and machine learning models into workflow apps.',
      icon: '🧠',
      features: ['Chatbot Integration', 'Predictive Analytics', 'Natural Language']
    },
    {
      id: 'hrms-solutions',
      title: 'HRMS Solutions',
      category: 'enterprise',
      description: 'Comprehensive human resource platforms, interview schedulers, document generators, and employee portals.',
      icon: '👥',
      features: ['Recruitment Automation', 'Document Generators', 'Payroll & Attendance']
    },
    {
      id: 'crm-solutions',
      title: 'CRM Solutions',
      category: 'enterprise',
      description: 'Customer relationship management platforms that enhance sales pipelines, automated messaging, and client tracking.',
      icon: '📈',
      features: ['Sales Automation', 'Lead Tracking', 'Meta WhatsApp API']
    },
    {
      id: 'erp-development',
      title: 'ERP Development',
      category: 'enterprise',
      description: 'Enterprise resource planning software consolidating inventory, finance, logistics, and operational workflows.',
      icon: '⚙️',
      features: ['Inventory Control', 'Financial Dashboards', 'Workflow Engines']
    },
    {
      id: 'tech-support',
      title: 'Technical Support',
      category: 'support',
      description: '24/7 proactive system monitoring, incident response, performance optimization, and server uptime management.',
      icon: '🛠️',
      features: ['24/7 Monitoring', 'SLA Response', 'Incident Management']
    },
    {
      id: 'software-maint',
      title: 'Software Maintenance',
      category: 'support',
      description: 'Legacy code refactoring, dependency updates, security patching, and continuous feature enhancement.',
      icon: '🔄',
      features: ['Security Patches', 'Code Refactoring', 'Performance Audit']
    },
    {
      id: 'it-consulting',
      title: 'IT Consulting',
      category: 'support',
      description: 'Strategic technology roadmaps, cloud migration guidance, architecture reviews, and digital transformation advisory.',
      icon: '💼',
      features: ['Tech Advisory', 'Architecture Audit', 'Cloud Migration']
    }
  ];

  get filteredServices(): ServiceItem[] {
    const cat = this.selectedCategory();
    if (cat === 'all') {
      return this.services;
    }
    return this.services.filter(s => s.category === cat);
  }

  setCategory(catId: string) {
    this.selectedCategory.set(catId);
  }
}
