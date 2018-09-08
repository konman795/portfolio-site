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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('white-box', [
      state(':enter', style({
      })),
      transition('void => *', [
        style({
          'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        }),
        animate('0.8s 0.5s cubic-bezier(0.4, 0.0, 0.2, 1)')
      ])
    ]),
    trigger('white-divider', [
      state(':enter', style({
        'width': '50%'
      })),
      transition('void => *', [
        style({
          'width': '0%'
        }),
        animate('0.8s 0.5s cubic-bezier(0.4, 0.0, 0.2, 1)')
      ])
    ]),
    trigger('fadeIn', [
      state(':enter', style({
        'opacity': '1'
      })),
      transition('void => *', [
        style({
          'opacity': '0'
        }),
        animate('0.8s 0.5s cubic-bezier(0.4, 0.0, 0.2, 1)')
      ])
    ]),
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // document.querySelector('header').classList.remove('indigo', 'red', 'green', 'yellow');
    // document.querySelector('header').classList.add('indigo');
  }

}
