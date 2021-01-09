import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ForkjoinComponent } from './forkjoin.component';

xdescribe('ForkjoinComponent', () => {
  let component: ForkjoinComponent;
  let fixture: ComponentFixture<ForkjoinComponent>;

  beforeEach(waitForAsync(() => {
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
