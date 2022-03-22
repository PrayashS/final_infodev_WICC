import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOrderComponent } from '../orders/list-order/list-order.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductDashboardComponent } from './dashboard/product-dashboard/product-dashboard.component';
import { AdminGuard } from './guard/admin.guard';
import { AdmindashGuard } from './guard/admindash.guard';

const routes: Routes = [
{
  path:'',redirectTo:'admin-dashboard',pathMatch:'full'
},
{
  path:'',
  // canActivateChild:[AdminGuard],
  // canActivate:[AdmindashGuard],
  component:DashboardComponent,
  children:[
    { path: 'admin-dashboard',
    // canActivate:[AdmindashGuard],
     component:AdminDashboardComponent },
     
    { path: 'product-dashboard', 
    // canActivate:[AdmindashGuard],
    component:ProductDashboardComponent},
    {
      path: 'list-order', component:ListOrderComponent
    }
  ]
}
];
// const routes: Routes = [
//   {path:'admin-dashboard', component:AdminDashboardComponent},
//   {path:'product-dashboard', component:ProductDashboardComponent}
// ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
