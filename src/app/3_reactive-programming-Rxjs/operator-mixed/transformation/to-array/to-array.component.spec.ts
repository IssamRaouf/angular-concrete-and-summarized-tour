import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ToArrayComponent } from './to-array.component';

xdescribe('ToArrayComponent', () => {
  let component: ToArrayComponent;
  let fixture: ComponentFixture<ToArrayComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ToArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
