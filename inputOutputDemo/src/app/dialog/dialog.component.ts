import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

 @Input("title") title: string;
 @Input("message")  message: string;
 @Input("btnYes")  btnYes: string;
 @Input("btnNo")  btnNo: string;
 @Output() closed : EventEmitter<boolean>;
  constructor() {
    this.closed = new EventEmitter();
    }

  ngOnInit() {
    console.log('DialogComponent is initialized.');
  }
  selected() {
   // true is returned to the parent component as an event.
   this.closed.emit(true);
  }
  rejected() {
 // false is returned to the parent component as an event.
 this.closed.emit(false);
  }

}
