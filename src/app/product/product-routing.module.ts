import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ProductComponent } from './product.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
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
    path: 'view-all-product', component: ViewAllProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }