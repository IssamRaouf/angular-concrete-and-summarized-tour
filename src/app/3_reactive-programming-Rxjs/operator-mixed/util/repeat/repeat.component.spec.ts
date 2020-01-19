import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepeatComponent } from './repeat.component';

xdescribe('RepeatComponent', () => {
  let component: RepeatComponent;
  let fixture: ComponentFixture<RepeatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepeatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
