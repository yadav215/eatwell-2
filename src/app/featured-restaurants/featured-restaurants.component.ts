import { Component, OnInit } from '@angular/core';
import FeaturedRestaurants from '../../api/mock.json';

interface restaurants {
  id:Number;
  img:String;
  title: String;
  phone: String;
  navigateNam: String;
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

  list: restaurants[] = FeaturedRestaurants;

}
