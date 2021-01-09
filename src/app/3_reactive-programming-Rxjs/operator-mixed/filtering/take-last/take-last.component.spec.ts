import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TakeLastComponent } from './take-last.component';

xdescribe('TakeLastComponent', () => {
  let component: TakeLastComponent;
  let fixture: ComponentFixture<TakeLastComponent>;

  beforeEach(waitForAsync(() => {
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
