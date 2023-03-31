import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'nameValidationError'
})
export class NameValidationErrorPipe implements PipeTransform {

  transform(value: ValidationErrors | null): string {
    if (value === null) return '';

    if (value['required']) {
      return 'Please enter name';
    }

    if (value['minlength']) {
      return 'Min length is 3';
    }

    if (value['maxlength']) {
      return 'Max length is 30';
    }

    return 'Name is invalid';
  }

}
