import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PairwiseComponent } from './pairwise.component';

describe('PairwiseComponent', () => {
  let component: PairwiseComponent;
  let fixture: ComponentFixture<PairwiseComponent>;

  beforeEach(async(() => {
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
