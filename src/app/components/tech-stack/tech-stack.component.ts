import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { trigger, state, style, transition, animate, stagger, query } from '@angular/animations';

interface Technology {
  name: string;
  icon: string;
  experience: string;
  level: number; // 1-5 scale
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'cloud';
  color: string;
}

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatTooltipModule],
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.scss'],
  animations: [
    trigger('slideInUp', [
      state('in', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('void => *', [
        style({ opacity: 0, transform: 'translateY(50px)' }),
        animate('600ms ease-out')
      ])
    ]),
    trigger('staggerGrid', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'scale(0.8) translateY(20px)' }),
          stagger(100, [
            animate('500ms ease-out', style({ opacity: 1, transform: 'scale(1) translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ]),
    trigger('scaleOnHover', [
      state('normal', style({ transform: 'scale(1)' })),
      state('hovered', style({ transform: 'scale(1.05)' })),
      transition('normal <=> hovered', animate('200ms ease-in-out'))
    ])
  ]
})
export class TechStackComponent implements OnInit {
  visible = false;
  hoveredTech: string | null = null;

  technologies: Technology[] = [
    // Frontend
    {
      name: 'Angular',
      icon: '🅰️',
      experience: '4+ years',
      level: 4.5,
      category: 'frontend',
      color: '#dd0031'
    },
    {
      name: 'React',
      icon: '⚛️',
      experience: '4+ years',
      level: 4,
      category: 'frontend',
      color: '#61dafb'
    },
    // {
    //   name: 'Next.js',
    //   icon: '🌓',
    //   experience: '2+ years',
    //   level: 3,
    //   category: 'frontend',
    //   color: '#4fc08d'
    // },
    {
      name: 'TypeScript',
      icon: '🔷',
      experience: '4+ years',
      level: 5,
      category: 'frontend',
      color: '#3178c6'
    },
    {
      name: 'JavaScript',
      icon: '🟨',
      experience: '4+ years',
      level: 4.5,
      category: 'frontend',
      color: '#f7df1e'
    },
    {
      name: 'HTML5',
      icon: '🌐',
      experience: '4+ years',
      level: 5,
      category: 'frontend',
      color: '#e34f26'
    },

    // Backend
    {
      name: 'Node.js',
      icon: '🟢',
      experience: '3+ years',
      level: 4,
      category: 'backend',
      color: '#339933'
    },
    {
      name: 'Python',
      icon: '🐍',
      experience: '4+ years',
      level: 4,
      category: 'backend',
      color: '#3776ab'
    },
    {
      name: 'Express.js',
      icon: '🚀',
      experience: '3+ years',
      level: 4,
      category: 'backend',
      color: '#000000'
    },
    {
      name: 'Flask',
      icon: '⚗️',
      experience: '2+ years',
      level: 3,
      category: 'backend',
      color: '#092e20'
    },
    {
      name: 'Django',
      icon: '🎯',
      experience: '2+ years',
      level: 3,
      category: 'backend',
      color: '#092e20'
    },
    // {
    //   name: 'Java',
    //   icon: '☕',
    //   experience: '2+ years',
    //   level: 3,
    //   category: 'backend',
    //   color: '#ed8b00'
    // },

    // Database
    {
      name: 'MongoDB',
      icon: '🍃',
      experience: '3+ years',
      level: 4,
      category: 'database',
      color: '#47a248'
    },
    {
      name: 'PostgreSQL',
      icon: '🐘',
      experience: '3+ years',
      level: 4,
      category: 'database',
      color: '#336791'
    },
    {
      name: 'MS SQL',
      icon: '🗄️',
      experience: '4+ years',
      level: 4,
      category: 'database',
      color: '#4479a1'
    },

    // Tools
    {
      name: 'Git',
      icon: '📚',
      experience: '5+ years',
      level: 5,
      category: 'tools',
      color: '#f05032'
    },
    {
      name: 'Docker',
      icon: '🐳',
      experience: '3+ years',
      level: 4,
      category: 'tools',
      color: '#2496ed'
    },
    {
      name: 'Kubernetes',
      icon: '🛳️',
      experience: '3+ years',
      level: 4,
      category: 'tools',
      color: '#8dd6f9'
    },

    // Cloud
    {
      name: 'AWS',
      icon: '☁️',
      experience: '2+ years',
      level: 3,
      category: 'cloud',
      color: '#ff9900'
    },
    {
      name: 'On Premise Cloud',
      icon: '🔷',
      experience: '2+ years',
      level: 4,
      category: 'cloud',
      color: '#ffca28'
    },
    // {
    //   name: 'Firebase',
    //   icon: '🔥',
    //   experience: '2+ years',
    //   level: 4,
    //   category: 'cloud',
    //   color: '#ffca28'
    // }
  ];

  categories = [
    { key: 'frontend', label: 'Frontend', icon: 'web' },
    { key: 'backend', label: 'Backend', icon: 'dns' },
    { key: 'database', label: 'Database', icon: 'storage' },
    { key: 'tools', label: 'Tools', icon: 'build' },
    { key: 'cloud', label: 'Cloud', icon: 'cloud' }
  ];

  ngOnInit() {
    // Use Intersection Observer to trigger animations when section is visible
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.visible = true;
          }
        });
      }, { threshold: 0.2 });

      const element = document.getElementById('tech-stack');
      if (element) {
        observer.observe(element);
      }
    } else {
      // Fallback for SSR or browsers without IntersectionObserver
      setTimeout(() => {
        this.visible = true;
      }, 500);
    }
  }

  getTechnologiesByCategory(category: string): Technology[] {
    return this.technologies.filter(tech => tech.category === category);
  }

  onTechHover(techName: string) {
    this.hoveredTech = techName;
  }

  onTechLeave() {
    this.hoveredTech = null;
  }

  getStars(level: number): string[] {
    return Array(5).fill('').map((_, i) => i < level ? 'star' : 'star_border');
  }
}
