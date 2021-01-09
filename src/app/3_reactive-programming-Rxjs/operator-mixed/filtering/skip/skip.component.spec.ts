import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SkipComponent } from './skip.component';

xdescribe('SkipComponent', () => {
  let component: SkipComponent;
  let fixture: ComponentFixture<SkipComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SkipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
