import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatchErrorComponent } from './catch-error.component';

describe('CatchErrorComponent', () => {
  let component: CatchErrorComponent;
  let fixture: ComponentFixture<CatchErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatchErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatchErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
