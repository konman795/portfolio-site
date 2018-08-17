import { MatSidenav } from '@angular/material/sidenav';

import { NavItem } from './models/navItem.model';

export class AppService {
    appSidenav: MatSidenav;
    private navItems: NavItem[] = [
        new NavItem('Home', '/', 'home', 'green'),
        new NavItem('About Me', 'about', 'info', 'orange'),
        new NavItem('Portfolio', 'portfolio', 'folder', 'blue'),
        new NavItem('Contact', 'contact', 'contact_mail', 'purple')
    ];
    // private navItems: NavItem[] = [
    //     new NavItem('Nav Item 1', '/', 'home', 'green'),
    //     new NavItem('Nav Item 2', 'about', 'info', 'orange'),
    //     new NavItem('Nav Item 3', 'portfolio', 'folder', 'blue'),
    //     new NavItem('Nav Item 4', 'contact', 'contact_mail', 'purple')
    // ];

    getNavItems() {
        return this.navItems.slice();
    }

    setSideNavItem(sideNav: MatSidenav) {
        this.appSidenav = sideNav;
    }

    toggleSideNav() {
        this.appSidenav.toggle();
    }
}
