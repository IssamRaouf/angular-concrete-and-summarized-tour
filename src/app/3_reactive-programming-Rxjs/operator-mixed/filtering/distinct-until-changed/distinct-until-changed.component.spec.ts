import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistinctUntilChangedComponent } from './distinct-until-changed.component';

describe('DistinctUntilChangedComponent', () => {
  let component: DistinctUntilChangedComponent;
  let fixture: ComponentFixture<DistinctUntilChangedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistinctUntilChangedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistinctUntilChangedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
