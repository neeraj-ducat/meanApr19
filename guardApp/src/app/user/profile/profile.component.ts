import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  ptype: string;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    /*
    To receive a parameter value only once.
    this.ptype =  this.activatedRoute.snapshot.paramMap.get('type');
    */
   // To receive parameter value continuously when it is changed.
   this.activatedRoute.paramMap.subscribe((param)=>{
     this.ptype = param.get('type');
   });
  }

}
