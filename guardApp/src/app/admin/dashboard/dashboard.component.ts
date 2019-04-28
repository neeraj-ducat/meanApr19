import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  rep: string ='sample';
  constructor(private router:Router) { }

  ngOnInit() {
  }

  showReport()
  {
    console.log(this.rep+' component will be displayed.');
    if(this.rep === 'sample')
       this.router.navigate(['admin/sample']);
    else
        this.router.navigate(['admin/reports']);
  }
}
