import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPaneComponent } from './student-pane.component';

describe('StudentPaneComponent', () => {
  let component: StudentPaneComponent;
  let fixture: ComponentFixture<StudentPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
