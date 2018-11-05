import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardRoutingModule } from './dashboard/dashboard-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardModule
  ],
  declarations: [],
  exports: [
    DashboardRoutingModule
  ]
})
export class PagesModule { }
