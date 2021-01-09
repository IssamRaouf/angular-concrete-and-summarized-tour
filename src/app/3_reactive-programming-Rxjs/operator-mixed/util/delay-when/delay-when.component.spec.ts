import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DelayWhenComponent } from './delay-when.component';

xdescribe('DelayWhenComponent', () => {
  let component: DelayWhenComponent;
  let fixture: ComponentFixture<DelayWhenComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DelayWhenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelayWhenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
