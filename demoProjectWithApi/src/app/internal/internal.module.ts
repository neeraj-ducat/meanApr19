import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModule } from 'ngx-alerts';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InternalRoutingModule } from './internal-routing.module';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [DashboardComponent, HomeComponent, ProfileComponent],
  imports: [
    CommonModule,
    AlertModule,
    FormsModule,
    InternalRoutingModule

  ]
})
export class InternalModule { }
