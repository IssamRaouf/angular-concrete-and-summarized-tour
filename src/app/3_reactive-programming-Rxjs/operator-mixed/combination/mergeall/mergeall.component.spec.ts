import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MergeallComponent } from './mergeall.component';

xdescribe('MergeallComponent', () => {
  let component: MergeallComponent;
  let fixture: ComponentFixture<MergeallComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MergeallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
