import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewShopperComponent } from './new-shopper.component';

describe('NewShopperComponent', () => {
  let component: NewShopperComponent;
  let fixture: ComponentFixture<NewShopperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewShopperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewShopperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
