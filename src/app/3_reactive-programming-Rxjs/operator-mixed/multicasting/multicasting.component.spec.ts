import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MulticastingComponent } from './multicasting.component';

xdescribe('MulticastingComponent', () => {
  let component: MulticastingComponent;
  let fixture: ComponentFixture<MulticastingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MulticastingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MulticastingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
