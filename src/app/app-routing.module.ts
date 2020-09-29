import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddOrdersComponent } from './add-orders/add-orders.component';



const routes: Routes = [
  {
    path: 'Dashboard',
    component: DashboardComponent
  },
  {
    path: 'Orders',
    component: AddOrdersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
