import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeallComponent } from './mergeall.component';

describe('MergeallComponent', () => {
  let component: MergeallComponent;
  let fixture: ComponentFixture<MergeallComponent>;

  beforeEach(async(() => {
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
