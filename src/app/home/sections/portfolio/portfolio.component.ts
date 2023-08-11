import {
  Component,
  ViewChild,
  ElementRef,
  HostListener,
  AfterViewInit,
} from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { ScrollService } from 'src/app/services/scroll.service';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements AfterViewInit {
  projects = [
    {
      title: 'Crypto Land',
      bgImgClass: 'bg-ape',
      bgImgUrl: '/assets/bg-images/crypto.png',
      description: () => {
        return `
          <p> <br>
          The top performing GameFi project on the XRPL Chain.  <br>
           OWN. EARN. CONQUER.
          <br>
          <br>
          <br>
          </p>
          `;
      },
      imgSrc: '/assets/services/cryptoland.svg',
      websiteUrl: 'https://cryptoland.io/',
    },
    {
      title: 'Ticmint',
      bgImgClass: 'bg-ape',
      bgImgUrl: '/assets/bg-images/ticmint.png',
      description: () => {
        return `
          <p> <br>
          Powerful NFT ticketing platform that is blockchain<br> based,
          scalping proof and end-to-end. Experience<br> Web3 ticketing 
         with Ticmint.
         <br>
         <br></p>
          `;
      },
      imgSrc: '/assets/services/ticmint.svg',
      websiteUrl: 'https://ticmint.com/',
    },
    {
      title: 'Mecon Cash',
      bgImgClass: 'bg-ape',
      bgImgUrl: '/assets/bg-images/mecon.png',
      description: () => {
        return `
          <p> 
          <br>
          MeconCash is a cryptocurrency platform used for<br>
           payments,  
           rewards and transactions of online<br> and mobile services.</p>
           <br>
          <br>
          `;
      },
      imgSrc: '/assets/services/meconcash.svg',
      websiteUrl: 'https://meconcash.com/index_en.html',
    },
    {
      title: 'Bricklayer DAO',
      bgImgClass: 'bg-ape',
      bgImgUrl: '/assets/bg-images/bdao.png',
      description: () => {
        return `
          <p> <br>
          Physical asset investment platform fueled <br> by virtual asset 
          growth. Bricklayer provides <br>decentralized access to institutional-
          grade real <Br>estate and builds wealth through occupier focused<br>
           transactions.</p>

          `;
      },
      imgSrc: '/assets/services/B.svg',
      websiteUrl: 'https://www.bricklayerdao.xyz/',
    },
    {
      title: 'Bullz Challenges',
      bgImgClass: 'bg-ape',
      bgImgUrl: '/assets/bg-images/bullz.png',
      description: () => {
        return `
          <p>
          <br>Instead of simply selling your NFTs/tokens or <br> giving them away 
           for free, you can now airdrop them<br> in fun challenges!</p>
           <br>
           <br>
          `;
      },
      imgSrc: '/assets/services/bullz.svg',
      websiteUrl: 'https://bullz.io/',
    },
    {
      title: 'The Red Ape Family',
      bgImgClass: 'bg-ape',
      bgImgUrl: '/assets/bg-images/red-ape.png',
      description: () => {
        return `
          <p>
          <br>The Red Ape Family (TRAF) is a ground-breaking new <br> comedy,
           and the first animated series built around, and<br> starring, famous
            NFTs. It is also the first show of its<br> kind where episodes are sold
             as individual NFTs
             
             <br></p>
          `;
      },
      imgSrc: '/assets/ape-logo.svg',
      websiteUrl: 'https://theredapefamily.com/',
    },
    {
      title: 'Orcania DEX',
      bgImgClass: 'bg-ape',
      bgImgUrl: '/assets/bg-images/DEX.png',
      description: () => {
        return `
          <p>
          <br>
          Your Gateway To DeFi 2.0
          <br>
          <br>
          <br>
          <br>  
          </p>
          `;
      },
      imgSrc: '/assets/services/DEX.svg',
      websiteUrl: 'https://theredapefamily.com/',
    },
  ];

  openUrl(url: string) {
    window.open(url, '_blank');
  }
  constructor(
    private scrollService: ScrollService,
    private renderer: Renderer2
  ) {}

  @HostListener('window:resize')
  ngAfterViewInit() {
    // ...

    this.renderer.listen(
      this.ds._contentRef.nativeElement,
      'scroll',
      (event) => {
        const panelWidth = this.containerRef.nativeElement.offsetWidth;
        const scrollLeft = event.target.scrollLeft;
        const panelNumber = Math.min(
          Math.round(scrollLeft / panelWidth) + 1,
          this.projects.length
        );

        // Update the currentPanel variable
        this.i = panelNumber;
      }
    );

    if (this.framePortfolio)
      this.scrollContainer = this.framePortfolio.nativeElement;
    this.scrollService.scrollHeightPortfolio =
      this.scrollContainer.scrollHeight;
  }

  isScrollbarHidden: boolean = true;
  private scrollContainer: any;
  i: number = 1;

  @ViewChild('navv', { read: DragScrollComponent }) ds!: DragScrollComponent;
  @ViewChild('framePortfolio', { static: false }) framePortfolio:
    | ElementRef
    | undefined;
  @ViewChild('portfolioContainer') containerRef!: ElementRef;

  //   /* const panelWidth = this.containerRef.nativeElement.offsetWidth;
  //   console.log(panelWidth)
  //   const scrollLeft = this.containerRef.nativeElement.scrollLeft;
  //   console.log(scrollLeft)
  //   const panelNumber = Math.round(scrollLeft / panelWidth);

  //   // Update the currentPanel variable
  //   this.i = panelNumber;

  //   // Update the navigation status */
  // }

  moveLeft() {
    this.ds.moveLeft();
    if (this.i > 1) {
      this.i--;
    }
  }

  moveRight() {
    this.ds.moveRight();
    if (this.i >= 1 && this.i < 6 )  {
      this.i++;
    }
  }

  /*ngOnInit() {
        const windowWidth = window.innerWidth;
        if (windowWidth >= 768) {
          this.isScrollbarHidden = true
        }
        else if (windowWidth < 768){
          this.isScrollbarHidden = false;
        }*/
}
