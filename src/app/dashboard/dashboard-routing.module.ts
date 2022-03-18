import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';

const routes: Routes = [
  {path:'admin-dashboard', component:AdminDashboardComponent},
  {path:'product-dashboard', component:ProductDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
