import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Observable } from 'rxjs';
import { ToDo } from '../todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private todoService:TodoService) { }

  //method to load the to do list
  fetch()
  {
   console.log("Invoking service method...");
   let obs:Observable<ToDo[]> =this.todoService.fetchTodoList();
   console.log('Observable received, subscribing to it...'); 
   obs.subscribe((response)=>{
    console.log('Response received from the Observable, assigning it to the service array...');
    this.todoService.todoList=response;
   }); 
  }

  ngOnInit() {
  }

}
