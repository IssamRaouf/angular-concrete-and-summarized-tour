import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EndwithComponent } from './endwith.component';

describe('EndwithComponent', () => {
  let component: EndwithComponent;
  let fixture: ComponentFixture<EndwithComponent>;

  beforeEach(waitForAsync(() => {
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
