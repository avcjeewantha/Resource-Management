import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  images = ['/assets/sample_image.png', '/assets/sample_image.png', '/assets/sample_image.png'];
  ngOnInit() {
  }


}
