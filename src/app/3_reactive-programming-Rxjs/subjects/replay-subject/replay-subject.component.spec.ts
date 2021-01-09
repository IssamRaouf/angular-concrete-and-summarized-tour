import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ReplaySubjectComponent } from './replay-subject.component';

xdescribe('ReplaySubjectComponent', () => {
  let component: ReplaySubjectComponent;
  let fixture: ComponentFixture<ReplaySubjectComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplaySubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplaySubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
