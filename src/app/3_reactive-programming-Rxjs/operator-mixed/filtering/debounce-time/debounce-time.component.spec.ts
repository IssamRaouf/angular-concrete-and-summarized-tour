import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DebounceTimeComponent } from './debounce-time.component';

xdescribe('DebounceTimeComponent', () => {
  let component: DebounceTimeComponent;
  let fixture: ComponentFixture<DebounceTimeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DebounceTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebounceTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
