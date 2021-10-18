import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewshippingaddressComponent } from './viewshippingaddress.component';

describe('ViewshippingaddressComponent', () => {
  let component: ViewshippingaddressComponent;
  let fixture: ComponentFixture<ViewshippingaddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewshippingaddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewshippingaddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
