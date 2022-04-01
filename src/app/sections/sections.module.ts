import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionsRoutingModule } from './sections-routing.module';
import { SectionsComponent } from './sections/sections.component';
import { SiteLayoutModule } from '../site-layout/site-layout.module';


@NgModule({
  declarations: [
    SectionsComponent
  ],
  imports: [
    CommonModule,
    SectionsRoutingModule,
    SiteLayoutModule
  ]
})
export class SectionsModule { }
