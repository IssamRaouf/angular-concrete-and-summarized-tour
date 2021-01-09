import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ThrottleTimeComponent } from './throttle-time.component';

xdescribe('ThrottleTimeComponent', () => {
  let component: ThrottleTimeComponent;
  let fixture: ComponentFixture<ThrottleTimeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ThrottleTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThrottleTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
