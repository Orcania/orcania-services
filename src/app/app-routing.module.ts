import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './home/sections/about/about.component';
import { ContactComponent } from './home/sections/contact/contact.component';
import { PortfolioComponent } from './home/sections/portfolio/portfolio.component';
import { MainTopComponent } from './home/sections/main-top/main-top.component';

const routes: Routes = [
 /* { path: 'home', component: MainTopComponent },
  { path: 'about', component: AboutComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contact', component: ContactComponent },*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
