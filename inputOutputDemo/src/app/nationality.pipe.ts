import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nationality'
})
export class NationalityPipe implements PipeTransform {

  map :Map<string,string> = new Map([
    ['in','India'],
    ['us', 'United States of America'],
    ['fr', 'France'],
    ['au', 'Australia']
  ]);
  
  // transfromt the country code into country name
  transform(value: any, args?: any): any {
    console.log('transforming '+value+' to '+this.map.get(value));
    return 'India';
  }

}
