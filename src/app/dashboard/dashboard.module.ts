import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { ProductDashboardComponent } from './dashboard/product-dashboard/product-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SideBarComponent } from './dashboard/side-bar/side-bar.component';
import { ProductsModule } from '../products/products.module';
import { SiteLayoutModule } from '../site-layout/site-layout.module';
import { ProductUpdateComponent } from './dashboard/product-update/product-update.component';
import { AuthModule } from '../auth/auth.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    ProductDashboardComponent,
    DashboardComponent,
    SideBarComponent,
    ProductUpdateComponent,
    FilterPipe,
    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ProductsModule,
    SiteLayoutModule,
    AuthModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class DashboardModule { }
