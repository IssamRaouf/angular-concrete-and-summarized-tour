import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EveryComponent } from './every.component';

xdescribe('EveryComponent', () => {
  let component: EveryComponent;
  let fixture: ComponentFixture<EveryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
