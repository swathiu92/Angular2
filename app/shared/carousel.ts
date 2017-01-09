import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe-services';

@Component({
    selector: "carousel",
    templateUrl: 'app/shared/carousel.html',
		styleUrls: ['app/css/carousel.css']
})

export class CarouselComponent implements OnInit {
  carouselImages: any[];
  check: string;
  constructor(private _recipeService: RecipeService) {}
  ngOnInit(): void {
    this.check = 'active';
    this._recipeService.getCarouselImages()
		    .subscribe(data => this.carouselImages = data);
  }
	
}