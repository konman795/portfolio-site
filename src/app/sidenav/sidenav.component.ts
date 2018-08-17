import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { NavItem } from '../models/navItem.model';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  sideNavItems: NavItem[];

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.sideNavItems = this.appService.getNavItems();
  }

  onNavigate() {
    this.appService.toggleSideNav();
  }

  onClose() {
    this.appService.toggleSideNav();
  }
}
