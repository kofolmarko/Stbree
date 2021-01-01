import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cas'
})
export class CasPipe implements PipeTransform {

  transform(cas: Date): String {
    var date = new Date(cas);
    var formatiranDatum = date.getHours() + ':' + (date.getMinutes() < 10? '0':'') + date.getMinutes();
      
    return formatiranDatum;
  }

}
