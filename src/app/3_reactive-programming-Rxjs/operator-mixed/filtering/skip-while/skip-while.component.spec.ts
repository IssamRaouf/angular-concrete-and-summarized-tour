import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkipWhileComponent } from './skip-while.component';

describe('SkipWhileComponent', () => {
  let component: SkipWhileComponent;
  let fixture: ComponentFixture<SkipWhileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkipWhileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkipWhileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
