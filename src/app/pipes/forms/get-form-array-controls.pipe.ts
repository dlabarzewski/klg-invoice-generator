import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl, FormArray } from '@angular/forms';

@Pipe({
  name: 'getFormArrayControls'
})
export class GetFormArrayControlsPipe implements PipeTransform {

  transform(value: AbstractControl): AbstractControl[] {

    return (value as FormArray).controls;
  }

}
