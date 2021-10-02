import { Component } from '@angular/core';

import SwiperCore, { SwiperOptions, Pagination, Navigation } from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ProjResponsivo02';

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
}
