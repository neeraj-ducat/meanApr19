import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ExternalRoutingModule } from './external-routing.module';
import {FormsModule} from '@angular/forms';
import { AlertModule } from 'ngx-alerts';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
@NgModule({
  declarations: [RegisterComponent, LoginComponent, HomeComponent, NotAuthorizedComponent],
  imports: [
    CommonModule,
    FormsModule,
    ExternalRoutingModule,
    AlertModule
  ]
})
export class ExternalModule { }
