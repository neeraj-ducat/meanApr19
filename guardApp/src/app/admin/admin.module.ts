import { NgModule } from '@angular/core';
import {RouterModule, Route} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportsComponent } from './reports/reports.component';
import { UsersComponent } from './users/users.component';
import { SampleComponent } from './sample/sample.component';
import { AdminGuard } from './admin.guard';

// routes of admin module.

const adminRoutes : Route[] =[
  {
    path: '', component:DashboardComponent,
    children: [
      {
        path: 'users', component:UsersComponent
      },
      {
        path: 'reports', component:ReportsComponent,
         canActivate: [AdminGuard]
      },
      {
        path: 'sample', component:SampleComponent,
        canActivate: [AdminGuard]
      }
    ]
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(adminRoutes)
  ],
  declarations: [DashboardComponent, ReportsComponent, UsersComponent, SampleComponent]
})
export class AdminModule { }
