import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // document.querySelector('header').classList.remove('indigo', 'red', 'green', 'yellow');
    // document.querySelector('header').classList.add('indigo');
  }

}
