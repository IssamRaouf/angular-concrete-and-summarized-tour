import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalComponent } from './conditional.component';

describe('ConditionalComponent', () => {
  let component: ConditionalComponent;
  let fixture: ComponentFixture<ConditionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConditionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
