import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BufferCountComponent } from './buffer-count.component';

xdescribe('BufferCountComponent', () => {
  let component: BufferCountComponent;
  let fixture: ComponentFixture<BufferCountComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BufferCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BufferCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
