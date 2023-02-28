import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public allList: any[] = [];
  private localList = localStorage.getItem('allList');

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
    this.allList = this.localList ? JSON.parse(this.localList) : [];
  }

  public goToList(key: number): void {
    this.router.navigate(['list'], {queryParams: { keyList: key }})
  }

}
