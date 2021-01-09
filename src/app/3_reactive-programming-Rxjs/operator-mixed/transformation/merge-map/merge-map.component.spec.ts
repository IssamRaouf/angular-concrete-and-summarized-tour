import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MergeMapComponent } from './merge-map.component';

xdescribe('MergeMapComponent', () => {
  let component: MergeMapComponent;
  let fixture: ComponentFixture<MergeMapComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MergeMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
