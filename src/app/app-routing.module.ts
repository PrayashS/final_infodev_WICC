import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './dashboard/guard/admin.guard';
import { ListOrderComponent } from './orders/list-order/list-order.component';
import { AboutUsComponent } from './site-layout/about-us/about-us.component';
import { CommentsComponent } from './site-layout/comments/comments.component';
import { ServicesComponent } from './site-layout/services/services.component';

const routes: Routes = [
  {
    path:'',redirectTo:'/products/view-all-product',pathMatch:'full'
  },

  {
    path:'',
    loadChildren:()=>import('./sections/sections.module').then(m=>m.SectionsModule)
  },


  // {
  //   path: 'products',
  //   loadChildren: () =>
  //     import('./products/products.module').then((m) => m.ProductsModule),
  // },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'dashboard',
  canActivateChild:[AdminGuard],
   loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },


  // { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
  // { path: 'order', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)},
  // { path: 'aboutus', component:AboutUsComponent},
  // { path: 'comments', component:CommentsComponent},
  // { path: 'services', component: ServicesComponent},

  {
    path:"**",
    loadChildren:()=>import('./pagenotfound/pagenotfound.module').then(m=>m.PagenotfoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
