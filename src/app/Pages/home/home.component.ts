import { Component, OnInit } from '@angular/core';
import Typewriter from 't-writer.js';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    trigger('animateSvg', [
      state('start', style({
        opacity: 0,
        transform: 'scale(0.5)'
      })),
      state('end', style({
        opacity: 1,
        transform: 'scale(1)'
      })),
      transition('start => end', [
        animate('4000ms ease-out')
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  isHovered: boolean = false; // Track hover state
  svgSource: string = 'original'; // Original SVG source
  
  projectGridItems = [
    {
      image: '../../../assets/images/flutterwave.jpg',
      title: 'Flutterwave Help Centre',
      brief: 'Content Design, Information Architecture',
      view: 'View work',
      svgOriginal: '../../../../assets/icons/short-arrow.svg',
      svgHovered: '../../../assets/icons/long-arrow.svg',
      svgSource: 'original'
    },
    {
      image: '../../../assets/images/sendapp.jpg',
      title: 'Send App Verification',
      brief: 'Content Design, Information Architecture',
      view: 'View work',
      svgOriginal: '../../../../assets/icons/short-arrow.svg',
      svgHovered: '../../../assets/icons/long-arrow.svg',
      svgSource: 'original'
    },
    {
      image: '../../../assets/images/carbon.jpg',
      title: 'Carbon Saving Flow',
      brief: 'UX Writing',
      view: 'View work',
      svgOriginal: '../../../../assets/icons/short-arrow.svg',
      svgHovered: '../../../assets/icons/long-arrow.svg',
      svgSource: 'original'
    },
    {
      image: '../../../assets/images/disha.png',
      title: 'Disha Website',
      brief: 'UX Writing',
      view: 'View work',
      svgOriginal: '../../../../assets/icons/short-arrow.svg',
      svgHovered: '../../../assets/icons/long-arrow.svg',
      svgSource: 'original'
    },
    {
      image: '../../../assets/images/cart-settings.png',
      title: 'Cart Settings',
      brief: 'Content Design, Information Architecture',
      view: 'View work',
      svgOriginal: '../../../../assets/icons/short-arrow.svg',
      svgHovered: '../../../assets/icons/long-arrow.svg',
      svgSource: 'original'
    },
    {
      image: '../../../assets/images/invision.png',
      title: 'Invision App Review',
      brief: 'Content Design, Information Architecture',
      view: 'View work',
      svgOriginal: '../../../../assets/icons/short-arrow.svg',
      svgHovered: '../../../assets/icons/long-arrow.svg',
      svgSource: 'original'
    },
    {
      image: '../../../assets/images/marketplace.png',
      title: 'Marketplace Listing',
      brief: 'UX Writing',
      view: 'View work',
      svgOriginal: '../../../../assets/icons/short-arrow.svg',
      svgHovered: '../../../assets/icons/long-arrow.svg',
      svgSource: 'original'
    }
  ];

  publicationGridItems = [
    {
      image: '../../../assets/images/whatsapp.png',
      title: 'Flutterwave <> WhatsApp Integration Usability Report',
      link: '(Read Now)'
    },
    {
      image: '../../../assets/images/context.png',
      title: 'Creating Context Through Words: The Power of Saying It All',
      link: '(Read Now)'
    },
    {
      image: '../../../assets/images/bestTech.png',
      title: 'Best Tech Company Websites in Nigeria [Review]',
      link: '(Read Now)'
    }
  ];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const target = document.querySelector('.name');
    const target1 = document.querySelector('.job');
    const target2 = document.querySelector('.brief');

    const writer = new Typewriter(target, {
      // loop: true,
      typeColor: 'white'
    })
    const writer1 = new Typewriter(target1, {
      // loop: true,
      typeColor: 'white'
    })
    const writer2 = new Typewriter(target2, {
      // loop: true,
      typeColor: 'white'
    })
    const writer3 = new Typewriter(target2, { 
      typeSpeed: 60 
    })
    
    writer
      .type("Hello,")
      .rest(1000)
      .type(" I'm Ademola 👋")
      .rest(500)
      .then(writer1.start.bind(writer1))
      .start()
    
    writer1
      .type("UX Writer |")
      .rest(500)
      // .clear()
      .changeTypeColor('blue')
      .type(" Content Designer |")
      .rest(500)
      // .clear()
      .changeTypeColor('white')
      .type(" Human")
      .rest(500)
      .clear()
      .changeTypeColor('red')
      .then(writer2.start.bind(writer2))
    
    writer2
      .type('...helping design-forward organizations')
      .removeCursor()
      .then(writer3.start.bind(writer3))
      .start()
    
    writer3
      .type(" craft delightful")
      .rest(500)
      .clear()
      .changeTypeColor('white')
      .type("...and useful product experiences.")
      .rest(500)
      .clear()
      .changeTypeColor('white')
      .then(writer.start.bind(writer))
  }

  toggleHover(item: any): void {
    if (item.svgSource === 'original') {
      item.svgSource = 'hovered';
    } else {
      item.svgSource = 'original';
    }
  }
}
