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

export interface DialogData {
  blurredImage: string;
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
      'Louisiana Job Connection\'s innovative matching system connects job seekers with Louisiana job opportunities that best fit their skills and experience.',
      'normal',
      'rgba(223, 158, 4, 0.95)'),
    new Project(
      2,
      'University Laboratory School',
      'https://www.uhigh.lsu.edu/',
      'uhigh_logo.png',
      // tslint:disable-next-line:max-line-length
      'The University Laboratory School community aspires towards total effort in every endeavor for maximum student achievement through the development, implementation, and demonstration of exemplary programs and instructional practices.',
      'normal',
      'rgba(0, 0, 0, 0.90)'),
    new Project(
      3,
      'Southeast LA Flood Protection Authority',
      'https://permits.floodauthority.org/',
      'levee_permit_logo.png',
      // tslint:disable-next-line:max-line-length
      'Web-based Levee Safety Permitting System for Southeast Louisiana Flood Protection Authority - East.',
      'normal',
      'linear-gradient(rgba(0, 158, 186, 0.95), rgba(60, 136, 66, 0.95))'),
    new Project(
      4,
      'Pulsario',
      'https://portal.mypulsario.com/',
      'pulsario_logo.png',
      // tslint:disable-next-line:max-line-length
      'Helping people with heart problems or something.',
      'normal',
      'linear-gradient(to right, rgba(0, 86, 119, 0.95), rgba(0, 0, 51, 0.95))'),
    new Project(
      5,
      'Signal',
      'https://permits.floodauthority.org/',
      'signal_logo.png',
      // tslint:disable-next-line:max-line-length
      'Custom tracking solutions and eCommerce site',
      'normal',
      'rgba(223, 86, 64, 0.95)'),
    new Project(
      6,
      'Texas Rebuilds',
      'https://permits.floodauthority.org/',
      'texas_rebuilds_logo.png',
      // tslint:disable-next-line:max-line-length
      'Hurricane Harvey recovery management system',
      'normal',
      'rgba(17, 99, 203, 0.95)')
  ];
  public projectBannerPath: SafeStyle;

  constructor(public dialog: MatDialog, private sanitization: DomSanitizer) { }

  ngOnInit() {
  }

  onClickProject(index: number): void {
    //this.projects[index].state === 'normal' ? this.projects[index].state = 'exploded' : this.projects[index].state = 'normal';
    //const previewElement = document.querySelector(`#project_${index} .preview`);
    this.projectBannerPath = this.sanitization.bypassSecurityTrustStyle(`url('../assets/images/projects/logos/${this.projects[index].logoPath}')`);

    const dialogRef = this.dialog.open(PortfolioDialog, {
      backdropClass: 'portfolio-dialog',
      data: { bannerPath: this.projectBannerPath }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

@Component({
  selector: 'portfolio-dialog',
  templateUrl: 'portfolio-dialog.html',
})

export class PortfolioDialog {

  constructor(
    public dialogRef: MatDialogRef<PortfolioDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
