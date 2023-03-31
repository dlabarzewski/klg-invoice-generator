import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'priceValidationError'
})
export class PriceValidationErrorPipe implements PipeTransform {

  transform(value: ValidationErrors | null): string {
    if (value === null) return '';

    if (value['required']) {
      return 'Please enter price';
    }

    if (value['min']) {
      return 'Min value is 1';
    }

    if (value['max']) {
      return 'Max value is 1000000';
    }

    if (value['pattern']) {
      return 'Please input number';
    }

    return 'Price is invalid';
  }

}
