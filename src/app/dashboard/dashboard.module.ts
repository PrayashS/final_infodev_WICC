import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { ProductDashboardComponent } from './dashboard/product-dashboard/product-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SideBarComponent } from './dashboard/side-bar/side-bar.component';
import { HeaderComponent } from '../site-layout/header/header.component';
import { ProductsModule } from '../products/products.module';
import { ProductAddComponent } from './dashboard/product-add/product-add.component';
import { SiteLayoutModule } from '../site-layout/site-layout.module';
import { ProductUpdateComponent } from './dashboard/product-update/product-update.component';
import { AuthModule } from '../auth/auth.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    ProductDashboardComponent,
    DashboardComponent,
    SideBarComponent,
    ProductAddComponent,
    ProductUpdateComponent,
    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ProductsModule,
    SiteLayoutModule,
    AuthModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
