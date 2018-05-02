import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CourseInfoForAssessment } from "./courseInfoForAssessment";
import { CourseInformationObject } from "./course-information-object";
import { ClassInfo } from "./classInfo";
import { CourseSLOsInformationService } from "../services/course-slo-service.service";
import { CAFS1InformationService } from "../services/cafs1-service.service";
import { CAFS2InformationService } from "../services/cafs2-service.service";
import { CAFS3InformationService } from "../services/cafs3-service.service";
import { CAFS6InformationService } from "../services/cafs6-service.service";
import { CourseSemesterEvaluationService } from "../services/course-semester-evaluation.service";
import { SemesterEvaluationService } from "../services/semester-evaluation.service";
import { StudentInfoForBioAndAdmissionsPlacementTabService } from "../services/student-info-for-bio-and-admissions-placement-tab.service";
import { StudentInfoForBioAndAdmissionsPlacementTabResponse } from "../individual-learning-record/studentInfoForBioAndAdmissionsPlacementTabResponse";
import { SemesterReviewResponse } from "../individual-learning-record/SemesterReviewResponse";
import { studentInfoForBioAndAdmissionsPlacementTabRequest } from "../individual-learning-record/studentInfoForBioAndAdmissionsPlacementTabRequest";
import swal from "sweetalert2";

@Component({
  selector: "app-course-assessment-worksheet",
  templateUrl: "./course-assessment-worksheet.component.html",
  styleUrls: ["./course-assessment-worksheet.component.css"]
})
export class CourseAssessmentWorksheetComponent implements OnInit {
  courseInformationObj: CourseInformationObject;
  reviews: SemesterReviewResponse[] = [];
  student = new studentInfoForBioAndAdmissionsPlacementTabRequest(0, '', '', '', '', '', '', '', '', '', '','');

  constructor(
    public sloService: CourseSLOsInformationService,
    public cafs1Service: CAFS1InformationService,
    public cafs2Service: CAFS2InformationService,
    public cafs3Service: CAFS3InformationService,
    public cafs6Service: CAFS6InformationService,
    public CourseSemesterEvaluationService: CourseSemesterEvaluationService,
    private studentsService: StudentInfoForBioAndAdmissionsPlacementTabService,
    private semesterEvaluationService: SemesterEvaluationService
  ) {
    this.courseInformationObj = new CourseInformationObject();
  }

  ngOnInit(){

    this.studentsService
      .getStudentInfoById(1)
      .subscribe(
        (student: StudentInfoForBioAndAdmissionsPlacementTabResponse) => {
          if (!student) {
            console.log("Didnt find students");
            let student = new StudentInfoForBioAndAdmissionsPlacementTabResponse(
              null,"Greg","Chemistry","Junior","Fall","B","No","Resident","No","No","","");
            this.studentsService.addNewStudent(student);
            student = new StudentInfoForBioAndAdmissionsPlacementTabResponse(
              null,"Keith","Chemistry","Senior","Summer","B","No","Commuter","No","No","","");
            this.studentsService.addNewStudent(student);
            student = new StudentInfoForBioAndAdmissionsPlacementTabResponse(
              null,"Johnny","Chemistry","Sophomore","Spring","B","No","Resident","No","No","","");
            this.studentsService.addNewStudent(student);
            student = new StudentInfoForBioAndAdmissionsPlacementTabResponse(
              null,"Aaron","Chemistry","Senior","Fall","B","No","Commuter","No","No","","");
            this.studentsService.addNewStudent(student);
          } else {
            console.log("found student, no need to seed students");
          }
        }
      );

      this.semesterEvaluationService.getSemesterEvaluations().subscribe((reviews: SemesterReviewResponse[]) => {
        this.reviews = reviews;
        this.reviews[0].student = this.student
      });
  }

  onSave() {
    this.sloService.updateSLOs(this.courseInformationObj.CourseSLOs);
    this.cafs1Service.updateCafs1(this.courseInformationObj.Cafs1Info);
    this.cafs2Service.updateCafs2(this.courseInformationObj.Cafs2Info);
    this.cafs3Service.updateCafs3(this.courseInformationObj.Cafs3Info);
    this.cafs6Service.updateCafs6(this.courseInformationObj.Cafs6Info);

    for(let index in this.courseInformationObj.courseSemesterReviewRequests) {
      this.courseInformationObj.courseSemesterReviewRequests[index].classId = this.courseInformationObj.classId
      if(this.reviews.some(item => item.student.studentName == this.courseInformationObj.courseSemesterReviewRequests[index].studentName) ||
          this.reviews.some(item => item.student.studentName == "No Student Found.")) {
        console.log("Student already exists")
      } else {
        this.semesterEvaluationService.addCourseSemesterReview(this.courseInformationObj.courseSemesterReviewRequests[index])
      }
    }
    swal({
      position: 'center',
      type: 'success',
      title: 'Course Assessment Form Updated',
      showConfirmButton: false,
      timer: 1500
    })
  }
}
