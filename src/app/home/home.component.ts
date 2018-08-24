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
        'clip-path': 'polygon(0% 25%, 100% 15%, 100% 85%, 0% 75%)'
      })),
      transition('void => *', [
        style({
          'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
        }),
        animate('0.8s cubic-bezier(0.4, 0.0, 0.2, 1)')
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // document.querySelector('header').classList.remove('indigo', 'red', 'green', 'yellow');
    // document.querySelector('header').classList.add('indigo');
  }

}
