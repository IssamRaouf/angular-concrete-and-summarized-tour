import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeDetailsComponent } from './code-details.component';

describe('CodeDetailsComponent', () => {
  let component: CodeDetailsComponent;
  let fixture: ComponentFixture<CodeDetailsComponent>;

  beforeEach(async(() => {
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
