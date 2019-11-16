import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeWhileComponent } from './take-while.component';

describe('TakeWhileComponent', () => {
  let component: TakeWhileComponent;
  let fixture: ComponentFixture<TakeWhileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeWhileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeWhileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
