import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAssessmentCoursePaneComponent } from './course-assessment-course-pane.component';

describe('CourseAssessmentCoursePaneComponent', () => {
  let component: CourseAssessmentCoursePaneComponent;
  let fixture: ComponentFixture<CourseAssessmentCoursePaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseAssessmentCoursePaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseAssessmentCoursePaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
