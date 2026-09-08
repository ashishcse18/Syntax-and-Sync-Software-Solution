import { Injectable, signal } from '@angular/core';

export type ThemeMode = 'dark' | 'light';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  currentTheme = signal<ThemeMode>('dark');

  constructor() {
    this.initTheme();
  }

  private initTheme(): void {
    const savedTheme = localStorage.getItem('ss_theme') as ThemeMode;
    if (savedTheme === 'light' || savedTheme === 'dark') {
      this.setTheme(savedTheme);
    } else {
      // Default to enterprise dark mode
      this.setTheme('dark');
    }
  }

  setTheme(mode: ThemeMode): void {
    this.currentTheme.set(mode);
    document.documentElement.setAttribute('data-theme', mode);
    localStorage.setItem('ss_theme', mode);
  }

  toggleTheme(): void {
    const nextTheme = this.currentTheme() === 'dark' ? 'light' : 'dark';
    this.setTheme(nextTheme);
  }
}
