import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { EmailService } from '../email.service';
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
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('contact-card', [
      state(':enter', style({
      })),
      transition('void => *', [
        style({
          'opacity': '0',
          'transform': 'translatey(25px)'
        }),
        animate('0.8s 0.5s cubic-bezier(0.4, 0.0, 0.2, 1)')
      ])
    ])
  ]
})
export class ContactComponent implements OnInit {
  @ViewChild('f') form: NgForm;

  constructor(private emailService: EmailService, private http: HttpClient) { }

  ngOnInit() {
  }

  onClearForm() {
    this.form.reset();
  }

  onSubmit() {
    const form = document.querySelector('form');
    form.setAttribute('action', 'https://formspree.io/' + 'chao' + '.' + 'konkon' + '@' + 'gmail' + '.' + 'com');
    form.setAttribute('method', 'POST');
    form.submit();
  }
}
