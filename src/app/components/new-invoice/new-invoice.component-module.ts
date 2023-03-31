import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NewInvoiceComponent } from './new-invoice.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NewInvoiceValidationErrorsModule } from 'src/app/modules/new-invoice-validation-errors.module';
import { FormHelpersModule } from 'src/app/modules/form-helpers.module';

@NgModule({
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatSnackBarModule,
    NewInvoiceValidationErrorsModule,
    FormHelpersModule
  ],
  declarations: [NewInvoiceComponent],
  providers: [],
  exports: [NewInvoiceComponent],
})
export class NewInvoiceComponentModule {}
