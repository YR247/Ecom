import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateshippingaddressComponent } from './updateshippingaddress.component';

describe('UpdateshippingaddressComponent', () => {
  let component: UpdateshippingaddressComponent;
  let fixture: ComponentFixture<UpdateshippingaddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateshippingaddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateshippingaddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
