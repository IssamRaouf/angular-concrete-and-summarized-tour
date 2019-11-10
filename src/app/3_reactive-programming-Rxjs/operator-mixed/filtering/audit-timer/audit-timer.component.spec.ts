import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditTimerComponent } from './audit-timer.component';

describe('AuditTimerComponent', () => {
  let component: AuditTimerComponent;
  let fixture: ComponentFixture<AuditTimerComponent>;

  beforeEach(async(() => {
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
