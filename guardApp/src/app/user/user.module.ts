import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Route} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';

// routes of the user module
const userRoutes : Route[] =[
  {
    path: '', component:DashboardComponent,
    children: [
      {
        path: 'profile/:type', component:ProfileComponent
      },
      {
        path: 'settings', component:SettingsComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations: [DashboardComponent, ProfileComponent, SettingsComponent]
})
export class UserModule { }
