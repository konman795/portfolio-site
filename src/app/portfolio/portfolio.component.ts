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
import { ScreenShot } from '../models/screenshot.model';

export interface DialogData {
  name: string;
  problem: string;
  solution: string;
  contribution: string;
  technologies: string[];
  screenshots: ScreenShot[];
  headerBackgroundColor: SafeStyle;
  url: string;
}

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
      'Louisiana Economic Development approached our team needing a solution to help Louisiana residents and businesses with filling jobs. Along with filling jobs, they wanted to give businesses incentives to come to Louisiana.',
      // tslint:disable-next-line:max-line-length
      'Our team designed and built a full featured job matching system to intelligently match Jobseeker and Employees based on their resumes and Employer\'s criteria. Individual landing pages were built for each region and industry in Louisiana. Employers were also given the ability to create custom landing pages with their own URL. Last but not least, a dedicated admin portal was created to manage logins, view analytics, generate reports and impersonate accounts. In the end we delivered a great product that genuinely wowed our client.',
      // tslint:disable-next-line:max-line-length
      'I worked with Louisiana Economic Development\s designers throughout the mockup process to ensure the UI/UX being designed stayed simple, efficient and easy to navigate. Additionally, I set up and brought all the static mockups to life for the entire application. The responsive device development/optimizations were solely my responsibility as well. These tasks were completed in parallel with the back-end development because of the tight timeline. One of my favorite challenges for this project was the development of the custom employer landing pages. Thinking of the best ways to hook into their content and options from the back end into the front end was an incredibly fun problem to solve.',
      ['HTML5', 'CSS3', 'SASS', 'JavaScript', 'jQuery', 'jQuery UI', 'Bootstrap 4', 'ASP.NET MVC', 'Razor C#', 'MySQL'],
      [
        // tslint:disable-next-line:max-line-length
        new ScreenShot('ljc_home.jpg', 'Louisiana Job Connection\'s landing page. Developed to span across the entire viewport and scale with all the most popular screen sizes.'),
        new ScreenShot('ljc_jobseeker_dashboard.jpg', 'Jobseeker\'s dashboard view after logging in.'),
        new ScreenShot('ljc_employer_dashboard.jpg', 'Employer\'s dashboard view after logging in.')
      ],
      'normal',
      'rgba(223, 158, 4, 0.95)',
      'rgb(223, 158, 4)'),
    new Project(
      6,
      'Texas Rebuilds',
      '',
      'texas_rebuilds_logo.png',
      // tslint:disable-next-line:max-line-length
      'In 2017, Hurricane Harvey devastated many parts of Texas racking up $125 billion in damage and destroying at least 100,000 homes. FEMA needed a hurricane recovery management system to streamline the housing claims and recovery process. This all needed to be done yesterday.',
      // tslint:disable-next-line:max-line-length
      'Our team designed and developed a desktop web app for 8+ different roles along with an Android app for their field agents to use. Along with unique capabilties granted for each role, we gave superadmin roles the ability to impersonate any person, company and role in the system. We worked 14+ hour days for 3+ months with the client every day confirming and tweaking requirements. Each release took around 7-14 days which involved releasing a fully completed feature set for a role. This allowed FEMA\'s agents to start using the application as soon as possible while we continued work on other parts of the application. The extremely agile nature of this project brought out the best in all of us and solidified the fact that our team could handle any challenge. In the end, we delivered a product that exceeded our client\'s expectations.',
      // tslint:disable-next-line:max-line-length
      'I set up and translated all the static mockups we initially received into a workable shell for the back end developers to integrate into. Since this project was extremely agile, I paid special attention to making items as modular/reusable as possible within the given time constraints. Working closely with the project managers was crucial, I knew exactly what parts to focus my efforts on at any given time. After the first phase was completed, our designers were out of commission due to unforseen problems. I was responsible for coming up with a plan and improvising with what we had. I took our first phase mockups and generated/tweaked the UI/UX for the rest of the application as we progressed into each new phase. I am honored to have played a part in helping people get back into their homes faster.',
      ['HTML5', 'CSS3', 'SASS', 'JavaScript', 'jQuery', 'jQuery UI', 'Bootstrap 4', 'ASP.NET MVC', 'Razor C#', 'T-SQL'],
      [
        new ScreenShot('texas_rebuilds_login.jpg', 'Texas Rebuilds hurricane management recovery system login portal.'),
        new ScreenShot('texas_rebuilds_superadmin_dash.jpg', 'Superadmin dashboard view after logging in.'),
        new ScreenShot('texas_rebuilds_detail.jpg', 'Client detail view showing their current housing recovery status.')
      ],
      'normal',
      'rgba(17, 99, 203, 0.95)',
      'rgb(17, 99, 203)'),
    new Project(
      3,
      'Southeast LA Flood Protection Authority',
      'https://permits.floodauthority.org/',
      'levee_permit_logo.png',
      // tslint:disable-next-line:max-line-length
      'Southeast Louisiana Flood Protection Authority - East (SLFPA-E) needed to overhaul their old school levee permit application process. They needed a faster and more efficient way for applicants to submit and track permit applications electronically.',
      // tslint:disable-next-line:max-line-length
      'Our team started by working with SLFPA-E to fully understand the permit application process so we could develop requirements to meet all their needs. As an applicant, the process begins with a location check to let them know immediately if they need to apply for a permit. If they do, the application process is broken up into simple steps guided by a progress bar. After submission, an internal reviewer and/or 3rd party reviewers work with the applicant to get their application approved. Finally, there is an admin role who is able to oversee everything in the system. The client loved everything about the application, from the UI/UX to the functionality and control they had over the system.',
      // tslint:disable-next-line:max-line-length
      'I worked with the designers and project managers throughout the design process to confirm the UI/UX decisions being made would work with the requirements. We were able to condense the original designs quite a bit and ended up with a more pleasant and space efficient experience. I was also responsible for setting up the front end structure and taking all the static mockups and turning them into code. One of the fun challenges of this project was implementing a Google Map background of the permit location into the applications list view. I got to learn a lot about the Google Maps API and got my first taste of Bootstrap 4\'s stable release.',
      ['HTML5', 'CSS3', 'SASS', 'JavaScript', 'jQuery', 'jQuery UI', 'Bootstrap 4', 'ASP.NET MVC', 'Razor C#', 'T-SQL', 'Google Maps API'],
      [
        new ScreenShot('levee_permit_home.jpg', 'SLFPA login portal.'),
        new ScreenShot('levee_permit_dashboard.jpg', 'Admin applications overview after logging in.'),
        new ScreenShot('levee_permit_application_detail.jpg', 'Application detail view showing current progress.')
      ],
      'normal',
      'linear-gradient(to right, rgba(0, 158, 186, 0.95), rgba(60, 136, 66, 0.95))',
      'linear-gradient(to right, rgb(0, 158, 186), rgb(60, 136, 66))'),
    new Project(
      5,
      'Signal',
      '',
      'signal_logo.png',
      // tslint:disable-next-line:max-line-length
      'Custom tracking solutions and eCommerce site',
      // tslint:disable-next-line:max-line-length
      'Create a completely customizable tracking platform, ecommerce and native mobile app companion for the client to redistribute as their own service.',
      'all the front end stuff',
      ['HTML5', 'CSS3', 'SASS', 'JavaScript', 'jQuery', 'jQuery UI', 'Bootstrap 3', 'ASP.NET MVC', 'Razor C#', 'T-SQL', 'Google Maps API'],
      [
        new ScreenShot('signal_login.jpg', 'Signal login portal.'),
        new ScreenShot('signal_add_brand.jpg', 'Signal Monitor\'s live tracking map view after logging in.'),
        new ScreenShot('signal_monitor_view.jpg', 'Starting point of adding a new brand to the system.')
      ],
      'normal',
      'rgba(223, 86, 64, 0.95)',
      'rgb(223, 86, 64)'),
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
      [
        new ScreenShot('pulsario_login.jpg', 'Pulsario login portal.'),
        new ScreenShot('pulsario_dashboard.jpg', 'Provider dashboard view after logging in.'),
        new ScreenShot('pulsario_main_tasks.jpg', 'Primary application tasks view with side navigation.')
      ],
      'normal',
      'linear-gradient(to right, rgba(0, 86, 119, 0.95), rgba(0, 0, 51, 0.95))',
      'linear-gradient(to right, rgb(0, 86, 119), rgb(0, 0, 51))'),
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
      [
        new ScreenShot('uhigh_home_2.jpg', 'University Laboratory School homepage.'),
        new ScreenShot('uhigh_interior_page_2.jpg', 'ULS interior page view.'),
        new ScreenShot('uhigh_page_edit.jpg', 'ULS admin page edit view.')
      ],
      'normal',
      'rgba(0, 0, 0, 0.90)',
      'rgb(0, 0, 0)')
  ];
  public projectHeaderBackgroundColor: SafeStyle;
  projectName: string;
  projectProblem: string;
  projectSolution: string;
  projectContribution: string;
  projectTechnologies: string[];
  projectScreenshots: ScreenShot[];
  projectUrl: string;

  constructor(public dialog: MatDialog, private sanitization: DomSanitizer) { }

  ngOnInit() {
  }

  onClickProject(index: number): void {

    // tslint:disable-next-line:max-line-length
    this.projectHeaderBackgroundColor = this.sanitization.bypassSecurityTrustStyle(`${this.projects[index].dialogHeaderBackgroundColor}`);
    this.projectName = this.projects[index].name;
    this.projectProblem = this.projects[index].description;
    this.projectSolution = this.projects[index].solution;
    this.projectContribution = this.projects[index].contribution;
    this.projectTechnologies = this.projects[index].technologiesUsed;
    this.projectScreenshots = this.projects[index].screenshots;
    this.projectUrl = this.projects[index].url;

    const dialogRef = this.dialog.open(PortfolioDialogComponent, {
      data: {
        headerBackgroundColor: this.projectHeaderBackgroundColor,
        name: this.projectName,
        problem: this.projectProblem,
        solution: this.projectSolution,
        contribution: this.projectContribution,
        technologies: this.projectTechnologies,
        screenshots: this.projectScreenshots,
        url: this.projectUrl
      },
      width: '80vw'
    });

    dialogRef.afterClosed().subscribe(result => { });
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
