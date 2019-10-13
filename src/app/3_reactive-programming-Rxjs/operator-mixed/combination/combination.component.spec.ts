import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombinationComponent } from './combination.component';

describe('CombinationComponent', () => {
  let component: CombinationComponent;
  let fixture: ComponentFixture<CombinationComponent>;

  beforeEach(async(() => {
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
