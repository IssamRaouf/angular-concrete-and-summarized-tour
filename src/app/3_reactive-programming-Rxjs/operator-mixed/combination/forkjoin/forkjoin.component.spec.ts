import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForkjoinComponent } from './forkjoin.component';

describe('ForkjoinComponent', () => {
  let component: ForkjoinComponent;
  let fixture: ComponentFixture<ForkjoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForkjoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForkjoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
