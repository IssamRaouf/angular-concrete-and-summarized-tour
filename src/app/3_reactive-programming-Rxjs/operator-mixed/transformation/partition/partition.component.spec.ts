import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PartitionComponent } from './partition.component';

xdescribe('PartitionComponent', () => {
  let component: PartitionComponent;
  let fixture: ComponentFixture<PartitionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PartitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
