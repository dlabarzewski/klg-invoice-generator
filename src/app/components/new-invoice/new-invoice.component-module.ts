import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NewInvoiceComponent } from './new-invoice.component';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip'; 

@NgModule({
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, CommonModule, MatButtonModule, MatIconModule, MatTooltipModule],
  declarations: [NewInvoiceComponent],
  providers: [],
  exports: [NewInvoiceComponent]
})
export class NewInvoiceComponentModule {
}
