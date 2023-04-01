import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { InvoiceModel } from '../models/invoice.model';

@Injectable({ providedIn: 'root' })
export class InvoiceService {
  private _lastInvoiceSubject: BehaviorSubject<InvoiceModel | undefined> = new BehaviorSubject<InvoiceModel | undefined>(undefined);
  private _lastInvoice$: Observable<InvoiceModel | undefined> = this._lastInvoiceSubject.asObservable();

  create(data: InvoiceModel): Observable<void> {
    this._lastInvoiceSubject.next(data);

    return of(void 0);
  }

  getLast(): Observable<InvoiceModel | undefined> {
    return this._lastInvoice$;
  }

  clear(): void {
    this._lastInvoiceSubject.next(undefined);
  }
}
