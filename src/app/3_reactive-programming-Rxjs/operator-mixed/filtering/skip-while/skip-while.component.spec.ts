import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SkipWhileComponent } from './skip-while.component';

xdescribe('SkipWhileComponent', () => {
  let component: SkipWhileComponent;
  let fixture: ComponentFixture<SkipWhileComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SkipWhileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkipWhileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
