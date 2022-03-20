import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { ProductDashboardComponent } from './dashboard/product-dashboard/product-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SideBarComponent } from './dashboard/side-bar/side-bar.component';
import { HeaderComponent } from '../site-layout/header/header.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    ProductDashboardComponent,
    DashboardComponent,
    SideBarComponent,
    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
