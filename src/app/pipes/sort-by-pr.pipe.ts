import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByPr'
})
export class SortByPrPipe implements PipeTransform {

  transform(value, prise): unknown {
    if (prise === undefined){
      return value;
    } else {
      const some = value.filter(val => val.prise <= prise);
      return some;
    }
  }

}
