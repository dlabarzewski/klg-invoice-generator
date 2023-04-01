import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayToCsv'
})
export class ArrayToCsvPipe implements PipeTransform {

  transform(value: string[]): string {
    return value.join(', ');
  }

}
