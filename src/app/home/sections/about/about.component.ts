import { Component , ViewChild , ElementRef , HostListener } from '@angular/core';
import { services , Iservices } from 'src/constants/services';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  items : services[] = Iservices;
  private scrollContainer: any;

  constructor(private scrollService : ScrollService){ }
  selected : number = 0;

  points = [
    {
      id: 0,
      img : '/assets/point.svg'
    },
    {
      id: 1,
      img : '/assets/point.svg'
    },
    {
      id: 2,
      img : '/assets/point.svg'
    },
    {
      id: 3,
      img : '/assets/point.svg'
    },
    {
      id: 4,
      img : '/assets/point.svg'
    },
    {
      id: 5,
      img : '/assets/point.svg'
    },
    {
      id: 6,
      img : '/assets/point.svg'
    },
    {
      id: 7,
      img : '/assets/point.svg'
    },
    {
      id: 8,
      img : '/assets/point.svg'
    },
  ]

  @ViewChild('navv', { read: DragScrollComponent }) ds!: DragScrollComponent;
  @ViewChild('frameAbout', {static: false}) frameAbout: ElementRef | undefined;
  @ViewChild('frameSmallAbout', {static: false}) frameSmallAbout: ElementRef | undefined;

  @HostListener('window:resize')
  ngAfterViewInit() {
    if (this.frameAbout)
   { this.scrollContainer = this.frameAbout.nativeElement;
    this.scrollService.scrollHeightAbout = this.scrollContainer.scrollHeight}
    if (this.frameSmallAbout)
    {this.scrollContainer = this.frameSmallAbout.nativeElement;
    this.scrollService.scrollHeightService =
    this.scrollContainer.scrollHeight;}
    console.log(this.frameSmallAbout);
  }

  moveTo(index : number){
    this.ds.moveTo(index)
    this.selected = index
  }
}
