import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrdersModule} from './orders/orders.module'
import { SiteLayoutModule } from './site-layout/site-layout.module';
import { HttpClientModule} from '@angular/common/http';
import { ProductsModule } from './products/products.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { FormsModule } from '@angular/forms';
import { CartModule } from './cart/cart.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    OrdersModule,
    SiteLayoutModule,
    HttpClientModule,
    ProductsModule,
    FormsModule,
    AuthModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    DashboardModule,
    CartModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
