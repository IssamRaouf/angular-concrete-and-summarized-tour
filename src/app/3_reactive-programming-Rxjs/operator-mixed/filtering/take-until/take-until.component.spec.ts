import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TakeUntilComponent } from './take-until.component';

xdescribe('TakeUntilComponent', () => {
  let component: TakeUntilComponent;
  let fixture: ComponentFixture<TakeUntilComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeUntilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeUntilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
