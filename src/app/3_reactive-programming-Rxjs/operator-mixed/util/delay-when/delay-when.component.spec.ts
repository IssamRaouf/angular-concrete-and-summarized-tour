import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelayWhenComponent } from './delay-when.component';

describe('DelayWhenComponent', () => {
  let component: DelayWhenComponent;
  let fixture: ComponentFixture<DelayWhenComponent>;

  beforeEach(async(() => {
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
