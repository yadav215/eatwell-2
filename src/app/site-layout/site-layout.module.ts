import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FeaturedRestaurantsComponent } from './featured-restaurants/featured-restaurants.component';
import { RouterModule, Routes } from '@angular/router';
import { HolidayEnjoyComponent } from './holiday-enjoy/holiday-enjoy.component';


const routes: Routes = [
  { 
    path: 'product', loadChildren: () => import('../product/product.module').then(m => m.ProductModule) 
  }
];

@NgModule({
  declarations: 
  [
    HeaderComponent,FooterComponent, FeaturedRestaurantsComponent, HolidayEnjoyComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports:[HeaderComponent,FooterComponent,FeaturedRestaurantsComponent,HolidayEnjoyComponent]
})
export class SiteLayoutModule { }
