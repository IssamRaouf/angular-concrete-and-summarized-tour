import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OperatorMixedComponent } from './operator-mixed.component';

xdescribe('OperatorMixedComponent', () => {
  let component: OperatorMixedComponent;
  let fixture: ComponentFixture<OperatorMixedComponent>;

  beforeEach(waitForAsync(() => {
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
