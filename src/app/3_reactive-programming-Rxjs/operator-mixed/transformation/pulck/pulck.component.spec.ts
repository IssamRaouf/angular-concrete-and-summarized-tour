import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PulckComponent } from './pulck.component';

xdescribe('PulckComponent', () => {
  let component: PulckComponent;
  let fixture: ComponentFixture<PulckComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PulckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PulckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
