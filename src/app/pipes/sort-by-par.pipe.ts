import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sortByPar'
})
export class SortByParPipe implements PipeTransform {

  transform(value, params): unknown {
    if (params === null) {
      return value;
    } else if (params === undefined || params.length === 0) {
      return value;
    } else {
      const arr = [];
      value.forEach(val => {
        let i = 0;
        val.info.filter(types => {

          params.filter(param => {
            if (types.type === param) {
              i++;
              console.log(params.length);
              if (i === params.length) {
                arr.push(val);
                i = 0;
              }
            }
          });
        });
      });


      return arr;
    }
  }

}
