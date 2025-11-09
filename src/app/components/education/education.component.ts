import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { trigger, state, style, transition, animate, stagger, query } from '@angular/animations';

interface Education {
  degree: string;
  school: string;
  duration: string;
  year: string;
  description: string;
  gpa?: string;
  achievements?: string[];
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  animations: [
    trigger('slideInUp', [
      state('in', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('void => *', [
        style({ opacity: 0, transform: 'translateY(50px)' }),
        animate('600ms ease-out')
      ])
    ]),
    trigger('staggerAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(50px)' }),
          stagger(200, [
            animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class EducationComponent implements OnInit {
  visible = false;
  
  educationData: Education[] = [
    {
      degree: 'University Visvesvaraya College of Engineering, Bengaluru, India',
      school: 'BANGALORE UNIVERSITY, BENGALURU',
      duration: '2014 - 2018',
      year: '2018',
      description: 'Comprehensive study of Enginnering fundamentals technicals.',
      gpa: '67/100',
      achievements: [
        'Project technical paper publication in International Journal IJRAME platform.',
        'Secured 2nd rank in district level Science talent search examination.',
        'Merit Scholarship and MHRD Scholarship for excellence in 2014 from Karnataka state and central government of India.'
      ]
    }
  ];

  ngOnInit() {
    // Check if IntersectionObserver is available (browser environment)
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      // Use Intersection Observer to trigger animations when section is visible
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.visible = true;
          }
        });
      }, { threshold: 0.2 });

      const element = document.getElementById('education');
      if (element) {
        observer.observe(element);
      }
    } else {
      // Fallback for server-side rendering or browsers without IntersectionObserver
      setTimeout(() => {
        this.visible = true;
      }, 500);
    }
  }
}
