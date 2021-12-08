import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderListComponent } from './order/order-list/order-list.component';
import { HolidayEnjoyComponent } from './site-layout/holiday-enjoy/holiday-enjoy.component';


const routes: Routes = [
  {
    path:'order', component:OrderListComponent
  },
  {
    path:'', component:HolidayEnjoyComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
