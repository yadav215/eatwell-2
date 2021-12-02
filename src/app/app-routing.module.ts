import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderListComponent } from './order/order-list/order-list.component';


const routes: Routes = [
  { 
    path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) 
  },{
    path:'order', component:OrderListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
