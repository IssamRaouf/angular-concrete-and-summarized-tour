import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GroupByComponent } from './group-by.component';

xdescribe('GroupByComponent', () => {
  let component: GroupByComponent;
  let fixture: ComponentFixture<GroupByComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupByComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
