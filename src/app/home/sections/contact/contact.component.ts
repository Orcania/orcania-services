import { Component , ViewChild , ElementRef , HostListener} from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  private scrollContainer: any;

  constructor (private scrollService: ScrollService) { }

  @ViewChild('frameContact', {static: false}) frameContact: ElementRef | undefined;
  @ViewChild('frameContactContainer') containerRef!: ElementRef;
  
  @HostListener('window:resize')
  ngAfterViewInit() {
    if (this.frameContact)
    this.scrollContainer = this.frameContact.nativeElement;
    this.scrollService.scrollHeightContact = this.scrollContainer.scrollHeight
    
  }
  
}
