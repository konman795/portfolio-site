import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('sideNav') appSideNav: MatSidenav;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.setSideNavItem(this.appSideNav);
  }
}
