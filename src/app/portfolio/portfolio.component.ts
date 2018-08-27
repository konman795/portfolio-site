import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  group,
  query,
  stagger,
  animateChild
} from '@angular/animations';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [
    trigger('pancake', [
      state(':enter', style({
        transform: 'scale(1)'
      })),
      transition('void => *', [
        style({
          transform: 'scale(0)'
        }),
        animate('0.8s cubic-bezier(0.4, 0.0, 0.2, 1)')
      ]),
      state('normal', style({
        width: '12rem',
        height: '12rem',
        borderRadius: '50%'
      })),
      state('exploded', style({
        width: '30vw',
        height: '30vw',
        borderRadius: '20px'
      })),
      transition('normal <=> exploded', [
        group([
          query('@pancake-background', animateChild()),
          animate('0.5s cubic-bezier(0.4, 0.0, 0.2, 1)')
        ])
      ])
    ]),
    trigger('package-list', [
      transition(':enter', [
        query('@pancake', stagger(100, animateChild()))
      ]),
    ]),
    trigger('pancake-background', [
      state('normal', style({
        width: '12rem',
        height: '12rem',
        borderRadius: '50%',
        filter: 'grayscale(100%) blur(3px)'
      })),
      state('exploded', style({
        width: '30vw',
        height: '30vw',
        borderRadius: '20px',
        filter: 'grayscale(0%) blur(0px)'
      })),
      transition('normal <=> exploded', animate('0.5s cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ])
  ]
})


export class PortfolioComponent implements OnInit {
  projects: Project[] = [
    new Project(
      1,
      'Louisiana Job Connection',
      'https://louisianajobconnection.com/',
      'ljc_home.jpg',
      // tslint:disable-next-line:max-line-length
      'Louisiana Job Connection\'s innovative matching system connects job seekers with Louisiana job opportunities that best fit their skills and experience.',
      'normal'),
    new Project(
      2,
      'University Laboratory School',
      'https://www.uhigh.lsu.edu/',
      'uhigh_home.jpg',
      // tslint:disable-next-line:max-line-length
      'The University Laboratory School community aspires towards total effort in every endeavor for maximum student achievement through the development, implementation, and demonstration of exemplary programs and instructional practices.',
      'normal'),
    new Project(
      3,
      'Southeast LA Flood Protection Authority',
      'https://permits.floodauthority.org/',
      'levee_permit_home.jpg',
      // tslint:disable-next-line:max-line-length
      'Web-based Levee Safety Permitting System for Southeast Louisiana Flood Protection Authority - East.',
      'normal')
  ];

  constructor() { }

  ngOnInit() {
  }

  onPancakeClick(index: number) {
    console.log(index);
    this.projects[index].state === 'normal' ? this.projects[index].state = 'exploded' : this.projects[index].state = 'normal';
  }

}
