import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { HolidayEnjoyComponent } from './holiday-enjoy/holiday-enjoy.component';
import { FeaturedRestaurantsComponent } from './featured-restaurants/featured-restaurants.component';

import { ProductListingComponent } from './product-listing/product-listing.component';
import { OrderModule } from './order/order.module';
import { SiteLayoutModule } from './site-layout/site-layout.module';

@NgModule({
  declarations: [
    AppComponent,
    HeroSectionComponent,
    HolidayEnjoyComponent,
    FeaturedRestaurantsComponent,
    ProductListingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OrderModule,
    SiteLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
