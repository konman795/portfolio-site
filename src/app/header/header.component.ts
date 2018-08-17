import { Component, OnInit } from '@angular/core';

import { AppService } from '../app.service';

import { NavItem } from '../models/navItem.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navItems: NavItem[];
  linkedInURL = '';

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.navItems = this.appService.getNavItems();
    this.linkedInURL = this.appService.getLinkedInURL();
  }

  onToggleSideNav() {
    this.appService.toggleSideNav();
  }
}
