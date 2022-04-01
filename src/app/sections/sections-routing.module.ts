import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from '../site-layout/about-us/about-us.component';
import { CommentsComponent } from '../site-layout/comments/comments.component';
import { ServicesComponent } from '../site-layout/services/services.component';
import { SectionsComponent } from './sections/sections.component';

const routes: Routes = [
  {
    path:'', redirectTo:'products',pathMatch:'full'
  },
  {
    path:'',
    component:SectionsComponent,
    children:[
      {
          path: 'products',
          loadChildren: () =>
            import('../products/products.module').then((m) => m.ProductsModule),
        
      },
      { path: 'cart', loadChildren: () => import('../cart/cart.module').then(m => m.CartModule) },
  { path: 'order', loadChildren: () => import('../orders/orders.module').then(m => m.OrdersModule)},
  { path: 'aboutus', component:AboutUsComponent},
  { path: 'comments', component:CommentsComponent},
  { path: 'services', component: ServicesComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionsRoutingModule { }
