import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartitionComponent } from './partition.component';

describe('PartitionComponent', () => {
  let component: PartitionComponent;
  let fixture: ComponentFixture<PartitionComponent>;

  beforeEach(async(() => {
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
