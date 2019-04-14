import { Component} from '@angular/core';
import { EmpService } from 'src/app/services/emp.service';
import { Emp } from 'src/app/modals/emp.modal';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent  {

  constructor(private empService:EmpService) { }

 edit(e:Emp)
 {
   console.log(e.name+" is to be updated.");
 }

}
