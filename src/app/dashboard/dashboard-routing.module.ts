import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductDashboardComponent } from './dashboard/product-dashboard/product-dashboard.component';

const routes: Routes = [
{
  path:'',redirectTo:'dashboard',pathMatch:'full'
},
{
  path:'',component:DashboardComponent,
  children:[
    { path: 'admin-dashboard', component:AdminDashboardComponent },
    { path: 'product-dashboard', component:ProductDashboardComponent}
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
