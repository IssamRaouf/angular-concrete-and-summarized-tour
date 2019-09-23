import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationComponent } from './creation.component';

describe('CreationComponent', () => {
  let component: CreationComponent;
  let fixture: ComponentFixture<CreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
