import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MarkdownDocsComponent } from './markdown-docs.component';

describe('MarkdownDocsComponent', () => {
  let component: MarkdownDocsComponent;
  let fixture: ComponentFixture<MarkdownDocsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkdownDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkdownDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
