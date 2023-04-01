import { NgModule } from '@angular/core';
import { GetFormArrayControlsPipe } from './get-form-array-controls.pipe';
import { IsFormFieldInvalidPipe } from './is-form-field-invalid.pipe';

@NgModule({
  declarations: [IsFormFieldInvalidPipe, GetFormArrayControlsPipe],
  imports: [],
  exports: [IsFormFieldInvalidPipe, GetFormArrayControlsPipe]
})
export class FormHelpersModule { }
