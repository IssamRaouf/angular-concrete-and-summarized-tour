import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DistinctUntilChangedComponent } from './distinct-until-changed.component';

xdescribe('DistinctUntilChangedComponent', () => {
  let component: DistinctUntilChangedComponent;
  let fixture: ComponentFixture<DistinctUntilChangedComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DistinctUntilChangedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistinctUntilChangedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
