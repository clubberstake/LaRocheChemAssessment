import { Component, OnInit, Input } from "@angular/core";
import { CourseInfoForAssessment } from "../courseInfoForAssessment";
import { CourseInformationService } from "../../services/course-information-service.service";
import { CourseInformationObject } from "../course-information-object";
import { NotesInfoForMiscNotesTab } from "../../individual-learning-record/notesInfoForMiscNotesTab";
import { NotesInfoForMiscNotesTabService } from "../../services/notes-info-for-misc-notes-tab.service";
import { ClassInfo } from "../../course-assessment-worksheet/classInfo";
import { ClassInformationService } from "../../services/class-service.service";
import { CurrentClassInfo } from "../../course-assessment-worksheet/currentClassInfo";
import { CurrentClassInformationService } from "../../services/current-class-service";
import { CourseSLOsInformationService } from "../../services/course-slo-service.service";
import { CourseSLOs } from "../../course-assessment-worksheet/courseSLOs";
import { Cafs1Info } from "../cafs1";
import { CAFS1InformationService } from "../../services/cafs1-service.service";
import { Cafs2Info } from "../cafs2";
import { CAFS2InformationService } from "../../services/cafs2-service.service";
import { Cafs3Info } from "../cafs3";
import { CAFS3InformationService } from "../../services/cafs3-service.service";
import { Cafs6Info } from "../cafs6";
import { CAFS6InformationService } from "../../services/cafs6-service.service";
import { CourseSemesterEvaluationService } from "../../services/course-semester-evaluation.service";
import { SemesterReviewResponse } from "../../individual-learning-record/SemesterReviewResponse";
import { SemesterEvaluationService } from "../../services/semester-evaluation.service";
import { SemesterReviewRequest } from "../../individual-learning-record/SemesterReviewRequest";

@Component({
  selector: "app-course-assessment-course-information",
  templateUrl: "./course-assessment-course-information.component.html",
  styleUrls: ["./course-assessment-course-information.component.css"]
})
export class CourseAssessmentCourseInformationComponent implements OnInit {
  @Input() courseInformationObjInput: CourseInformationObject;
  courseAndSections: CurrentClassInfo[] = [];
  courseSlos: CourseSLOs[] = [];
  cafs1: Cafs1Info[] = [];
  cafs2: Cafs2Info[] = [];
  cafs3: Cafs3Info[] = [];
  cafs6: Cafs6Info[] = [];
  semesterReviews: SemesterReviewResponse[] = [];
  syllabusPath: string = "../../../../../restfulApi/src/main/java/laroche/chem/assessment/syllabus";
  syllabusFound: boolean = false;

  setcourseAndSection(courseNumAndSection: any): void {
    this.courseInformationObjInput.addCourseSemesterReviewFieldVisible = false;

    this.courseInformationObjInput.CurrentClassInfo = this.courseAndSections.find(value => value.classId == courseNumAndSection);
    console.log(this.courseInformationObjInput.CourseSLOs);
    if (this.courseInformationObjInput.CurrentClassInfo.syllabus != null)
    {
      this.syllabusFound = true;
    }
    /**
      Lines 50 - 55: Get course semester review information by class ID
      In addition, set the classId for the course semester review request that will be sent back to the database
        upon adding a new course semster review.
    */
    this.semesterEvaluationService.getSemesterReviewsByClassId(courseNumAndSection).subscribe((semesterReviews: SemesterReviewResponse[]) => {
      this.semesterReviews = semesterReviews;
      this.courseInformationObjInput.semesterReviewResponses = this.semesterReviews.reverse();
      console.log("Semester Review Responses Response: " + this.courseInformationObjInput.semesterReviewResponses[0].classes.id)
    });
    this.courseInformationObjInput.courseSemesterReviewRequest.classId = courseNumAndSection;

    this.courseInformationObjInput.CourseSLOs = this.courseSlos.find(
      value => value.classId == courseNumAndSection
    );
    console.log("Value: ", courseNumAndSection);
    if (this.courseInformationObjInput.CourseSLOs == null) {
      this.courseInformationObjInput.CourseSLOs = new CourseSLOs(
        null,
        Number(courseNumAndSection),
        false,
        false,
        false,
        false,
        false
      );
    }
    console.log(this.courseInformationObjInput.CourseSLOs == null);
    console.log("Dropdownslos", this.courseInformationObjInput.CourseSLOs);
    this.courseInformationObjInput.Cafs1Info = this.cafs1.find(
      value => value.classId == courseNumAndSection
    );
    if (this.courseInformationObjInput.Cafs1Info == null) {
      this.courseInformationObjInput.Cafs1Info = new Cafs1Info(
        null,
        Number(courseNumAndSection),
        "",
        "",
        "",
        "",
        ""
      );
    }
    console.log("this section 1", this.courseInformationObjInput.Cafs1Info);
    this.courseInformationObjInput.Cafs2Info = this.cafs2.find(
      value => value.classId == courseNumAndSection
    );
    console.log("this section 2: ", courseNumAndSection);
    if (this.courseInformationObjInput.Cafs2Info == null) {
      this.courseInformationObjInput.Cafs2Info = new Cafs2Info(
        null,
        Number(courseNumAndSection),
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      );
    }
    this.courseInformationObjInput.Cafs3Info = this.cafs3.find(
      value => value.classId == courseNumAndSection
    );
    if (this.courseInformationObjInput.Cafs3Info == null) {
      this.courseInformationObjInput.Cafs3Info = new Cafs3Info(
        null,
        Number(courseNumAndSection),
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      );
    }
    console.log("this section 3", this.courseInformationObjInput.Cafs3Info);
    this.courseInformationObjInput.Cafs6Info = this.cafs6.find(
      value => value.classId == courseNumAndSection
    );
    if (this.courseInformationObjInput.Cafs6Info == null) {
      this.courseInformationObjInput.Cafs6Info = new Cafs6Info(
        null,
        Number(courseNumAndSection),
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      );
    }
    console.log("this section 6", this.courseInformationObjInput.Cafs6Info);
  }

