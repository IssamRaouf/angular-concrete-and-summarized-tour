import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapToComponent } from './map-to.component';

describe('MapToComponent', () => {
  let component: MapToComponent;
  let fixture: ComponentFixture<MapToComponent>;

  beforeEach(async(() => {
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
