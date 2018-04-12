import { Component, OnInit, Input } from '@angular/core';
import { CourseInformationObject } from '../course-information-object';
import { IndividualLearningRecordObject } from '../../individual-learning-record/individual-learning-record-object';
import { CourseSemesterEvaluationService } from '../../services/course-semester-evaluation.service';
import { StudentInfoForBioAndAdmissionsPlacementTabService } from '../../services/student-info-for-bio-and-admissions-placement-tab.service';
import { StudentInfoForBioAndAdmissionsPlacementTabResponse } from '../../individual-learning-record/studentInfoForBioAndAdmissionsPlacementTabResponse';

@Component({
  selector: 'app-course-semester-evaluation',
  templateUrl: './course-semester-evaluation.component.html',
  styleUrls: ['./course-semester-evaluation.component.css']
})
export class CourseSemesterEvaluationComponent implements OnInit {

  @Input() courseInformationObjInput: CourseInformationObject;
  student: StudentInfoForBioAndAdmissionsPlacementTabResponse = new StudentInfoForBioAndAdmissionsPlacementTabResponse(null, "", "", "", "", "", "", "", "", "", "");

  constructor(private studentService: StudentInfoForBioAndAdmissionsPlacementTabService) { }

  ngOnInit() {
  }

  addSemesterReviewRow() {
    this.courseInformationObjInput.addCourseSemesterReviewFieldVisible = true;
  }

  onIdChange(id: number) {
    console.log("Got change event here: " + id)
    this.studentService.getStudentInfoById(id).subscribe((student: StudentInfoForBioAndAdmissionsPlacementTabResponse) => {
      this.student = student
      if(this.student == null) {
        this.courseInformationObjInput.courseSemesterReviewRequest.studentName = "No Student Found."
      } else {
        this.courseInformationObjInput.courseSemesterReviewRequest.studentName = this.student.studentName
      }
    });
  }
}
