import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ThrottleComponent } from './throttle.component';

xdescribe('ThrottleComponent', () => {
  let component: ThrottleComponent;
  let fixture: ComponentFixture<ThrottleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ThrottleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThrottleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
