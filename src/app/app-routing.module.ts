import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListingComponent } from './product/product-listing/product-listing.component';


const routes: Routes = [
  { 
    path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) 
  },{
    path:'product-listing', component:ProductListingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
