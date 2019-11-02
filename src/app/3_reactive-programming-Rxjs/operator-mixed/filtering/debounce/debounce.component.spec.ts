import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebounceComponent } from './debounce.component';

describe('DebounceComponent', () => {
  let component: DebounceComponent;
  let fixture: ComponentFixture<DebounceComponent>;

  beforeEach(async(() => {
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
