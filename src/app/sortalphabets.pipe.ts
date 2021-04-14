import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortalphabets'
})
export class SortalphabetsPipe implements PipeTransform {

  transform(array: string[], order: string): string[] {


    let sorted = array.sort();

    if(order === 'desc') { sorted.reverse(); }
    

    return sorted;
    
  }

}
