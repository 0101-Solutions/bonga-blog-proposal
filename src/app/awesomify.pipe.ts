import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'awesomify'
})
export class AwesomifyPipe implements PipeTransform {

  // This Pipe just returns "Awesome" no matter the value.
  transform(value: unknown, ...args: unknown[]): unknown {
    return value + " is awesome!";
  }

}
