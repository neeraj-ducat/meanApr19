import { Injectable } from '@angular/core';
import {LocalStorageService, LocalStorage} from 'ngx-webstorage';
@Injectable()
export class CounterService {
  
  @LocalStorage('ctr')
  counter:number=0;
  
  constructor(private localStorage:LocalStorageService)
  {
    
  }

  increment()
  {
    this.counter++;
  }
}
