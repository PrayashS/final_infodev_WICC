import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductAddComponent } from './dashboard/product-add/product-add.component';
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
    { path: 'admin-dashboard', component:AdminDashboardComponent },
    { path: 'product-dashboard', component:ProductDashboardComponent},
    {path:'product-add', component: ProductAddComponent}
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
