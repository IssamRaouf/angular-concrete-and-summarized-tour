import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CombinationComponent } from './combination.component';

describe('CombinationComponent', () => {
  let component: CombinationComponent;
  let fixture: ComponentFixture<CombinationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CombinationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
