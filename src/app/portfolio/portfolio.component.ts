import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { HeroComponent } from '../components/hero/hero.component';
import { EducationComponent } from '../components/education/education.component';
import { ProjectsComponent } from '../components/projects/projects.component';
import { ExperienceComponent } from '../components/experience/experience.component';
import { TechStackComponent } from '../components/tech-stack/tech-stack.component';
import { ContactComponent } from '../components/contact/contact.component';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    HeaderComponent, 
    HeroComponent, 
    EducationComponent,
    ProjectsComponent,
    ExperienceComponent,
    TechStackComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

}
