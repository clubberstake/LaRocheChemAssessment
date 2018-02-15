import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAssessmentCaf3 } from './caf-section-3.component';

describe('CourseAssessmentCaf3', () => {
  let component: CourseAssessmentCaf3;
  let fixture: ComponentFixture<CourseAssessmentCaf3>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseAssessmentCaf3 ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseAssessmentCaf3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});