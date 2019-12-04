import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToArrayComponent } from './to-array.component';

describe('ToArrayComponent', () => {
  let component: ToArrayComponent;
  let fixture: ComponentFixture<ToArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
