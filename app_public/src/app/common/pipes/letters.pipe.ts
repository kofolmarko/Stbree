import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'letters'
})
export class LettersPipe implements PipeTransform {

  transform(vhod: string): string {
    return vhod.charAt(0);
  }

}
