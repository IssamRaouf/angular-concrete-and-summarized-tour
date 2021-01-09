import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AuditTimerComponent } from './audit-timer.component';

xdescribe('AuditTimerComponent', () => {
  let component: AuditTimerComponent;
  let fixture: ComponentFixture<AuditTimerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
