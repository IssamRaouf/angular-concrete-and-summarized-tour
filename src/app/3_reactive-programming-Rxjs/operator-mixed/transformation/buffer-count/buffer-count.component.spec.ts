import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BufferCountComponent } from './buffer-count.component';

xdescribe('BufferCountComponent', () => {
  let component: BufferCountComponent;
  let fixture: ComponentFixture<BufferCountComponent>;

  beforeEach(async(() => {
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
