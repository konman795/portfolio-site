import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // document.querySelector('header').classList.remove('indigo', 'red', 'green', 'yellow');
    // document.querySelector('header').classList.add('yellow');
    // document.querySelector('#body-content').classList.add('yellow');
  }

  onClearForm() {}
}
