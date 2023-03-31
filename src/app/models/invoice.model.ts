import { InvoiceItemModel } from "./invoice-item.model";

export interface InvoiceModel {
  readonly items: InvoiceItemModel[];
}
