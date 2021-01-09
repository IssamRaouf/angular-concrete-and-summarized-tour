import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CodeDetailsComponent } from './code-details.component';

describe('CodeDetailsComponent', () => {
  let component: CodeDetailsComponent;
  let fixture: ComponentFixture<CodeDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
