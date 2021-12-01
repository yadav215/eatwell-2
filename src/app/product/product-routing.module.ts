import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { ProductComponent } from './product.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
  { 
    path: '', component: ProductComponent 
  }, { 
    path: 'add-product', component: AddProductComponent 
  }, { 
    path: 'view-product', component: ViewProductComponent
  }, { 
    path: 'delete-product', component: DeleteProductComponent
  }, { 
    path: 'view-all-product', component: ProductListingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
