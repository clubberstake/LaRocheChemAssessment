import { Component, OnInit, SecurityContext, Input } from "@angular/core";
import { NotesInfoForMiscNotesTab } from "./notesInfoForMiscNotesTab";
import { NotesInfoForMiscNotesTabService } from "../services/notes-info-for-misc-notes-tab.service";
import { StudentInfoForBioAndAdmissionsPlacementTabResponse } from "./studentInfoForBioAndAdmissionsPlacementTabResponse";
import { StudentInfoForBioAndAdmissionsPlacementTabService } from "../services/student-info-for-bio-and-admissions-placement-tab.service";
import { Response } from "@angular/http/src/static_response";
import { IndividualLearningRecordObject } from "./individual-learning-record-object";
import { SemesterEvaluationService } from "../services/semester-evaluation.service";
import { SemesterReviewResponse } from "./SemesterReviewResponse";
import { SemesterReviewRequest } from "./SemesterReviewRequest";
import { CourseInformationObject } from "../course-assessment-worksheet/course-information-object";
import { CourseInformationService } from "../services/course-information-service.service";
import { CourseInfoForAssessment } from "../course-assessment-worksheet/courseInfoForAssessment";
import { FileStorage } from "../services/file-storage";
import { userObject } from "../userObject";

@Component({
  selector: "app-individual-learning-record",
  templateUrl: "./individual-learning-record.component.html",
  styleUrls: ["./individual-learning-record.component.css"]
})
export class IndividualLearningRecordComponent implements OnInit {
  // ILR Object at the root level which will now hold a reference to all ILR information
  ilrStudentObject: IndividualLearningRecordObject = new IndividualLearningRecordObject();
  courseInformationObject: CourseInformationObject = new CourseInformationObject();
  @Input() userObject: userObject;

  courseAndSection = new CourseInfoForAssessment(0, "", "");
  courseInfoForAssessment: CourseInfoForAssessment[] = [];

  constructor(
    private studentsService: StudentInfoForBioAndAdmissionsPlacementTabService,
    private notesService: NotesInfoForMiscNotesTabService,
    private semesterEvaluationService: SemesterEvaluationService,
    private semesterResponse: SemesterEvaluationService,
    private courseInfoService: CourseInformationService
  ) {}

  ngOnInit() {
    // auto-init to keep console clean
    this.ilrStudentObject.student = new StudentInfoForBioAndAdmissionsPlacementTabResponse(new FileStorage(0,'','', ''),'','','','','','', '','','','','',);
  }

  onSearchById(studentId: any) {
    this.clearSemesterReviewData();

    this.studentsService
      .getStudentInfoById(studentId)
      .subscribe(
        (student: StudentInfoForBioAndAdmissionsPlacementTabResponse) => {
          if (!student.file) {
            student.file = new FileStorage(0, "", "", "");
          }
          this.ilrStudentObject.student = student;
          console.log("Full Student Object ->", this.ilrStudentObject.student);

          this.courseInfoService
            .getCourseInfo()
            .subscribe((courses: CourseInfoForAssessment[]) => {
              this.courseInfoForAssessment = courses;
              for (let i in courses) {
                this.ilrStudentObject.courseMap.set(
                  courses[i].courseId,
                  courses[i].courseName
                );
              }
              console.log("LOOK HERE FOR ILR OBJECT COURSE MAP VALUE");
              console.log(this.ilrStudentObject.courseMap.get(2));

              for (let index in this.ilrStudentObject.semesterReviewResponses) {
                if (
                  this.ilrStudentObject.courseMap.has(
                    this.ilrStudentObject.semesterReviewResponses[index].classes
                      .courseId
                  )
                ) {
                  this.ilrStudentObject.courseNames.push(
                    this.ilrStudentObject.courseMap.get(
                      this.ilrStudentObject.semesterReviewResponses[index]
                        .classes.courseId
                    )
                  );
                }
              }
            });
        }
      );

    this.notesService
      .getMiscNoteInfoByStudentId(studentId)
      .subscribe((miscNotes: NotesInfoForMiscNotesTab[]) => {
        this.ilrStudentObject.miscNotes = miscNotes;
      });

    this.semesterEvaluationService
      .getSemesterEvaluationsByStudentId(studentId)
      .subscribe((semesterReviews: SemesterReviewRequest[]) => {
        this.ilrStudentObject.semesterReviewRequests = semesterReviews;
      });

    this.semesterEvaluationService
      .getSemesterEvaluationResponsesByStudentId(studentId)
      .subscribe((semesterResponses: SemesterReviewResponse[]) => {
        this.ilrStudentObject.semesterReviewResponses = semesterResponses;
      });

    this.ilrStudentObject.studentId = studentId;
  }

  clearSemesterReviewData(){
    this.ilrStudentObject.courseNames = [];
    this.ilrStudentObject.semesterReviewRequest.mliCoursePace=false;
    this.ilrStudentObject.semesterReviewRequest.mliLackOfMindset=false;
    this.ilrStudentObject.semesterReviewRequest.mliLackOfCuriosity=false;
    this.ilrStudentObject.semesterReviewRequest.mliLackOfEffortFocus=false;
    this.ilrStudentObject.semesterReviewRequest.mliPoorTimeManagement=false;
    this.ilrStudentObject.semesterReviewRequest.mliHealthIssues=false;
    this.ilrStudentObject.semesterReviewRequest.mliComplacence=false;
    this.ilrStudentObject.semesterReviewRequest.mliEmployementHours=false;
    this.ilrStudentObject.semesterReviewRequest.mliOther=false;
    this.ilrStudentObject.semesterReviewRequest.mliOtherIssues="";
    this.ilrStudentObject.semesterReviewRequest.esliCoursePace=false;
    this.ilrStudentObject.semesterReviewRequest.esliLackOfMindset=false;
    this.ilrStudentObject.semesterReviewRequest.esliLackOfCuriosity=false;
    this.ilrStudentObject.semesterReviewRequest.esliLackOfEffortFocus=false;
    this.ilrStudentObject.semesterReviewRequest.esliPoorTimeManagement=false;
    this.ilrStudentObject.semesterReviewRequest.esliHealthIssues=false;
    this.ilrStudentObject.semesterReviewRequest.esliComplacence=false;
    this.ilrStudentObject.semesterReviewRequest.esliEmployementHours=false;
    this.ilrStudentObject.semesterReviewRequest.esliOther=false;
    this.ilrStudentObject.semesterReviewRequest.esliOtherIssues="";
    this.ilrStudentObject.semesterReviewRequest.midSemesterExtentInstructor="";
    this.ilrStudentObject.semesterReviewRequest.endSemesterExtentInstructor="";
    this.ilrStudentObject.semesterReviewRequest.midSemesterInstructorRecommendations="";
    this.ilrStudentObject.semesterReviewRequest.endSemesterInstructorRecommendations="";
  }
}
