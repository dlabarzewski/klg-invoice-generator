import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CsvModule } from 'src/app/pipes/csv/csv.module';
import { ObservationsModule } from 'src/app/pipes/observations/observations.module';
import { PreviewInvoiceComponent } from './preview-invoice.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; 

@NgModule({
  imports: [CommonModule, CsvModule, ObservationsModule, MatProgressSpinnerModule],
  declarations: [PreviewInvoiceComponent],
  providers: [],
  exports: [PreviewInvoiceComponent]
})
export class PreviewInvoiceComponentModule {
}
