import { Injectable } from '@angular/core';
import { Emp } from '../modals/emp.modal';

@Injectable()
export class EmpService {

  //static variabe to be used for emp id
  static counter:number=1;

  //Array of emp objects.
  empList:Emp[];
  constructor() {
    this.empList=Array();
   }

   //to add Emp objects to the array
   add(emp:Emp)
   {
     emp.id= EmpService.counter++;
     this.empList.push(emp);
   }
}
