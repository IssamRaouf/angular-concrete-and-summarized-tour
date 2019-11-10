import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastComponent } from './last.component';

describe('LastComponent', () => {
  let component: LastComponent;
  let fixture: ComponentFixture<LastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
