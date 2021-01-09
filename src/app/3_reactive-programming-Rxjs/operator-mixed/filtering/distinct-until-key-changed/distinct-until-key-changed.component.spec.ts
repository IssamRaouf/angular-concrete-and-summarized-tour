import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DistinctUntilKeyChangedComponent } from './distinct-until-key-changed.component';

xdescribe('DistinctUntilKeyChangedComponent', () => {
  let component: DistinctUntilKeyChangedComponent;
  let fixture: ComponentFixture<DistinctUntilKeyChangedComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DistinctUntilKeyChangedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistinctUntilKeyChangedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
