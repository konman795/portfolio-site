import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  fbURL: string;
  instagramURL: string;
  linkedInURL: string;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.fbURL = this.appService.getfbURL();
    this.instagramURL = this.appService.getInstagramURL();
    this.linkedInURL = this.appService.getLinkedInURL();
  }

}
