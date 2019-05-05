import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nationality'
})
export class NationalityPipe implements PipeTransform {

  list : [
    ['in','India'],
    ['us', 'United States of Ameria'],
    ['fr', 'France'],
    ['au', 'Australia']
  ];
  map :Map<string,string> = new Map(this.list);
  
  // transfromt the country code into country name
  transform(value: any, args?: any): any {
    console.log('transforming '+value+' to '+this.map.get(value));
    return 'India';
  }

}
