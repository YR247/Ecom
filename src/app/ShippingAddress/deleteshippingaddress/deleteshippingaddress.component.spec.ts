import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteshippingaddressComponent } from './deleteshippingaddress.component';

describe('DeleteshippingaddressComponent', () => {
  let component: DeleteshippingaddressComponent;
  let fixture: ComponentFixture<DeleteshippingaddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteshippingaddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteshippingaddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
