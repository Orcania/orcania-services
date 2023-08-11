import { Component } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private scrollService : ScrollService) {}

  open : boolean = false;
  link : string = 'home';


   scrollTo(elementId: string): void {
    if (elementId === 'home'){
      this.link = 'home';
      this.scrollService.scrollHome()
    }

    if (elementId === 'about'){
      this.link = 'about';
      this.scrollService.scrollAbout()
    }

    if (elementId === 'portfolio'){
      this.link = 'portfolio';
      this.scrollService.scrollPortfolio()
    }
    
    if (elementId === 'contact'){
      this.link = 'contact';
      this.scrollService.scrollContact()
    }
      this.open = false
  } 

  toggleMenu() :void {
    this.open = !this.open
  }
}
