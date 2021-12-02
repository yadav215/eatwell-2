import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { ProductComponent } from './product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewProductByCategoryComponent } from './view-product-by-category/view-product-by-category.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
  { path: '', component: ProductListingComponent }, 
  { path: 'add-product', component: AddProductComponent }, 
  { path: 'product-details/:id', component: ViewProductComponent}, 
  { path: 'delete-product', component: DeleteProductComponent}, 
  // { path: 'view-all-product', component: ProductListingComponent},
  {path: 'search-product',component:ViewProductByCategoryComponent},
  {path: 'update-product/:id', component: UpdateProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
