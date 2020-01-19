import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultifemptyComponent } from './defaultifempty.component';

xdescribe('DefaultifemptyComponent', () => {
  let component: DefaultifemptyComponent;
  let fixture: ComponentFixture<DefaultifemptyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultifemptyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultifemptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
