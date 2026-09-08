import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  activeModal = signal<'privacy' | 'terms' | null>(null);

  scrollTo(targetId: string) {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  openModal(type: 'privacy' | 'terms') {
    this.activeModal.set(type);
  }

  closeModal() {
    this.activeModal.set(null);
  }
}
