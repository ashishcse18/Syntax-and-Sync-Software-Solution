import { Component, HostListener, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  themeService = inject(ThemeService);
  isScrolled = signal(false);
  mobileMenuOpen = signal(false);

  navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Technologies', href: '#technologies' },
    { label: 'Projects', href: '#projects' },
    { label: 'Industries', href: '#industries' },
    { label: 'Careers', href: '#careers' },
    { label: 'Contact', href: '#contact' }
  ];

  activeSection = signal('home');

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 40);

    // ScrollSpy active link detection
    const sections = this.navItems.map(item => item.href.substring(1));
    const scrollPos = window.scrollY + 200;

    for (const sectionId of sections) {
      const el = document.getElementById(sectionId);
      if (el) {
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          this.activeSection.set(sectionId);
          break;
        }
      }
    }
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  toggleMobileMenu() {
    this.mobileMenuOpen.update(v => !v);
  }

  scrollTo(href: string) {
    this.mobileMenuOpen.set(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
