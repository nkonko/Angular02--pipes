import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): string {
    return 'Hola Mundo';
  }

}
