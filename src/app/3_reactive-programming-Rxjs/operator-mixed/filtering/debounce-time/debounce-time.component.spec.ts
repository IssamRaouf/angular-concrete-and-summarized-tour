import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebounceTimeComponent } from './debounce-time.component';

xdescribe('DebounceTimeComponent', () => {
  let component: DebounceTimeComponent;
  let fixture: ComponentFixture<DebounceTimeComponent>;

  beforeEach(async(() => {
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
