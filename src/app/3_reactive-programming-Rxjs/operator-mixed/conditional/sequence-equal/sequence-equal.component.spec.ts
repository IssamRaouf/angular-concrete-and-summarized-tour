import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SequenceEqualComponent } from './sequence-equal.component';

xdescribe('SequenceEqualComponent', () => {
  let component: SequenceEqualComponent;
  let fixture: ComponentFixture<SequenceEqualComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SequenceEqualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SequenceEqualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
