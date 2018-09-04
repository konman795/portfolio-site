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
      'Louisiana Economic Development (LED) needed a solution to help Louisiana residents and businesses fill jobs and wanted to incentivize businesses to come to Louisiana.',
      // tslint:disable-next-line:max-line-length
      'Our team designed and built a full featured job matching system to intelligently match Jobseekers and Employers based on their resumes and Employer\'s criteria. Individual landing pages were built for each region and industry in Louisiana. Employers were also given the ability to create custom landing pages with their own URL. Last but not least, an admin portal was created to manage logins, view analytics, generate reports and impersonate accounts. In the end we delivered a great product that genuinely wowed our client.',
      // tslint:disable-next-line:max-line-length
      'I worked with LED\'s designers throughout the mockup process to ensure the UI/UX being crafted stayed simple, efficient and easy to understand. Additionally, I set up and brought all the static mockups to life for the entire app. The responsive device development/optimizations were solely my responsibility as well. These tasks were completed in parallel with the back-end developers because of the tight timeline. One of my favorite challenges for this project was the development of the custom employer landing pages. Thinking of the best ways to hook into their content and options from the back end into the front end was an incredibly fun problem to solve.',
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
      'https://tx-preps.com/',
      'texas_rebuilds_logo.png',
      // tslint:disable-next-line:max-line-length
      'In 2017, Hurricane Harvey devastated many parts of Texas racking up $125 billion in damage and destroying at least 100, 000 homes.FEMA needed a hurricane recovery management system to streamline the housing claims and recovery process.',
      // tslint:disable-next-line:max-line-length
      'Our team designed and developed a desktop web app for 8+ different roles along with an Android app for their field agents to use. In addition to the unique capabilities granted for each role, super admins could impersonate any person, company and role in the system. We worked 14+ hour days for 3+ months with the client every day confirming and tweaking requirements. Each phase took around 7 to 14 days which involved releasing a fully completed feature set for a role. This allowed FEMA\'s agents to begin using the application as soon as possible while we continued work on other parts of the app. The incredibly agile nature of this project brought out everyone’s best and solidified what our team was capable of. In the end, we delivered a product that exceeded our client\'s expectations.',
      // tslint:disable-next-line:max-line-length
      'I set up and translated all the static mockups we received into a workable shell for the back-end developers to integrate into. I paid special attention to making items as modular/reusable as possible within the given time constraints. Working closely with the project managers was crucial to knowing exactly what parts to focus on at any given time. After the first phase was completed, our designers were out of commission due to unforeseen problems. I was responsible for coming up with a plan and improvising with what we had. I took our first phase mockups and generated/tweaked the UI/UX for the rest of the application as we progressed into each new phase. I am honored to have played a part in helping people get back into their homes faster.',
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
      'Southeast Louisiana Flood Protection Authority - East',
      'https://permits.floodauthority.org/',
      'levee_permit_logo.png',
      // tslint:disable-next-line:max-line-length
      'Southeast Louisiana Flood Protection Authority - East (SLFPA-E) needed to overhaul their manual levee permit application process. They wanted a faster and more efficient way for applicants to submit and track permit applications electronically.',
      // tslint:disable-next-line:max-line-length
      'Our team started by working with SLFPA-E to fully understand the permit application process so we could develop requirements to meet all their needs.  We simplified the process with a location check to let the applicant know immediately if they needed to apply for a permit. If they do, the application process is broken up into simple steps guided by a progress bar. An internal reviewer and/or 3rd party reviewer works with the applicant through the web app to get their application approved. Finally, the admin role is able to view and edit almost everything in the system. The client loved everything about the application, from the UI/UX to the functionality and control they had over the system.',
      // tslint:disable-next-line:max-line-length
      'I worked with the designers and project managers throughout the design process to confirm the UI/UX decisions being made would integrate with the requirements. We were able to condense the original designs quite a bit and ended up with a more pleasant and space efficient experience. I was also responsible for setting up the front-end structure and taking all the static mockups and turning them into code. One of the fun challenges of this project was implementing a Google Maps background of the permit location into the applications list view. I learned a lot about the Google Maps API and got my first taste of Bootstrap 4\'s stable release.',
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
      'https://mybipsignal.com/',
      'signal_logo.png',
      // tslint:disable-next-line:max-line-length
      'The client had a vision for a fully customizable location tracking service and wanted the ability turn any iOS or Android phone/tablet into a tracking point, then view these points and manage them from a web interface. They also needed an effective way to distribute and sell this service.',
      // tslint:disable-next-line:max-line-length
      'Our team started by working with the client on their expectations and what could be accomplished in the timeframe they have in mind. We gave the client the ability to register and customize everything from displaying their own logo in the header/footer to choosing the color scheme of their web app when logged in. A "monitor" could then log in and see the customized Google Maps view showing the live location of every registered device. Admin and super admin roles allowed them to control and edit everything as well as impersonate other accounts/brands. After the main tracking components and apps were completed, we built an e-commerce portal powered by nopCommerce for the client to automate the selling process.',
      // tslint:disable-next-line:max-line-length
      'My role in this project involved setting up the initial front-end file structure and bringing the static mockups for the entire web app to life. I worked with the team to resolve concerns around the UI not taking advantage of the screen space in some of the UI and unintuitive UX. My favorite challenges for this project involved working with the Google Maps API to help build/optimize the tracking UI, setting up the themed web app UI based on the company’s brand guidelines, and developing the templates on the e-commerce site.',
      // tslint:disable-next-line:max-line-length
      ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'jQuery UI', 'Bootstrap 3', 'ASP.NET MVC', 'Razor C#', 'T-SQL', 'Google Maps API', 'nopCommerce'],
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
      'Prevail Heart Clinics needed a way to communicate with and monitor patients with heart problems who were unable to physically make it to appointments.',
      // tslint:disable-next-line:max-line-length
      'Our team worked with Prevail Heart Clinics to design and develop a web app accompanied by an iOS and Android app. The patient is able to easily update their status using the web or mobile app so their doctor could view and assess their wellbeing remotely. We also implemented a full featured communications system so the patient and doctor could communicate with each other directly from within the app.',
      // tslint:disable-next-line:max-line-length
      'I was responsible for all the front-end aspects of this project. I developed the public facing site using the mockups provided by our designers. The biggest challenge came with the internal web app development. The back-end development was moving faster than I was so many of the views were being generated first and I went in afterwards to integrate them. It was a chance to think of UI in a different way. A few months after the site and application launched, the client went through a rebranding and I was tasked with handling all the UI rebranding for the web app.',
      ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Bootstrap 3', 'ASP.NET MVC', 'Razor C#', 'T-SQL'],
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
      'University Laboratory School (ULS) wanted a complete redesign of their website and an easy way to manage content and images, create calendar events with custom tags/categories and give faculty members the ability to request events via an online form.',
      // tslint:disable-next-line:max-line-length
      'After consulting and brainstorming with the client, our team went to work on the redesign. We decided to take a pre-packaged CMS, DotNetNuke (DNN) and integrate our own templates and modules into it. DNN integrated well with the framework we were using and also provided a great out of the box experience for content/account management. A calendar module was developed with the ability to assign custom tags for events. An event request system with the ability to save and finish later was created to simplify and expedite the event approval process.',
      // tslint:disable-next-line:max-line-length
      'I was tasked with the research and setting up of DNN before the project kicked off because it was the first time our team was working with this CMS. When the project received the green light, I went to work customizing, theming and creating views within DNN using the mockups from our designers. Along with the desktop web app, I also optimized the site for mobile device consumption. The biggest challenge I encountered was figuring out the ins and outs of DNN so I could integrate my work correctly. I am accustomed to starting from scratch so this was a welcome challenge and nice change of pace.',
      // tslint:disable-next-line:max-line-length
      ['HTML5', 'CSS3', 'SASS', 'JavaScript', 'jQuery', 'jQuery UI', 'Bootstrap 3', 'ASP.NET MVC', 'Razor C#', 'DotNetNuke (DNN)'],
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
