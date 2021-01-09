import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CatchErrorComponent } from './catch-error.component';

xdescribe('CatchErrorComponent', () => {
  let component: CatchErrorComponent;
  let fixture: ComponentFixture<CatchErrorComponent>;

  beforeEach(waitForAsync(() => {
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
