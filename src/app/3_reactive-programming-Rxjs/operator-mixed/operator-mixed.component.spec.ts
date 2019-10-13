import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorMixedComponent } from './operator-mixed.component';

describe('OperatorMixedComponent', () => {
  let component: OperatorMixedComponent;
  let fixture: ComponentFixture<OperatorMixedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatorMixedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorMixedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
