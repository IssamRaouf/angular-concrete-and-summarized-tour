import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LastComponent } from './last.component';

xdescribe('LastComponent', () => {
  let component: LastComponent;
  let fixture: ComponentFixture<LastComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
