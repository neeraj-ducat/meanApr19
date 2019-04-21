import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoService } from './todo.service';
import { NewtodoComponent } from './newtodo/newtodo.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AlertModule } from 'ngx-alerts';
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    NewtodoComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule,
    BrowserAnimationsModule,
    AlertModule.forRoot({maxMessages: 5, timeout: 5000, position: 'left'})
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
