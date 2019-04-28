import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule, Route} from '@angular/router';
import { AppComponent } from './app.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';

// routes of the app module
const appRoutes : Route[] =[
  {
    path: '', redirectTo: 'users', pathMatch: 'full' 
  },
  {
    path: 'users', loadChildren: "./user/user.module#UserModule" 
  },
  {
    path: 'admin', loadChildren: "./admin/admin.module#AdminModule" 
  },
  {
    path: '403', component: AccessDeniedComponent 
  }
];


@NgModule({
  declarations: [
    AppComponent,
    AccessDeniedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
