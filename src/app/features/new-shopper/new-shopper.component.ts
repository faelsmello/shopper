import { AppService } from './../../services/app.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-shopper',
  templateUrl: './new-shopper.component.html',
  styleUrls: ['./new-shopper.component.scss']
})
export class NewShopperComponent implements OnInit {

  formList: FormGroup;

  constructor(
      private readonly formBuilder: FormBuilder,
      private readonly appService: AppService,
      private readonly router: Router) {
    this.formList = this.formBuilder.group({
      list: new FormControl(null, [Validators.required])
    })
  }

  public ngOnInit(): void {
  }

  public submit() {
    const form = this.formList.value.list
    const list = form.split('\n');

    const allList = [];
    for (const item of list) {
      allList.push(this.separeteList(item.split(/(\d+)/)))
    }

    this.appService.changeDataListItem(allList);
    this.router.navigateByUrl('list');
  }

  private separeteList(arr: Array<String>): Array<String> {
    const newArray: Array<String> = [];
    arr.filter((el) => {
      if (el) {
        newArray.push(el);
        // .normalize('NFD').replace(/[^a-zA-Z0-9]/g, '')
      }
    });

    return newArray;
  }

}
