import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-two',
  templateUrl: './parent-two.component.html',
  styleUrls: ['./parent-two.component.css']
})
export class ParentTwoComponent implements OnInit {

  name: string;
  doj: Date;
  salary: number;
  countryCode: string;
  constructor() {
    this.name ="raman sharma";
    this.doj = new Date();
    this.salary = 98000;
    this.countryCode = 'in';
   }

  ngOnInit() {
  }

}
