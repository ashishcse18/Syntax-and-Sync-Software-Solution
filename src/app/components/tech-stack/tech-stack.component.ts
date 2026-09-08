import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface TechItem {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'cloud' | 'devops' | 'tools';
  badge: string;
  desc: string;
  icon: string;
}

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.scss']
})
export class TechStackComponent {
  selectedCat = signal<string>('all');

  categories = [
    { id: 'all', label: 'All Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Database' },
    { id: 'cloud', label: 'Cloud' },
    { id: 'devops', label: 'DevOps' },
    { id: 'tools', label: 'Tools' }
  ];

  technologies: TechItem[] = [
    // Frontend
    { name: 'Angular', category: 'frontend', badge: 'v20 / Standalone', desc: 'Modern SPA framework for scalable frontend applications.', icon: '🅰️' },
    { name: 'TypeScript', category: 'frontend', badge: 'Strongly Typed', desc: 'Enterprise-grade typed JavaScript development.', icon: '🟦' },
    { name: 'HTML5', category: 'frontend', badge: 'Semantic Web', desc: 'Accessible, responsive web document structuring.', icon: '📄' },
    { name: 'CSS3 / SCSS', category: 'frontend', badge: 'Design System', desc: 'Custom SCSS styling with glassmorphism & themes.', icon: '🎨' },
    { name: 'JavaScript', category: 'frontend', badge: 'ES6+', desc: 'Core browser logic and asynchronous processing.', icon: '⚡' },

    // Backend
    { name: 'Java', category: 'backend', badge: 'JDK 21', desc: 'High-performance object-oriented backend programming.', icon: '☕' },
    { name: 'Spring Boot', category: 'backend', badge: 'Enterprise Standard', desc: 'Framework for microservices and cloud applications.', icon: '🌱' },
    { name: 'Spring Security', category: 'backend', badge: 'OAuth2 / JWT', desc: 'Role-based access control and security protocols.', icon: '🔒' },
    { name: 'Hibernate', category: 'backend', badge: 'ORM', desc: 'Relational mapping and efficient database querying.', icon: '📦' },
    { name: 'REST APIs', category: 'backend', badge: 'OpenAPI 3.0', desc: 'Standardized API contracts and JSON integration.', icon: '🔄' },
    { name: 'Microservices', category: 'backend', badge: 'Distributed', desc: 'Decoupled services communicating via REST & events.', icon: '🌐' },

    // Database
    { name: 'MySQL', category: 'database', badge: 'Relational', desc: 'ACID-compliant transactional relational storage.', icon: '🐬' },
    { name: 'MongoDB', category: 'database', badge: 'NoSQL', desc: 'Flexible document store for unstructured data & AI.', icon: '🍃' },
    { name: 'PostgreSQL', category: 'database', badge: 'Enterprise DB', desc: 'Robust open-source relational database engine.', icon: '🐘' },

    // Cloud
    { name: 'AWS', category: 'cloud', badge: 'EC2 / S3 / CloudFront', desc: 'Scalable cloud infrastructure hosting & serverless.', icon: '☁️' },

    // DevOps
    { name: 'Docker', category: 'devops', badge: 'Containers', desc: 'Containerization for consistent environment builds.', icon: '🐳' },
    { name: 'Kubernetes', category: 'devops', badge: 'Orchestration', desc: 'Automated container scaling, deployment & management.', icon: '☸️' },

    // Tools
    { name: 'Git', category: 'tools', badge: 'Version Control', desc: 'Distributed source control for collaborative coding.', icon: '🌿' },
    { name: 'GitHub', category: 'tools', badge: 'CI/CD & Actions', desc: 'Code repository hosting, code reviews & automated pipelines.', icon: '🐙' },
    { name: 'Postman', category: 'tools', badge: 'API Testing', desc: 'API testing, mock servers & endpoint documentation.', icon: '🚀' },
    { name: 'VS Code', category: 'tools', badge: 'IDE', desc: 'Lightweight code editor for frontend & full-stack.', icon: '💻' },
    { name: 'IntelliJ IDEA', category: 'tools', badge: 'Java IDE', desc: 'Premier Java & Spring Boot enterprise IDE.', icon: '💡' }
  ];

  get filteredTech(): TechItem[] {
    const cat = this.selectedCat();
    if (cat === 'all') return this.technologies;
    return this.technologies.filter(t => t.category === cat);
  }

  setCategory(cId: string) {
    this.selectedCat.set(cId);
  }
}
