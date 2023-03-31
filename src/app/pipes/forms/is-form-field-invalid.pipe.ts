import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Pipe({
  name: 'isFormFieldInvalid',
  pure: false
})
export class IsFormFieldInvalidPipe implements PipeTransform {

  transform(value: AbstractControl): boolean {
    return value!.touched && value!.invalid;
  }

}
