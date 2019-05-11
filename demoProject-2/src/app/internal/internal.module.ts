import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModule } from 'ngx-alerts';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InternalRoutingModule } from './internal-routing.module';
@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    AlertModule,
    InternalRoutingModule

  ]
})
export class InternalModule { }
