import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TotalOrdersComponent } from './dashboard/total-orders/total-orders.component';
import { TotalProductsComponent } from './dashboard/total-products/total-products.component';
import { TotalTargetValueComponent } from './dashboard/total-target-value/total-target-value.component';
import { TotalCancelledOrdersComponent } from './dashboard/total-cancelled-orders/total-cancelled-orders.component';
import { AddOrdersComponent } from './add-orders/add-orders.component';
import { ChartsModule } from 'ng2-charts';
import { CustomerComponent } from './customer/customer.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashboardComponent,
    TotalOrdersComponent,
    TotalProductsComponent,
    TotalTargetValueComponent,
    TotalCancelledOrdersComponent,
    AddOrdersComponent,
    CustomerComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    ChartsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
