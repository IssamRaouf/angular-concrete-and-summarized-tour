import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DebounceComponent } from './debounce.component';

xdescribe('DebounceComponent', () => {
  let component: DebounceComponent;
  let fixture: ComponentFixture<DebounceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DebounceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebounceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
