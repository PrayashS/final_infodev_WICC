import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CartRoutingModule } from './cart-routing.module';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { SiteLayoutModule } from '../site-layout/site-layout.module';


@NgModule({
  declarations: [
    AddToCartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    HttpClientModule,
    SiteLayoutModule
  ]
})
export class CartModule { }
