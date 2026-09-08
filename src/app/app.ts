import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { TechStackComponent } from './components/tech-stack/tech-stack.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { WhyChooseUsComponent } from './components/why-choose-us/why-choose-us.component';
import { IndustriesComponent } from './components/industries/industries.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { CareersComponent } from './components/careers/careers.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    TechStackComponent,
    ProjectsComponent,
    WhyChooseUsComponent,
    IndustriesComponent,
    TestimonialsComponent,
    CareersComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent {
  title = 'Syntax & Sync Software Solutions';
}
