import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetryComponent } from './retry.component';

describe('RetryComponent', () => {
  let component: RetryComponent;
  let fixture: ComponentFixture<RetryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
