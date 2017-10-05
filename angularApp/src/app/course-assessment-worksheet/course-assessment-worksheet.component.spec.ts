import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAssessmentWorksheetComponent } from './course-assessment-worksheet.component';

describe('CourseAssessmentWorksheetComponent', () => {
  let component: CourseAssessmentWorksheetComponent;
  let fixture: ComponentFixture<CourseAssessmentWorksheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseAssessmentWorksheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseAssessmentWorksheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
