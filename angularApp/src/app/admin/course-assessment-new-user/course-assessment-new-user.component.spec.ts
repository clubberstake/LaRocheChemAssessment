import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAssessmentNewUserComponent } from './course-assessment-new-user.component';

describe('CourseAssessmentNewUserComponent', () => {
  let component: CourseAssessmentNewUserComponent;
  let fixture: ComponentFixture<CourseAssessmentNewUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseAssessmentNewUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseAssessmentNewUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
