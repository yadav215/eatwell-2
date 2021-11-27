import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { HolidayEnjoyComponent } from './holiday-enjoy/holiday-enjoy.component';
import { FeaturedRestaurantsComponent } from './featured-restaurants/featured-restaurants.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderNavigationComponent } from './header-navigation/header-navigation.component';
import { ProductListingComponent } from './product-listing/product-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroSectionComponent,
    HolidayEnjoyComponent,
    FeaturedRestaurantsComponent,
    FooterComponent,
    HeaderNavigationComponent,
    ProductListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
