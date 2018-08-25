import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
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
