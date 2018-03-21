import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { CourseAssessmentWorksheetComponent } from "./course-assessment-worksheet/course-assessment-worksheet.component";
import { TabsComponent } from "./tabs/tabs.component";
import { TabComponent } from "./tab/tab.component";
import { IndividualLearningRecordComponent } from "./individual-learning-record/individual-learning-record.component";
import { StudentPaneComponent } from "./individual-learning-record/student-pane/student-pane.component";
import { CourseAssessmentCourseInformationComponent } from "./course-assessment-worksheet/course-assessment-course-information/course-assessment-course-information.component";
import { CourseAssessmentCourseStudentLearningOutcomesComponent } from "./course-assessment-worksheet/course-assessment-course-student-learning-outcomes/course-assessment-course-student-learning-outcomes.component";
import { NotesInfoForMiscNotesTabService } from "./services/notes-info-for-misc-notes-tab.service";
import { StudentInfoForBioAndAdmissionsPlacementTabService } from "./services/student-info-for-bio-and-admissions-placement-tab.service";
import { CourseInformationService } from "./services/course-information-service.service";
import { CourseAssessmentNewCourseComponent } from "./admin/course-assessment-new-course/course-assessment-new-course.component";
import { ClassInformationService } from "./services/class-service.service";
import { InstructorInformationService } from "./services/instructor-service.service";
import { CurrentClassInformationService } from "./services/current-class-service";
import { MiscNotesComponent } from "./individual-learning-record/misc-notes/misc-notes.component";
import { CourseSLOsInformationService } from "./services/course-slo-service.service";
import { ComponentCafs4Component } from "./course-assessment-worksheet/component-cafs4/component-cafs4.component";
import { ComponentCafs5Component } from "./course-assessment-worksheet/component-cafs5/component-cafs5.component";
import { ComponentCafs2Component } from "./course-assessment-worksheet/component-cafs2/component-cafs2.component";
import { ComponentCafs6Component } from "./course-assessment-worksheet/component-cafs6/component-cafs6.component";
import { ComponentCafs1Component } from "./course-assessment-worksheet/component-cafs1/component-cafs1.component";
import { ComponentCafs3Component } from "./course-assessment-worksheet/component-cafs3/component-cafs3.component";
import { CAFS1InformationService } from "./services/cafs1-service.service";
import { AdminComponent } from "./admin/admin.component";
import { CAFS2InformationService } from "./services/cafs2-service.service";
import { CAFS3InformationService } from "./services/cafs3-service.service";
import { CAFS6InformationService } from "./services/cafs6-service.service";
import { SemesterEvaluationComponent } from './individual-learning-record/semester-evaluation/semester-evaluation.component';
import { SemesterEvaluationService } from './services/semester-evaluation.service';
import { CourseSemesterEvaluationComponent } from './course-assessment-worksheet/course-semester-evaluation/course-semester-evaluation.component';
import { LoginComponent } from './login/login.component'
import { UserService } from "./services/user-service.service";
import { CourseSemesterEvaluationService } from "./services/course-semester-evaluation.service";
import { ClassRosterService } from "./services/class-roster.service";
import { FileStorageService } from "./services/file-storage.service";

@NgModule({
  declarations: [
    AppComponent,
    CourseAssessmentWorksheetComponent,
    TabsComponent,
    TabComponent,
    IndividualLearningRecordComponent,
    StudentPaneComponent,
    CourseAssessmentCourseInformationComponent,
    CourseAssessmentCourseStudentLearningOutcomesComponent,
    CourseAssessmentNewCourseComponent,

    MiscNotesComponent,
    ComponentCafs1Component,
    ComponentCafs2Component,
    ComponentCafs3Component,
    ComponentCafs4Component,
    ComponentCafs5Component,
    ComponentCafs6Component,
    AdminComponent,
    SemesterEvaluationComponent,
    CourseSemesterEvaluationComponent,
    LoginComponent
  ],
  imports: [BrowserModule, HttpClientModule, HttpModule, FormsModule],
  providers: [
    CourseInformationService,
    NotesInfoForMiscNotesTabService,
    StudentInfoForBioAndAdmissionsPlacementTabService,
    HttpClientModule,
    ClassInformationService,
    InstructorInformationService,
    CurrentClassInformationService,
    CourseSLOsInformationService,
    CAFS1InformationService,
    CAFS2InformationService,
    CAFS3InformationService,
    CAFS6InformationService,
    SemesterEvaluationService,
    UserService,
    CourseSemesterEvaluationService,
    ClassRosterService,
    FileStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
