import { NgModule } from '@angular/core';
import {RouterModule, Route} from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportsComponent } from './reports/reports.component';
import { UsersComponent } from './users/users.component';

// routes of admin module.

const adminRoutes : Route[] =[
  {
    path: '', component:DashboardComponent,
    children: [
      {
        path: 'users', component:UsersComponent
      },
      {
        path: 'reports', component:ReportsComponent
      }
    ]
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes)
  ],
  declarations: [DashboardComponent, ReportsComponent, UsersComponent]
})
export class AdminModule { }
