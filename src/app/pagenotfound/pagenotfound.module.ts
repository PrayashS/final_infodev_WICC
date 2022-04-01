import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagenotfoundRoutingModule } from './pagenotfound-routing.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SiteLayoutModule } from '../site-layout/site-layout.module';


@NgModule({
  declarations: [
    PagenotfoundComponent
  ],
  imports: [
    CommonModule,
    PagenotfoundRoutingModule,
    SiteLayoutModule
  ]
})
export class PagenotfoundModule { }
