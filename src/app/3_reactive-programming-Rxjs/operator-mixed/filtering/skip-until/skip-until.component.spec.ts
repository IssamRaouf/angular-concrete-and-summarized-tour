import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SkipUntilComponent } from './skip-until.component';

xdescribe('SkipUntilComponent', () => {
  let component: SkipUntilComponent;
  let fixture: ComponentFixture<SkipUntilComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SkipUntilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkipUntilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
