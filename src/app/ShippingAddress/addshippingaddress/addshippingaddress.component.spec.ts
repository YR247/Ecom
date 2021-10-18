import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddshippingaddressComponent } from './addshippingaddress.component';

describe('AddshippingaddressComponent', () => {
  let component: AddshippingaddressComponent;
  let fixture: ComponentFixture<AddshippingaddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddshippingaddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddshippingaddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
