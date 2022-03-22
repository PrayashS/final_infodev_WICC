import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOrderComponent } from './orders/list-order/list-order.component';
import { AboutUsComponent } from './site-layout/about-us/about-us.component';
import { CommentsComponent } from './site-layout/comments/comments.component';
import { ContactComponent } from './site-layout/contact/contact.component';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () =>
      import('./products/products.module').then((m) => m.ProductsModule),
  },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
  { path: 'order', component: ListOrderComponent },
  { path: 'aboutus', component:AboutUsComponent},
  { path: 'contactus', component:ContactComponent},
  { path: 'comments', component:CommentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
