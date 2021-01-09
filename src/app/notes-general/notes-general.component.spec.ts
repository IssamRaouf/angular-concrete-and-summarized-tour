import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NotesGeneralComponent } from './notes-general.component';

describe('NotesGeneralComponent', () => {
  let component: NotesGeneralComponent;
  let fixture: ComponentFixture<NotesGeneralComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
