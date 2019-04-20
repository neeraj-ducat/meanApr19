import { Injectable } from '@angular/core';
import { ToDo } from './todo.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TodoService {

  //array to store todolist
  todoList:ToDo[];
  constructor(private http:HttpClient) { 
    this.todoList=Array();
  }

  //method to fetch data from the server
  fetchTodoList():Observable<ToDo[]>
  {
    let serviceUrl='https://jsonplaceholder.typicode.com/todos'; 
    console.log('service method is invoked.');
    return this.http.get<ToDo[]>(serviceUrl);
  }
}
 