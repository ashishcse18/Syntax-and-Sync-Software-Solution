import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface JobOpening {
  id: string;
  title: string;
  type: 'Full-Time' | 'Internship';
  location: string;
  department: string;
  experience: string;
  tags: string[];
}

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent {
  selectedType = signal<'All' | 'Full-Time' | 'Internship'>('All');
  applyModalJob = signal<JobOpening | null>(null);
  applicationSubmitted = signal(false);

  openings: JobOpening[] = [
    {
      id: 'job-1',
      title: 'Senior Java Spring Boot Engineer',
      type: 'Full-Time',
      location: 'Hybrid / Remote',
      department: 'Backend Engineering',
      experience: '3 - 5 Years',
      tags: ['Java 21', 'Spring Boot', 'Microservices', 'MySQL']
    },
    {
      id: 'job-2',
      title: 'Lead Angular Frontend Architect',
      type: 'Full-Time',
      location: 'Hybrid / Remote',
      department: 'Frontend Engineering',
      experience: '4+ Years',
      tags: ['Angular 20', 'TypeScript', 'RxJS', 'SCSS Design Systems']
    },
    {
      id: 'job-3',
      title: 'Full-Stack Developer (Java & Angular)',
      type: 'Full-Time',
      location: 'On-site',
      department: 'Core Product Team',
      experience: '2 - 4 Years',
      tags: ['Java', 'Spring Boot', 'Angular', 'REST APIs']
    },
    {
      id: 'job-4',
      title: 'AI & Cloud Systems Intern',
      type: 'Internship',
      location: 'Hybrid / Remote',
      department: 'AI & Innovation Lab',
      experience: '0 - 1 Year',
      tags: ['Python / Node.js', 'LLM Prompt Engineering', 'AWS']
    },
    {
      id: 'job-5',
      title: 'Junior Full-Stack Software Intern',
      type: 'Internship',
      location: 'On-site',
      department: 'Software Solutions',
      experience: 'Fresh Graduates',
      tags: ['HTML5', 'TypeScript', 'Java Basics', 'SQL']
    }
  ];

  cultureHighlights = [
    { title: 'Continuous Growth', desc: 'Sponsorship for AWS & Cloud certifications and technology masterclasses.', icon: '🌱' },
    { title: 'Global Impact', desc: 'Work on Fortune 500 enterprise architectures and high-impact automation platforms.', icon: '🌐' },
    { title: 'Flexible Work', desc: 'Hybrid and remote work models focused on delivery and engineering autonomy.', icon: '💻' },
    { title: 'Inclusive Culture', desc: 'Collaborative, transparent team atmosphere where every voice shapes the solution.', icon: '🤝' }
  ];

  get filteredOpenings(): JobOpening[] {
    const type = this.selectedType();
    if (type === 'All') return this.openings;
    return this.openings.filter(o => o.type === type);
  }

  setTypeFilter(type: 'All' | 'Full-Time' | 'Internship') {
    this.selectedType.set(type);
  }

  openApplyModal(job: JobOpening) {
    this.applyModalJob.set(job);
    this.applicationSubmitted.set(false);
  }

  closeApplyModal() {
    this.applyModalJob.set(null);
  }

  submitApplication(event: Event) {
    event.preventDefault();
    this.applicationSubmitted.set(true);
    setTimeout(() => {
      this.closeApplyModal();
    }, 2500);
  }
}
