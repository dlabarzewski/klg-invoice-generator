import { NgModule } from '@angular/core';
import { GetFormArrayControlsPipe } from '../pipes/forms/get-form-array-controls.pipe';
import { IsFormFieldInvalidPipe } from '../pipes/forms/is-form-field-invalid.pipe';

@NgModule({
  declarations: [IsFormFieldInvalidPipe, GetFormArrayControlsPipe],
  imports: [],
  exports: [IsFormFieldInvalidPipe, GetFormArrayControlsPipe]
})
export class FormHelpersModule { }
