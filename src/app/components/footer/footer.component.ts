import { Component } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(private scrollService: ScrollService) { }

  scrollTo(elementId: string): void {
    if (elementId === 'home'){
      this.scrollService.scrollHome()
    }

    if (elementId === 'about'){
      this.scrollService.scrollAbout()
    }

    if (elementId === 'portfolio'){
      this.scrollService.scrollPortfolio()
    }
    
    if (elementId === 'contact'){
      this.scrollService.scrollContact()
    }
  }
}
