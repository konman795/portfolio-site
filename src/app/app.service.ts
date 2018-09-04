import { MatSidenav } from '@angular/material/sidenav';

import { NavItem } from './models/navItem.model';

export class AppService {
    appSidenav: MatSidenav;
    private linkedInURL = 'https://www.linkedin.com/in/kon-kon-c-19336875/';
    private fbURL = 'https://www.facebook.com/konkon.chao';
    private twitterURL = 'https://twitter.com/konman795';
    private instagramURL = 'https://www.instagram.com/konkon_chao/';
    private navItems: NavItem[] = [
        new NavItem('Home', '/', 'home', 'green'),
        new NavItem('About', 'about', 'info', 'orange'),
        new NavItem('Portfolio', 'portfolio', 'folder', 'blue'),
        new NavItem('Contact', 'contact', 'contact_mail', 'purple')
    ];

    getNavItems() {
        return this.navItems.slice();
    }

    setSideNavItem(sideNav: MatSidenav) {
        this.appSidenav = sideNav;
    }

    toggleSideNav() {
        this.appSidenav.toggle();
    }

    getLinkedInURL() {
        return this.linkedInURL;
    }
    getfbURL() {
        return this.fbURL;
    }
    getTwitterURL() {
        return this.twitterURL;
    }
    getInstagramURL() {
        return this.instagramURL;
    }
}
