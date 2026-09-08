import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements AfterViewInit {
  @ViewChild('statsSection') statsSection!: ElementRef;

  stats = [
    { value: 3, label: 'Enterprise Projects', suffix: '+' },
    { value: 10, label: 'Core Technologies', suffix: '+' },
    { value: 100, label: 'Client Focus', suffix: '%' },
    { value: 24, label: 'Support & Reliability', suffix: '/7' }
  ];

  animatedStats = [0, 0, 0, 0];
  hasAnimated = false;

  ngAfterViewInit(): void {
    this.setupCounterObserver();
  }

  setupCounterObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.hasAnimated) {
          this.hasAnimated = true;
          this.animateCounters();
        }
      });
    }, { threshold: 0.3 });

    if (this.statsSection) {
      observer.observe(this.statsSection.nativeElement);
    }
  }

  animateCounters() {
    this.stats.forEach((stat, index) => {
      const target = stat.value;
      const duration = 1800; // ms
      const steps = 40;
      const stepTime = duration / steps;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          this.animatedStats[index] = target;
          clearInterval(timer);
        } else {
          this.animatedStats[index] = Math.floor(current);
        }
      }, stepTime);
    });
  }

  scrollTo(targetId: string) {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
