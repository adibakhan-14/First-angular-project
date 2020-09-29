import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalProductsComponent } from './total-products.component';

describe('TotalProductsComponent', () => {
  let component: TotalProductsComponent;
  let fixture: ComponentFixture<TotalProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
