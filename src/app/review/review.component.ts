import { Component, OnInit } from '@angular/core';

import SwiperCore, { SwiperOptions, Pagination, Navigation } from 'swiper';
// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  config: SwiperOptions = {
    slidesPerView: 2,
    spaceBetween: 30,
    navigation: false,
    pagination: { clickable: true },

  };

  onSwiper(swiper: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
