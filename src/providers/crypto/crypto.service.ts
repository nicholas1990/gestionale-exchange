import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Item } from '../../models/item';
import { Api } from '../api/api';


@Injectable()
export class CryptoService {

  constructor(
    public api: Api,
    private readonly http: HttpClient,
  ) { }

  get_price_from_crypto_compare(): Observable<any> {
    const fsymsList = 'BTC,ETH,SXP,LTC,DOT,ADA,FET,CRO,ENJ,OCEAN,HOT,VTHO,SHIB,BTT,TRX';
    const currency = 'EUR';

    const apiUrl = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${fsymsList}&tsyms=${currency}`;
    // return this.http.get(apiUrl);

    return of([]);

    // return new Observable<any>(observer => {
    //   this.http.get(apiUrl).subscribe(
    //     response => observer.next(response),
    //     response => observer.complete()
    //   )
    // });
  }

  add(item: Item) {
  }

  delete(item: Item) {
  }

}
