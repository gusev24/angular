import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardModule } from './dashboard/dashboard.module';
import { UserModule } from './user/user.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardModule,
    UserModule
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class PagesModule { }
