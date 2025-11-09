import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { trigger, state, style, transition, animate, stagger, query } from '@angular/animations';

interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  logo: string;
  current: boolean;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatChipsModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
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
          stagger(300, [
            animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class ExperienceComponent implements OnInit {
  visible = false;

  experiences: Experience[] = [
    {
      id: 1,
      company: 'ZeOmega Infotech',
      position: 'Senior Full Stack Developer',
      duration: 'Jan 2023 - Present',
      location: 'Bangalore, Karnataka',
      description: 'As a Senior Software Developer, I led the design and development of scalable healthcare applications, architected microservices, and implemented secure API integrations. I mentored junior developers, drove best practices, and collaborated with cross-functional teams to deliver cloud-native solutions on Kubernetes and Rancher, ensuring high performance, reliability, and security.',
      achievements: [
        'Built scalable healthcare applications serving 100K+ users, ensuring performance and reliability, Streamlined cloud-native deployments on Kubernetes and Rancher',
        'Mentored junior developers, establishing coding standards and best practices to improve delivery quality',
        'Developed and integrated an e-Prior Authorization (ePA) SMART on FHIR web application using Angular and Python Flask, implementing secure OAuth2.0-based SMART launch flow and K8 deployments, to streamline prior authorization workflows between healthcare providers and payers.',
        'Designed and fine-tuned an Health Digitizer intelligent Generative AI model to automatically generate structured clinical decision trees and questionnaires aligned with medical policy guidelines, integrating standardized medical coding systems such as CPT, SNOMED CT, and ICD-10.',
        'Researched, architected, and implemented a Node.js-based Clinical Quality Language (CQL) execution framework to evaluate CQL expressions and prepopulate FHIR QuestionnaireResponses using clinical data, improving automation and decision support accuracy.',
        'Developed the Health Assist Highlighter module leveraging NLP and AI models to extract structured insights from unstructured clinical notes and map them to FHIR resources. Automated prepopulation of medical necessity questionnaires and integrated evidence highlighting and citation auditing for improved compliance and transparency.',
        'Delivered customized system upgrades, ensuring minimal defects and seamless transitions to newer product versions. Collaborated with vendors and independently implemented the Adaptive Questionnaire framework to enhance configurability and dynamic question generation.',
        'Rapidly upskilled in Java and customized the WSO2 API Manager OAuth2 refresh grant flow to embed user-specific information into access tokens using Java-based extensions.'
      ],
      technologies: ['Angular', 'Python', 'WSO2', 'Docker', 'Kubernetes', 'NodeJs', 'AWS'],
      logo: 'assets/images/Zeomega.jpeg',
      current: true
    },
    {
      id: 2,
      company: 'Marlabs Pvt Ltd',
      position: 'Software Developer',
      duration: 'Jan 2022 - Jan 2023',
      location: 'Bangalore, Karnataka',
      description: 'As a Software Developer, I contributed to building enterprise healthcare applications, developing features in Python, Angular. I implemented REST APIs, optimized database queries, and supported API management with WSO2, while collaborating with QA and DevOps teams to deliver secure, high-quality, cloud-ready solutions.',
      achievements: [
        'Developed FHIR-based server-side apps such as Clinical Repository and Facade, Payer-to-Payer, Provider Directory, Drug Formulary, and CARIN BB, supporting standardized and seamless data exchange across healthcare systems.',
        'Engineered Bulk Export capability using Celery supporting FHIR-based data extraction at scale, improving interoperability and analytics efficiency. Built automated pipelines for data ingestion and storage in AWS S3 and on-premise private cloud environments.',
        'Led FHIR product certification using the Touchstone toolkit, ensuring HL7 compliance and achieving Drummond certification. Built a CLI-based terminology loader to automate ingestion of SNOMED CT, LOINC, and CPT, improving scalability and performance.',
        'Developed multiple demoable applications and proof-of-concepts (POCs) for sales demos, Connectathons, and client conferences.',
        'Implemented real-time features with WebSocket, enhancing system responsiveness',
        'Optimized database queries, improving API response time by 25%'
      ],
      technologies: ['Angular', 'Python', 'TypeScript', 'WSO2', 'Docker', 'Kubernetes', 'NodeJs', 'AWS'],
      logo: 'assets/images/marlabs.png',
      current: false
    },
    {
      id: 3,
      company: 'DruthZuci tech solutions Pvt. Ltd',
      position: 'Python Software Developer',
      duration: 'Oct 2020 - Dec 2021',
      location: 'Bangalore Karnataka',
      description: 'Worked on hands-on projects using Python, Postgres, MongoDB. Collaborated with peers in Agile sprints, developed RESTful APIs, and built Patient onboarding Medicolitesource responsive web applications',
      achievements: [
        'Developed Medicolitesource , a hospital management web application using Django, implementing dynamic views, template-driven UI, and intuitive URL mapping to enhance user experience.',
        'Strengthened code quality by developing unit tests with Pytest, covering views, database operations, and URL route hence achieving an 80% drop in defects',
        'Gained exposure to version control (Git/GitHub) and collaborative coding practices'
      ],
      technologies: ['Python', 'DJango', 'Postgres', 'MongoDB'],
      logo: 'assets/images/druthzucitechsoln.png',
      current: false
    }
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

      const element = document.getElementById('experience');
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
}