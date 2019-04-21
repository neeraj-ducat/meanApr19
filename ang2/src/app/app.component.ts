import { Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 //properties to store input
  num1:string='';
  num2:string='';
  //property to store the result
  result:number=0;
  //property to control the result view
  flag=true;

  //variable to receive the reference of input form

  @ViewChild("frm")
  adderFrm : FormGroup;


  constructor(private counterService:CounterService)
  {}

  //Method to calculate the sum
  sum()
  {
    if(this.adderFrm.valid)
    {
    this.counterService.increment();  
    this.flag=false; 
    this.result= parseInt(this.num1)+parseInt(this.num2);
    }
    else
    {
      console.log("Form is invalid.");
      //The form is not valid, mark its input
      //elements touched.
        for(let i in this.adderFrm.controls)
          this.adderFrm.controls[i].markAsTouched();
    }
  }

}
