import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Route} from '@angular/router';
import { AppComponent } from './app.component';

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
  }
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
