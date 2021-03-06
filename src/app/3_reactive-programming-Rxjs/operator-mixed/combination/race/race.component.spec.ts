import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RaceComponent } from './race.component';

xdescribe('RaceComponent', () => {
  let component: RaceComponent;
  let fixture: ComponentFixture<RaceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
