import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewAllProductComponent } from './product/view-all-product/view-all-product.component';


const routes: Routes = [
  { 
    path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) 
  },{
    path:'all-product', component:ViewAllProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
