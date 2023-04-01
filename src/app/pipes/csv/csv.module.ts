import { NgModule } from '@angular/core';
import { ArrayToCsvPipe } from './array-to-csv.pipe';

@NgModule({
  declarations: [ArrayToCsvPipe],
  imports: [],
  exports: [ArrayToCsvPipe]
})
export class CsvModule { }