  constructor(
    private courseInfoService: CourseInformationService,
    private notesService: NotesInfoForMiscNotesTabService,
    private classInformationService: ClassInformationService,
    private currentClassInformationService: CurrentClassInformationService,
    private courseSLOsInformationService: CourseSLOsInformationService,
    private cafs1InformationService: CAFS1InformationService,
    private cafs2InformationService: CAFS2InformationService,
    private cafs3InformationService: CAFS3InformationService,
    private cafs6InformationService: CAFS6InformationService,
    private CourseSemesterEvaluationService: CourseSemesterEvaluationService,
    private semesterEvaluationService: SemesterEvaluationService
  ) {}

  ngOnInit() {
    this.courseInformationObjInput.CurrentClassInfo = new CurrentClassInfo(
      0,
      0,
      "",
      null,
      "",
      "",
      "",
      ""
    ); //console log is nasty without this.


    // this.semesterEvaluationService.getSemesterEvaluations().subscribe((reviews: SemesterReviewResponse[]) => {
    //   this.semesterReviews = reviews;
    //   console.log("LOOK HERE FOR SEMESTER REVIEWS: " + this.semesterReviews[0].classes.id);
    // });
    this.currentClassInformationService
      .getCurrentClassInfo()
      .subscribe((courses: CurrentClassInfo[]) => {
        this.courseAndSections = courses.sort((a: CurrentClassInfo, b: CurrentClassInfo) => {
          if (a.courseID < b.courseID) {
            return -1;
          }
          else if (a.courseID > b.courseID) {
            return 1;
          }
          else {
            return 0;
          }
        });
        console.log(this.courseAndSections);
      });
    this.courseSLOsInformationService
      .getCourseSLOsInfo()
      .subscribe((slos: CourseSLOs[]) => {
        this.courseSlos = slos;
        console.log("courseSLOs", this.courseSlos);
      });
    this.cafs1InformationService
      .getCAFS1Info()
      .subscribe((section1: Cafs1Info[]) => {
        this.cafs1 = section1;
        console.log("section1", this.cafs1);
      });
    this.cafs2InformationService
      .getCAFS2Info()
      .subscribe((section2: Cafs2Info[]) => {
        this.cafs2 = section2;
        console.log("section2", this.cafs2);
      });
    this.cafs3InformationService
      .getCAFS3Info()
      .subscribe((section3: Cafs3Info[]) => {
        this.cafs3 = section3;
        console.log("section3", this.cafs3);
      });
    this.cafs6InformationService
      .getCourseInfoForAssessmentWorksheetReview()
      .subscribe((section6: Cafs6Info[]) => {
        this.cafs6 = section6;
        console.log("section6", this.cafs6);
      });
  }

  downloadSyllabus() {
    var fileContents = String(this.courseInformationObjInput.CurrentClassInfo.syllabus.fileContent);
    var filename = this.courseInformationObjInput.CurrentClassInfo.semester + "/" + this.courseInformationObjInput.CurrentClassInfo.courseID + "/" + this.courseInformationObjInput.CurrentClassInfo.section + "syllabus.txt";
    var filetype = "text/plain";

    var a = document.createElement("a");
    var dataURI = "data:" + filetype +
    ";base64," + btoa(fileContents);
    a.href = dataURI;
    a['download'] = filename;
    var e = document.createEvent("MouseEvents");
    // Use of deprecated function to satisfy TypeScript.
    e.initMouseEvent("click", true, false,
    document.defaultView, 0, 0, 0, 0, 0,
    false, false, false, false, 0, null);
    a.dispatchEvent(e);
  }

  setSyllabus() {
    var fileToLoad = (<HTMLInputElement>document.getElementById("syllabus")).files[0];
    console.log("FILE to Load: ", fileToLoad);
    var fileReader = new FileReader();
    var ready = false;
    var me = this;
    fileReader.onload = function(e) {
      let target: any = e.target;
      var contents = target.result;
      alert(contents);
      var newSyllabus = [me.courseInformationObjInput.CurrentClassInfo.syllabus, contents]
      console.log(newSyllabus);
      console.log(fileToLoad.name);
      me.classInformationService.saveSyllabus(newSyllabus);
    }
    fileReader.readAsText(fileToLoad);
  }
}
