import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListShopperComponent } from './list-shopper.component';

describe('ListShopperComponent', () => {
  let component: ListShopperComponent;
  let fixture: ComponentFixture<ListShopperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListShopperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListShopperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
