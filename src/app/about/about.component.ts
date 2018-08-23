import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // document.querySelector('header').classList.remove('indigo', 'red', 'green', 'yellow');
    // document.querySelector('header').classList.add('green');
  }

}
