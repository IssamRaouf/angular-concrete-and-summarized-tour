import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PairwiseComponent } from './pairwise.component';

xdescribe('PairwiseComponent', () => {
  let component: PairwiseComponent;
  let fixture: ComponentFixture<PairwiseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PairwiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PairwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
