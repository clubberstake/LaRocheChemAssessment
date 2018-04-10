import { Component, OnInit } from "@angular/core";
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

@Component({
  selector: "app-individual-learning-record",
  templateUrl: "./individual-learning-record.component.html",
  styleUrls: ["./individual-learning-record.component.css"]
})
export class IndividualLearningRecordComponent implements OnInit {
  // ILR Object at the root level which will now hold a reference to student and student's miscNotes.
  ilrStudentObject: IndividualLearningRecordObject = new IndividualLearningRecordObject();
  courseInformationObject: CourseInformationObject = new CourseInformationObject();

  courseAndSection = new CourseInfoForAssessment(0, "", "", "", "");
  courseInfoForAssessment: CourseInfoForAssessment[] = [];
  courseMap = new Map<any,String>();

  constructor(private studentsService: StudentInfoForBioAndAdmissionsPlacementTabService, private notesService: NotesInfoForMiscNotesTabService,
    private semesterEvaluationService: SemesterEvaluationService, private semesterResponse: SemesterEvaluationService,
     private courseInfoService: CourseInformationService) {}

  ngOnInit() {
  }

  onSearchById(studentId: any) {
    this.studentsService
      .getStudentInfoById(studentId)
      .subscribe(
        (student: StudentInfoForBioAndAdmissionsPlacementTabResponse) => {
          this.ilrStudentObject.student = student;
          console.log(this.ilrStudentObject.student);
        }
      );

    this.notesService
      .getMiscNoteInfoByStudentId(studentId)
      .subscribe((miscNotes: NotesInfoForMiscNotesTab[]) => {
        this.ilrStudentObject.miscNotes = miscNotes;
        console.log(this.ilrStudentObject.miscNotes);
      });

    this.semesterEvaluationService
      .getSemesterEvaluationsByStudentId(studentId)
      .subscribe((semesterReviews: SemesterReviewRequest[]) => {
        this.ilrStudentObject.semesterReviewRequests = semesterReviews;
        console.log(this.ilrStudentObject.semesterReviewRequests);
      });

    this.studentsService.getStudentInfoById(studentId).subscribe((student: StudentInfoForBioAndAdmissionsPlacementTabResponse) => {
      this.ilrStudentObject.student = student;
      console.log(this.ilrStudentObject.student);
    });

    this.notesService.getMiscNoteInfoByStudentId(studentId).subscribe((miscNotes: NotesInfoForMiscNotesTab[]) => {
      this.ilrStudentObject.miscNotes = miscNotes;
      console.log(this.ilrStudentObject.miscNotes);
    });

    this.semesterEvaluationService.getSemesterEvaluationsByStudentId(studentId).subscribe((semesterReviews: SemesterReviewRequest[]) => {
      this.ilrStudentObject.semesterReviewRequests = semesterReviews;
      console.log(this.ilrStudentObject.semesterReviewRequests);
    });

    this.semesterEvaluationService.getSemesterEvaluationResponsesByStudentId(studentId).subscribe((semesterResponses: SemesterReviewResponse[])=>{
      this.ilrStudentObject.semesterReviewResponses = semesterResponses;
      console.log(this.ilrStudentObject.semesterReviewResponses);
    });
    
    this.courseInfoService.getCourseInfo().subscribe((courses: CourseInfoForAssessment[])=>{
      this.courseInfoForAssessment = courses;
      for(let i in courses){
        this.courseMap.set(courses[i].courseId,courses[i].courseName);
      }
      console.log(this.courseInfoForAssessment + "hey its me");
      console.log(this.courseMap.get(2));
      
      for(let index in this.ilrStudentObject.semesterReviewResponses){
        if(this.courseMap.has(this.ilrStudentObject.semesterReviewResponses[index].classes.courseId)){
          console.log("Hey I have this classs id and i am the map");
          this.ilrStudentObject.courseNames.push(this.courseMap.get(this.ilrStudentObject.semesterReviewResponses[index].classes.courseId));
        }
      }
      for(let index in this.ilrStudentObject.courseNames){
        console.log(this.ilrStudentObject.courseNames[index]);
        
      }
      

    });

    this.ilrStudentObject.studentId = studentId;
    console.log(this.ilrStudentObject.studentId);
  }

  onSearchByName(studentName: any) {
    console.log(studentName);
  }
}
