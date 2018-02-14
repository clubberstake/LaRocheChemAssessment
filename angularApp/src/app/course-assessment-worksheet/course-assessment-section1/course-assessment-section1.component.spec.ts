import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAssessmentSection1Component } from './course-assessment-section1.component';

describe('CourseAssessmentSection1Component', () => {
  let component: CourseAssessmentSection1Component;
  let fixture: ComponentFixture<CourseAssessmentSection1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseAssessmentSection1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseAssessmentSection1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
