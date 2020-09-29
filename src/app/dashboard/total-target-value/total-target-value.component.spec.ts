import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalTargetValueComponent } from './total-target-value.component';

describe('TotalTargetValueComponent', () => {
  let component: TotalTargetValueComponent;
  let fixture: ComponentFixture<TotalTargetValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalTargetValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalTargetValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
