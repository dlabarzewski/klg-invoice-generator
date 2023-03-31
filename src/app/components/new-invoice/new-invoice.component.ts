import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-invoice',
  styleUrls: ['./new-invoice.component.scss'],
  templateUrl: './new-invoice.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewInvoiceComponent {
  readonly invoiceForm: FormGroup = new FormGroup({ name: new FormControl(), count: new FormControl(), price: new FormControl() });

  onInvoiceFormSubmitted(invoiceForm: FormGroup): void {
  }
}
