import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscNotesComponent } from './misc-notes.component';

describe('MiscNotesComponent', () => {
  let component: MiscNotesComponent;
  let fixture: ComponentFixture<MiscNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiscNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiscNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
