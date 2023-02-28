import { ActivatedRoute, Router, Params} from '@angular/router';
import { AppService } from './../../services/app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-shopper',
  templateUrl: './list-shopper.component.html',
  styleUrls: ['./list-shopper.component.scss']
})
export class ListShopperComponent implements OnInit {

  public listItmes: any = [];
  private localListItems = localStorage.getItem('allList');

  constructor(private readonly appService: AppService, private readonly router: Router, private readonly activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.appService.currentDataListItems.subscribe((list: any) => {
      if (list.length || this.localListItems) {
        this.listItmes = list;
        if (this.localListItems && !list.length) {
          this.activatedRoute.queryParams.subscribe((params: Params) => {
            const localListItems = this.localListItems ? JSON.parse(this.localListItems) : null;
            this.listItmes = localListItems[params['keyList']].list;
          })
        }
      } else {
        this.router.navigateByUrl('new');
      }

    })
  }

  public actions(key: number, type: string): void {
    switch (type) {
      case 'add':
        this.listItmes[key].number += 1;
        break;
      case 'remove':
        this.listItmes[key].number -= 1;
        break;
    }
  }

  public goToBack(): void {
    this.router.navigateByUrl('new');
  }

  public saveList(): void {
    const list = localStorage.getItem('allList');
    const arrayList = list ? JSON.parse(list) : [];
    const objList = {
      date: new Date(),
      list: this.listItmes
    }
    arrayList.push(objList)
    localStorage.setItem('allList', JSON.stringify(arrayList));
  }

}
