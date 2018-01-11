import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAssessmentCourseInformationComponent } from './course-assessment-course-information.component';

describe('CourseAssessmentCourseInformationComponent', () => {
  let component: CourseAssessmentCourseInformationComponent;
  let fixture: ComponentFixture<CourseAssessmentCourseInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseAssessmentCourseInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseAssessmentCourseInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
