import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-one',
  templateUrl: './parent-one.component.html',
  styleUrls: ['./parent-one.component.css']
})
export class ParentOneComponent implements OnInit {

  t: string = "Deletion Confirmation";
  msg: string ="Do you want to delete?";
  btn1:string = "Yes";
  btn2:string = "No";
  constructor() { }

  ngOnInit() {
  }
 doSomething(status: boolean) {
   if(status)
     console.log('user wants to delete.');
   else
     console.log("User doesn't want to delete.");  
 }
}
