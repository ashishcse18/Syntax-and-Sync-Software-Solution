import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ProjectItem {
  id: string;
  title: string;
  client?: string;
  category: string;
  description: string;
  features: string[];
  techStack: string[];
  githubUrl: string;
  icon: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  activeModalProject = signal<ProjectItem | null>(null);

  projects: ProjectItem[] = [
    {
      id: 'hr-document-dashboard',
      title: 'HR Document Template Dashboard',
      client: 'TVM Infotech',
      category: 'Enterprise HR Platform',
      description: 'An enterprise-grade HR Document Management System developed to simplify HR operations through intelligent document creation, template management, live editing, preview generation, and downloadable PDF/DOCX documents.',
      features: [
        'Role Based Authentication & Authorization',
        'Intuitive HR Management Dashboard',
        'Dynamic Document Template Engine',
        'Online WYSIWYG Document Editor',
        'High-Fidelity PDF & DOCX Export Engine',
        'Global Real-Time Search & Multi-Attribute Filtering',
        'Fully Responsive Enterprise Dashboard UI',
        'Secure Spring Boot REST APIs'
      ],
      techStack: ['Angular', 'Spring Boot', 'Java', 'MySQL', 'Angular Material', 'TypeScript'],
      githubUrl: 'Available on Request',
      icon: '📄'
    },
    {
      id: 'whatsapp-interview-scheduler',
      title: 'WhatsApp Bulk Interview Scheduler',
      client: 'TVM Infotech',
      category: 'Recruitment Automation Platform',
      description: 'A full-stack recruitment automation system that streamlines interview scheduling using bulk WhatsApp messaging, Excel processing, dynamic templates, campaign management, and delivery tracking.',
      features: [
        'Bulk Candidate Excel Upload & Parsing',
        'Meta WhatsApp Cloud API Integration',
        'Dynamic Message Template Personalization',
        'Real-Time Campaign Performance Dashboard',
        'Candidate Application Lifecycle Tracking',
        'Message Delivery & Read Receipts Tracking',
        'Automated Gmail Email Notifications',
        'Secure Microservices REST Architecture'
      ],
      techStack: ['Angular', 'Java', 'Spring Boot', 'Hibernate', 'MySQL', 'Meta WhatsApp Cloud API', 'Apache POI'],
      githubUrl: 'Available on Request',
      icon: '📱'
    },
    {
      id: 'smart-sphere-classroom',
      title: 'Smart Sphere Classroom',
      category: 'AI Powered Learning Management System',
      description: 'A modern AI-enabled Learning Management System providing intelligent academic assistance, role-based access, online examinations, assignment management, AI chatbot integration, analytics, and automated notifications.',
      features: [
        'AI Academic Assistant & Chatbot',
        'Role-Based Portals (Faculty & Student)',
        'Course & Module Management System',
        'Interactive Online Examination Engine',
        'Assignment Submission & Automated Grading',
        'JWT Token Authentication & Session Control',
        'Automated Email & Push Notifications',
        'Institutional Analytics & Performance Charts'
      ],
      techStack: ['Angular', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'TypeScript', 'HTML5', 'CSS3'],
      githubUrl: 'Available on Request',
      icon: '🎓'
    }
  ];

  openModal(proj: ProjectItem) {
    this.activeModalProject.set(proj);
  }

  closeModal() {
    this.activeModalProject.set(null);
  }
}
