import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilComponent } from './util.component';

describe('UtilComponent', () => {
  let component: UtilComponent;
  let fixture: ComponentFixture<UtilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
