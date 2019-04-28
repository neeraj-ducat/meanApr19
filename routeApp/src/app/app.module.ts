import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Route} from '@angular/router';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';

// Array of application routes is defined.
const routes : Route[] =[
  {
    path: '', redirectTo:'first',pathMatch: 'full'
  },
  {
    path: 'first', component: FirstComponent,
    children: [
      {
        path: '', component: Child1Component
      },
      {
        path: 'child1', component: Child1Component
      },
      {
        path: 'child2', component: Child2Component
      },
      
    ]
  },
  {
    path: 'second', component: SecondComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    Child1Component,
    Child2Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) //Module is created for the route array.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
