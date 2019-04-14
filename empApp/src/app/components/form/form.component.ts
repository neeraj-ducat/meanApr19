import { Component, OnInit } from '@angular/core';
import { EmpService } from 'src/app/services/emp.service';
import { Emp } from 'src/app/modals/emp.modal';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  //Model object to be bound to input form
  emp:Emp;

  constructor(private empService:EmpService) {
    this.emp=new Emp();
   }

   save()
   {
     let toBeAdded=new Emp();
     toBeAdded.name=this.emp.name;
     toBeAdded.job=this.emp.job;
     toBeAdded.salary=this.emp.salary;
     this.empService.add(toBeAdded);
     this.emp.name='';
     this.emp.job='';
     this.emp.salary=0;
   }
  ngOnInit() {
  }

}
