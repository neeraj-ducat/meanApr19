import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModule } from 'ngx-alerts';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InternalRoutingModule } from './internal-routing.module';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { AvatarComponent } from './avatar/avatar.component';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [DashboardComponent, HomeComponent, ProfileComponent, AvatarComponent],
  imports: [
    CommonModule,
    AlertModule,
    FormsModule,
    InternalRoutingModule,
    SharedModule

  ]
})
export class InternalModule { }
