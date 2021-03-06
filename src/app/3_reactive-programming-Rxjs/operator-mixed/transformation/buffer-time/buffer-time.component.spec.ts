import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BufferTimeComponent } from './buffer-time.component';

xdescribe('BufferTimeComponent', () => {
  let component: BufferTimeComponent;
  let fixture: ComponentFixture<BufferTimeComponent>;

  beforeEach(waitForAsync(() => {
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
