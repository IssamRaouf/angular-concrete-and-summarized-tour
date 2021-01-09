import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TakeWhileComponent } from './take-while.component';

xdescribe('TakeWhileComponent', () => {
  let component: TakeWhileComponent;
  let fixture: ComponentFixture<TakeWhileComponent>;

  beforeEach(waitForAsync(() => {
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
