import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product/product.service';
import { FeaturedRestaurant } from '../categories';

@Component({
  selector: 'app-featured-restaurants',
  templateUrl: './featured-restaurants.component.html',
  styleUrls: ['./featured-restaurants.component.scss']
})
export class FeaturedRestaurantsComponent implements OnInit {
  restaurantsList?: FeaturedRestaurant[];

  constructor(private productServices:ProductService) { }

  ngOnInit(): void {
    this.productServices.getRestaurantsList().subscribe(data=>{
      this.restaurantsList = data;
    })
  }

}
