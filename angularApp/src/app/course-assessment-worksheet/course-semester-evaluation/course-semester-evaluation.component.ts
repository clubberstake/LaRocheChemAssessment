import { Component, OnInit, Input } from '@angular/core';
import { CourseInformationObject } from '../course-information-object';
import { IndividualLearningRecordObject } from '../../individual-learning-record/individual-learning-record-object';
import { CourseSemesterEvaluationService } from '../../services/course-semester-evaluation.service';
import { StudentInfoForBioAndAdmissionsPlacementTabService } from '../../services/student-info-for-bio-and-admissions-placement-tab.service';
import { StudentInfoForBioAndAdmissionsPlacementTabResponse } from '../../individual-learning-record/studentInfoForBioAndAdmissionsPlacementTabResponse';
import { SemesterReviewResponse } from '../../individual-learning-record/SemesterReviewResponse';
import { CourseSemesterReviewRequest } from '../../individual-learning-record/CourseSemesterReviewRequest';

@Component({
  selector: 'app-course-semester-evaluation',
  templateUrl: './course-semester-evaluation.component.html',
  styleUrls: ['./course-semester-evaluation.component.css']
})
export class CourseSemesterEvaluationComponent implements OnInit {

  @Input() courseInformationObjInput: CourseInformationObject;
  student: StudentInfoForBioAndAdmissionsPlacementTabResponse = new StudentInfoForBioAndAdmissionsPlacementTabResponse(null, "", "", "", "", "", "", "", "", "", "", "");

  constructor(private studentService: StudentInfoForBioAndAdmissionsPlacementTabService) { }

  ngOnInit() {
  }

  addSemesterReviewRow() {
    this.courseInformationObjInput.addCourseSemesterReviewFieldVisible = true;
    console.log(this.courseInformationObjInput.courseSemesterReviewRequests.length );
    if(this.courseInformationObjInput.courseSemesterReviewRequests.length < 15) {
      this.courseInformationObjInput.courseSemesterReviewRequests.push( new CourseSemesterReviewRequest(false,false,false,false,false,false,false,false,false,"",false,false,false,false,false,false,"","","","","","",0,0));
      


    }
  }

  onIdChange(id: number, index: number) {
    this.studentService.getStudentInfoById(id).subscribe((student: StudentInfoForBioAndAdmissionsPlacementTabResponse) => {
      this.student = student
      if(this.student == null) {
        this.courseInformationObjInput.courseSemesterReviewRequests[index].studentName = "No Student Found."
      } else {
        this.courseInformationObjInput.courseSemesterReviewRequests[index].studentName = this.student.studentName
      }
    });
  }
}
