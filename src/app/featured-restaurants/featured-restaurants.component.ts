import { Component, OnInit } from '@angular/core';
import FeaturedRestaurants from '../../api/mock'

interface restaurants {
  id:Number;
  img:String;
  title: String;
  phone: String;
  navigateName: String;
  navigateUrl: String
}

@Component({
  selector: 'app-featured-restaurants',
  templateUrl: './featured-restaurants.component.html',
  styleUrls: ['./featured-restaurants.component.scss']
})
export class FeaturedRestaurantsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  restaurantsList = FeaturedRestaurants as unknown as restaurants[];
}
