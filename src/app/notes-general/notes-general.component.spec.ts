import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesGeneralComponent } from './notes-general.component';

describe('NotesGeneralComponent', () => {
  let component: NotesGeneralComponent;
  let fixture: ComponentFixture<NotesGeneralComponent>;

  beforeEach(async(() => {
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
