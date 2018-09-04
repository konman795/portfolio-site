import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
  group,
  query,
  stagger,
  animateChild
} from '@angular/animations';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('blue-box', [
      state(':enter', style({
      })),
      transition('void => *', [
        style({
          'transform': 'translatex(-100vw)'
        }),
        animate('0.8s 0.5s cubic-bezier(0.4, 0.0, 0.2, 1)')
      ])
    ]),
    trigger('skillpod', [
      state(':enter', style({
      })),
      transition('void => *', [
        style({
          'transform': 'scale(0)'
        }),
        animate('0.8s 0.5s cubic-bezier(0.4, 0.0, 0.2, 1)')
      ])
    ]),
    trigger('skillpod-list', [
      transition(':enter', [
        query('@skillpod', stagger(100, animateChild()))
      ])
    ]),
    trigger('bio-card', [
      state(':enter', style({
      })),
      transition('void => *', [
        style({
          'transform': 'translatey(-50px)',
          'opacity': '0'
        }),
        animate('1s 0.5s cubic-bezier(0.4, 0.0, 0.2, 1)')
      ])
    ]),
    trigger('skillset-card', [
      state(':enter', style({
      })),
      transition('void => *', [
        style({
          'transform': 'translatey(50px)',
          'opacity': '0'
        }),
        animate('1s 0.5s cubic-bezier(0.4, 0.0, 0.2, 1)')
      ])
    ])
  ]
})
export class AboutComponent implements OnInit {
  skillPods: Skill[] = [
    new Skill(1, 'Responsive Rights', 'fas fa-desktop', 'Equal opportunity developer for devices of all shapes and sizes.'),
    new Skill(2, 'Objectively Pleasant UI/UX', 'far fa-lightbulb', 'Experiences and decisions backed by facts, not emotion.'),
    new Skill(3, 'Pixel Perfect', 'fas fa-eye', 'Bringing static mockups to life with unrivaled attention to detail.'),
    new Skill(4, 'Cutting Edge', 'fas fa-flag-checkered', 'The latest and bleeding edge tech for every new project.'),
  ];
  siteTechnologies = [
    'HTML5, CSS3, SASS, JavaScript ES6, Bootstrap 4 Grid, Angular 6, Angular Material, TypeScript'
  ],
  languageFrameworks = [
    'HTML5',
    'CSS3',
    'SASS',
    'JavaScript ES5/ES6',
    'jQuery',
    'jQuery UI',
    'Bootstrap 3/4',
    'Razor C#',
    'ASP.NET MVC',
    'SQL',
    'T-SQL',
    'Angular 6',
    'Angular Material',
    'TypeScript',
    'Coldfusion',
    'Coldfusion Markup',
    'PHP'
  ];
  tools = [
    'Visual Studio 2017',
    'Chrome Dev Tools',
    'Team Foundation Server',
    'SQL Server Management Studio',
    'My SQL Workbench',
    'Git',
    'Angular CLI',
    'Node Package Manager',
    'ESLint',
    'TSLint'
  ];
  cms = [
    'WordPress',
    'DNN',
    'Sitefinity',
    'NopCommerce'
  ];
  skillsets = [
    'Responsive',
    'UI/UX',
    'Animations',
    'Material Design',
    'eCommerce',
    'Content Management Systems',
    'Teamwork',
    'Efficiency'
  ];

  constructor() { }

  ngOnInit() {
  }

}
