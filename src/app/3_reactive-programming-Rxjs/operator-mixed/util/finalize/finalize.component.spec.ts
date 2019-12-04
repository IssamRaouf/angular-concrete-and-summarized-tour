import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizeComponent } from './finalize.component';

describe('FinalizeComponent', () => {
  let component: FinalizeComponent;
  let fixture: ComponentFixture<FinalizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
