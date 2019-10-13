import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartwithComponent } from './startwith.component';

describe('StartwithComponent', () => {
  let component: StartwithComponent;
  let fixture: ComponentFixture<StartwithComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartwithComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartwithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
