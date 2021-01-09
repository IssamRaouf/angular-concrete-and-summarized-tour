import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MapToComponent } from './map-to.component';

xdescribe('MapToComponent', () => {
  let component: MapToComponent;
  let fixture: ComponentFixture<MapToComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MapToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
