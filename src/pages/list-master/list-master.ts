import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { Item } from '../../models/item';
import { Items } from '../../providers';
import { CryptoService } from '../../providers/crypto/crypto.service';

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html',
  providers: [CryptoService],
})
export class ListMasterPage {
  currentItems: Item[];

  crypto_price_list$: Observable<any>;

  constructor(
    public navCtrl: NavController,
    public items: Items,
    public modalCtrl: ModalController,
    private readonly cryptoService: CryptoService,
  ) {
    this.currentItems = this.items.query();
    this.crypto_price_list$ = this.cryptoService.get_price_from_crypto_compare().pipe(
      map(res => {
        res['ADA'] = { ...res['ADA'], img: 'dsa' };
        return res;
      })
    )

  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
    console.log('dasasdsdasda');
    // const crypto_price_list$ = this.cryptoService.get_price_from_crypto_compare();
  }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  addItem() {
    let addModal = this.modalCtrl.create('ItemCreatePage');
    addModal.onDidDismiss(item => {
      if (item) {
        this.items.add(item);
      }
    })
    addModal.present();
  }

  /**
   * Delete an item from the list of items.
   */
  deleteItem(item) {
    this.items.delete(item);
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }
}
