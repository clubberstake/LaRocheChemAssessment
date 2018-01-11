import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAssessmentStudentPaneComponent } from './course-assessment-student-pane.component';

describe('CourseAssessmentStudentPaneComponent', () => {
  let component: CourseAssessmentStudentPaneComponent;
  let fixture: ComponentFixture<CourseAssessmentStudentPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseAssessmentStudentPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseAssessmentStudentPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
