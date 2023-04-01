import { Pipe, PipeTransform } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, startWith, catchError } from 'rxjs/operators';

@Pipe({
  name: 'withLoading',
})
export class WithLoadingPipe implements PipeTransform {

  transform<T>(val: Observable<T>): Observable<{ loading: boolean, value?: T, error?: unknown}> {
    return val.pipe(
      map((value: T) => ({ loading: false, value })),
      startWith({ loading: true }),
      catchError(error => of({ loading: false, error }))
    )
  }

}