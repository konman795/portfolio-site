import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, data: {state: 'home'} },
    { path: 'about', component: AboutComponent, data: {state: 'about'} },
    { path: 'contact', component: ContactComponent, data: {state: 'contact'} },
    { path: 'portfolio', component: PortfolioComponent, data: {state: 'portfolio'} }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
