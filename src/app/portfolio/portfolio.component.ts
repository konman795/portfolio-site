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

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [
    trigger('pancake', [
      state(':enter', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateY(150px)'
        }),
        animate('0.8s cubic-bezier(0.4, 0.0, 0.2, 1)')
      ]),
      state('normal', style({
        width: '12rem',
        height: '12rem',
        borderRadius: '50%'
      })),
      state('exploded', style({
        width: '40rem',
        height: '60rem',
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
        query('@pancake', stagger(150, animateChild()))
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
        width: '40rem',
        height: '60rem',
        borderRadius: '20px',
        filter: 'grayscale(0%) blur(0px)'
      })),
      transition('normal <=> exploded', animate('0.5s cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ])
  ]
})


export class PortfolioComponent implements OnInit {
  state = 'normal';

  constructor() { }

  ngOnInit() {
  }

  onPancakeClick(event) {
    this.state === 'normal' ? this.state = 'exploded' : this.state = 'normal';
    console.log(this.state);
  }

}
