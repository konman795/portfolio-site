import { Component, OnInit, Inject } from '@angular/core';
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
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Project } from '../models/project.model';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

export interface DialogData {}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [
    trigger('card', [
      state(':enter', style({
        transform: 'translatey(0)',
        opacity: '1'
      })),
      transition('void => *', [
        style({
          transform: 'translatey(100px)',
          opacity: '0'
        }),
        animate('0.8s cubic-bezier(0.4, 0.0, 0.2, 1)')
      ]),
      state('normal', style({
      })),
      state('exploded', style({
      })),
      transition('normal <=> exploded', [
        group([
          // query('@pancake-background', animateChild()),
          animate('0.8s cubic-bezier(0.4, 0.0, 0.2, 1)')
        ])
      ])
    ]),
    trigger('card-list', [
      transition(':enter', [
        query('@card', stagger(50, animateChild()))
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
      'ljc_logo.png',
      // tslint:disable-next-line:max-line-length
      'Louisiana Job Connection\'s innovative matching system connects job seekers with Louisiana job opportunities that best fit their skills and experience.',
      // tslint:disable-next-line:max-line-length
      'Built a full featured system to allow custom company landing pages, communication system, job matching algorithms, jobseeker and employer portals',
      // tslint:disable-next-line:max-line-length
      'Meet with designers and project managers through each mockup revision. Converted static mockups to live site for entire application. Email templates. Responsive',
      ['HTML5', 'CSS3', 'JavaScript ES5', 'jQuery', 'Bootstrap 4', 'ASP.NET MVC', 'Razor C#'],
      [],
      ['ljc_home.png', 'ljc_jobseeker_dashboard.png', 'ljc_employer_dashboard.png'],
      'normal',
      'rgba(223, 158, 4, 0.95)'),
    new Project(
      2,
      'University Laboratory School',
      'https://www.uhigh.lsu.edu/',
      'uhigh_logo.png',
      // tslint:disable-next-line:max-line-length
      'The University Laboratory School community aspires towards total effort in every endeavor for maximum student achievement through the development, implementation, and demonstration of exemplary programs and instructional practices.',
      // tslint:disable-next-line:max-line-length
      'After obtaining requirements, we decided to integrate with the DNN (Dot Net Nuke) CMS. DNN was a perfect match being a beautiful prepackaged CMS UI/UX already and easy integration with our framework. Provided a form request system, calendar and page creation with custom modules.',
      'my contribution to this project:',
      ['HTML5', 'CSS3', 'SASS'],
      [],
      [],
      'normal',
      'rgba(0, 0, 0, 0.90)'),
    new Project(
      3,
      'Southeast LA Flood Protection Authority',
      'https://permits.floodauthority.org/',
      'levee_permit_logo.png',
      // tslint:disable-next-line:max-line-length
      'Web-based Levee Safety Permitting System for Southeast Louisiana Flood Protection Authority - East.',
      'Levee permit applications needed to be streamlined',
      'my contribution to levee permit project',
      ['HTML5', 'Bootstrap 4'],
      [],
      [],
      'normal',
      'linear-gradient(rgba(0, 158, 186, 0.95), rgba(60, 136, 66, 0.95))'),
    new Project(
      4,
      'Pulsario',
      'https://portal.mypulsario.com/',
      'pulsario_logo.png',
      // tslint:disable-next-line:max-line-length
      'Helping people with heart problems or something.',
      'Heart risk management with doctor and patient via a web portal',
      'all the front end stuff, and rebranding',
      ['HTML5', 'Bootstrap 3'],
      [],
      [],
      'normal',
      'linear-gradient(to right, rgba(0, 86, 119, 0.95), rgba(0, 0, 51, 0.95))'),
    new Project(
      5,
      'Signal',
      'https://permits.floodauthority.org/',
      'signal_logo.png',
      // tslint:disable-next-line:max-line-length
      'Custom tracking solutions and eCommerce site',
      // tslint:disable-next-line:max-line-length
      'Create a completely customizable tracking platform, ecommerce and native mobile app companion for the client to redistribute as their own service.',
      'all the front end stuff',
      ['Bootstrap 3', 'nopCommerce'],
      [],
      [],
      'normal',
      'rgba(223, 86, 64, 0.95)'),
    new Project(
      6,
      'Texas Rebuilds',
      'https://permits.floodauthority.org/',
      'texas_rebuilds_logo.png',
      // tslint:disable-next-line:max-line-length
      'Hurricane Harvey recovery management system',
      'FEMA needed a system built to manage the housing recovery efforts. For each role.',
      'Built all front end UI/UX related items',
      ['Bootstrap 4'],
      [],
      [],
      'normal',
      'rgba(17, 99, 203, 0.95)')
  ];
  public projectBannerPath: SafeStyle;
  projectName: string;
  projectProblem: string;
  projectSolution: string;
  projectContribution: string;
  projectTechnologies: string[];
  projectScreenshots: string[];

  constructor(public dialog: MatDialog, private sanitization: DomSanitizer) { }

  ngOnInit() {
  }

  onClickProject(index: number): void {
    // this.projects[index].state === 'normal' ? this.projects[index].state = 'exploded' : this.projects[index].state = 'normal';
    // const previewElement = document.querySelector(`#project_${index} .preview`);

    // tslint:disable-next-line:max-line-length
    this.projectBannerPath = this.sanitization.bypassSecurityTrustStyle(`url('../assets/images/projects/screenshots/${this.projects[index].screenshotPaths[0]}')`);
    this.projectName = this.projects[index].name;
    this.projectProblem = this.projects[index].name;
    this.projectSolution = this.projects[index].solution;
    this.projectContribution = this.projects[index].contribution;
    this.projectTechnologies = this.projects[index].technologiesUsed;
    this.projectScreenshots = this.projects[index].screenshotPaths;

    const dialogRef = this.dialog.open(PortfolioDialogComponent, {
      backdropClass: 'app-portfolio-dialog',
      data: {
        bannerPath: this.projectBannerPath,
        name: this.projectName,
        problem: this.projectProblem,
        solution: this.projectSolution,
        contribution: this.projectContribution,
        technologies: this.projectTechnologies,
        screenshots: this.projectScreenshots
      },
      width: '80vw'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

@Component({
  selector: 'app-portfolio-dialog',
  templateUrl: 'portfolio-dialog.html',
})

export class PortfolioDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<PortfolioDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
