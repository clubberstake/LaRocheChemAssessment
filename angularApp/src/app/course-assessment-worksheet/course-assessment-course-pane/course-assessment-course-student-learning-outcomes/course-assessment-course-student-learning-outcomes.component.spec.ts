import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAssessmentCourseStudentLearningOutcomesComponent } from './course-assessment-course-student-learning-outcomes.component';

describe('CourseAssessmentCourseStudentLearningOutcomesComponent', () => {
  let component: CourseAssessmentCourseStudentLearningOutcomesComponent;
  let fixture: ComponentFixture<CourseAssessmentCourseStudentLearningOutcomesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseAssessmentCourseStudentLearningOutcomesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseAssessmentCourseStudentLearningOutcomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
