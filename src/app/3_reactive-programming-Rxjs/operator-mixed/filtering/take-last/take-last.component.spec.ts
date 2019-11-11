import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeLastComponent } from './take-last.component';

describe('TakeLastComponent', () => {
  let component: TakeLastComponent;
  let fixture: ComponentFixture<TakeLastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeLastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeLastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
