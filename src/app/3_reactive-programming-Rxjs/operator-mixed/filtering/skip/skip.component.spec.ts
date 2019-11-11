import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkipComponent } from './skip.component';

describe('SkipComponent', () => {
  let component: SkipComponent;
  let fixture: ComponentFixture<SkipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
