import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InvoiceService } from '../../services/invoice.service';
import { InvoiceModel } from '../../models/invoice.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, of, take, tap } from 'rxjs';

@Component({
  selector: 'app-new-invoice',
  styleUrls: ['./new-invoice.component.scss'],
  templateUrl: './new-invoice.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewInvoiceComponent {
  readonly invoiceForm: FormGroup = new FormGroup({
    items: new FormArray([this._generateFormItem()])
  });

  constructor(private _snackBar: MatSnackBar, private _invoiceService: InvoiceService, private _router: Router) { }

  private _generateFormItem(): FormGroup {
    return new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      count: new FormControl(1, [Validators.required, Validators.min(1), Validators.max(100), Validators.pattern(/^[0-9]*$/)]),
      price: new FormControl(1, [Validators.required, Validators.min(1), Validators.max(1e6), Validators.pattern(/^[0-9]*$/)]),
    });
  }

  addNewFormItem() {
    (this.invoiceForm.get('items') as FormArray).push(this._generateFormItem());
  }

  removeFormItem(index: number) {
    (this.invoiceForm.get('items') as FormArray).removeAt(index);
  }

  onInvoiceFormSubmitted(invoiceForm: FormGroup): void {
    const formValue = invoiceForm.getRawValue();

    if (formValue.items.length === 0) {
      this._snackBar.open('Please add items', 'Ok');
      return;
    }

    if (invoiceForm.invalid) {
      invoiceForm.markAllAsTouched();
      return;
    }

    const createInvoiceModel: InvoiceModel = {
      items: formValue.items
    }

    this._invoiceService.create(createInvoiceModel).pipe(
      take(1),
      tap(_ => {
        this._router.navigateByUrl('/preview');
      }),
      catchError(e => {
        this._snackBar.open('There was an error while creating invoice', 'Ok');
        return of();
      })
    ).subscribe();
  }
}
