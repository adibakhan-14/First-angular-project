import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalCancelledOrdersComponent } from './total-cancelled-orders.component';

describe('TotalCancelledOrdersComponent', () => {
  let component: TotalCancelledOrdersComponent;
  let fixture: ComponentFixture<TotalCancelledOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalCancelledOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalCancelledOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
