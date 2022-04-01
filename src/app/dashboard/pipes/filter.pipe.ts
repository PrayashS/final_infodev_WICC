import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  detail:Array<any>=[]

  transform(value: Array<any>, value2:string, ...args: any[]): any {
    this.detail = value;

    return this.detail.filter((data)=>{
      if(data.fullname.toLowerCase().includes(value2.toLowerCase())){
        return data;
      }
    })
  }

}
