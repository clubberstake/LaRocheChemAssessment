import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseAssessmentUpdateUserComponent } from './course-assessment-update-user.component';


describe('CourseAssessmentUpdateUserComponent', () => {
  let component: CourseAssessmentUpdateUserComponent;
  let fixture: ComponentFixture<CourseAssessmentUpdateUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseAssessmentUpdateUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseAssessmentUpdateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
