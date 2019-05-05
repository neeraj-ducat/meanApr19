import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ExternalRoutingModule } from './external-routing.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [RegisterComponent, LoginComponent, HomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ExternalRoutingModule
  ]
})
export class ExternalModule { }
