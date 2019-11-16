import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BufferTimeComponent } from './buffer-time.component';

describe('BufferTimeComponent', () => {
  let component: BufferTimeComponent;
  let fixture: ComponentFixture<BufferTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BufferTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BufferTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
