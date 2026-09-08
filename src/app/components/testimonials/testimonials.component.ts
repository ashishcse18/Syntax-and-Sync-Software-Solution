import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  testimonials = [
    {
      quote: "Syntax & Sync delivered our HR Document Template Dashboard on time with exceptional engineering quality. The Java Spring Boot and Angular architecture reduced our document processing overhead by 65%.",
      author: "Senior HR Director",
      company: "TVM Infotech",
      rating: 5,
      avatar: "👨‍💼"
    },
    {
      quote: "The WhatsApp Bulk Interview Scheduler transformed our recruitment speed. Integrating Meta Cloud API with Spring Boot enabled automated campaign delivery tracking across thousands of candidates effortlessly.",
      author: "Head of Talent Acquisition",
      company: "Enterprise HR Tech Solutions",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      quote: "Smart Sphere Classroom provided our institution with a seamless AI-powered LMS. The role-based dashboards and automated grading engine received stellar feedback from both faculty and students.",
      author: "Chief Technology Officer",
      company: "EduSphere Global",
      rating: 5,
      avatar: "👨‍💻"
    }
  ];
}
