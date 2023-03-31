import { NgModule } from '@angular/core';
import { CountValidationErrorPipe } from 'src/app/pipes/new-invoice/count-validation-error.pipe';
import { NameValidationErrorPipe } from 'src/app/pipes/new-invoice/name-validation-error.pipe';
import { PriceValidationErrorPipe } from 'src/app/pipes/new-invoice/price-validation-error.pipe';

@NgModule({
  declarations: [NameValidationErrorPipe, PriceValidationErrorPipe, CountValidationErrorPipe],
  imports: [],
  exports: [NameValidationErrorPipe, PriceValidationErrorPipe, CountValidationErrorPipe]
})
export class NewInvoiceValidationErrorsModule { }
