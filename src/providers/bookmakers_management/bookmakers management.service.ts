import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { bookmakers_management } from '../../db'


@Injectable()
export class CryptoService {

  constructor() { }

  get_book_management(): Observable<any> {
    return new Observable<any>(observer => {
      of(bookmakers_management).subscribe(
        response => observer.next(response),
        response => observer.complete()
      )
    })
  }

}
