import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAssessmentNewCourseComponent } from './course-assessment-new-course.component';

describe('CourseAssessmentNewCourseComponent', () => {
  let component: CourseAssessmentNewCourseComponent;
  let fixture: ComponentFixture<CourseAssessmentNewCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseAssessmentNewCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseAssessmentNewCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
