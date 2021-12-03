import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FeaturedRestaurantsComponent } from './featured-restaurants/featured-restaurants.component';



@NgModule({
  declarations: 
  [
    HeaderComponent,FooterComponent, FeaturedRestaurantsComponent],
  imports: [
    CommonModule
  ],
  exports:[HeaderComponent,FooterComponent,FeaturedRestaurantsComponent]
})
export class SiteLayoutModule { }
