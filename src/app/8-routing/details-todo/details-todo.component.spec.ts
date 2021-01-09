import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DetailsTodoComponent } from './details-todo.component';

xdescribe('DetailsTodoComponent', () => {
  let component: DetailsTodoComponent;
  let fixture: ComponentFixture<DetailsTodoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
