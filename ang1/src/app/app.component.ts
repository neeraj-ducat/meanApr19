import { Component } from '@angular/core';

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
  //Method to calculate the sum
  sum()
  {
    this.flag=false; 
    this.result= parseInt(this.num1)+parseInt(this.num2);
  }

}
