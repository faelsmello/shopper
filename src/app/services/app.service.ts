import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public listItems: any = new BehaviorSubject([]);
  public currentDataListItems = this.listItems.asObservable();


  constructor() { }

  public changeDataListItem(items?: any): void {

    const list = [];

    let count = 1;
    for (let item of items) {
      const objItem = {
        number: item.length === 1 ? 0 : Number(item[0]),
        name: item.length === 1 ? item[0] : item[1],
        id: count++
      }
      list.push(objItem);
    }
    this.listItems.next(list);
  }

}
