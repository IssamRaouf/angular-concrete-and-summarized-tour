import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTodoComponent } from './details-todo.component';

describe('DetailsTodoComponent', () => {
  let component: DetailsTodoComponent;
  let fixture: ComponentFixture<DetailsTodoComponent>;

  beforeEach(async(() => {
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
