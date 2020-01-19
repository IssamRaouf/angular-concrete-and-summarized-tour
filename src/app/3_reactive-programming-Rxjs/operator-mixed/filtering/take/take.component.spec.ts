import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeComponent } from './take.component';

xdescribe('TakeComponent', () => {
  let component: TakeComponent;
  let fixture: ComponentFixture<TakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
