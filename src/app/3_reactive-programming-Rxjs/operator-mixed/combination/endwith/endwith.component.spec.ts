import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndwithComponent } from './endwith.component';

describe('EndwithComponent', () => {
  let component: EndwithComponent;
  let fixture: ComponentFixture<EndwithComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndwithComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndwithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
