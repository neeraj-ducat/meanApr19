import { Injectable } from '@angular/core';
import { ToDo } from './todo.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../environments/environment'
@Injectable()
export class TodoService {

  //array to store todolist
  todoList:ToDo[];
  //url of todo resource
  todoUrl=environment.apiUrl+'todos'
  constructor(private http:HttpClient) { 
    this.todoList=Array();
  }

  //method to fetch data from the server
  fetchTodoList():Observable<ToDo[]>
  {
    console.log('service method is invoked.');
    return this.http.get<ToDo[]>(this.todoUrl);
  }
  //Method to save a todo task on the server
  saveTodo(todo:ToDo):Observable<ToDo>
  {
    return this.http.post<ToDo>(this.todoUrl,todo);
  }
  //Method to update a todo task on the server
  updateTodo(todo:ToDo):Observable<ToDo>
  {
    return this.http.put<ToDo>(this.todoUrl,todo);
  }
  //Method to remove a todo task on the server
  removeTodo(todo:ToDo):Observable<ToDo>
  {
    let deleteUrl=this.todoUrl+'/'+todo.id;
    return this.http.delete<ToDo>(deleteUrl);
  }
}
 