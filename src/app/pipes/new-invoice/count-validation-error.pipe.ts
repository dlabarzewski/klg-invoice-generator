import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'countValidationError'
})
export class CountValidationErrorPipe implements PipeTransform {

  transform(value: ValidationErrors | null): string {
    if (value === null) return '';

    if (value['required']) {
      return 'Please enter count';
    }

    if (value['min']) {
      return 'Min value is 1';
    }

    if (value['max']) {
      return 'Max value is 100';
    }

    if (value['pattern']) {
      return 'Please input number';
    }

    return 'Count is invalid';
  }

}
