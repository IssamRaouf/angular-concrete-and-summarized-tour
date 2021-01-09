import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StartwithComponent } from './startwith.component';

xdescribe('StartwithComponent', () => {
  let component: StartwithComponent;
  let fixture: ComponentFixture<StartwithComponent>;

  beforeEach(waitForAsync(() => {
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
