import { Component, OnInit } from '@angular/core';
import { ToDo } from '../todo.model';
import { TodoService } from '../todo.service';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-newtodo',
  templateUrl: './newtodo.component.html',
  styleUrls: ['./newtodo.component.css']
})
export class NewtodoComponent implements OnInit {

  //model to receive form data
  todo:ToDo;
  constructor(private todoService:TodoService,
    private alertService: AlertService) {
    this.todo=new ToDo();
   }

   //Method to save the new todo task
   save()
   {
     console.log(this.todo.title,'will be saved.');
     this.todoService.saveTodo(this.todo)
     .subscribe((response)=>{
       console.log(response,' is saved.');
       //response is the new task, adding it to the table
       this.todoService.todoList.push(response);
       //notification is displayed.
       this.alertService.success('Successfully saved.');
     });
   }
  
   ngOnInit() {
  }

}
