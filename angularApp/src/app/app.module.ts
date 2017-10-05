import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CourseAssessmentWorksheetComponent } from './course-assessment-worksheet/course-assessment-worksheet.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tab/tab.component';
import { IndividualLearningRecordComponent } from './individual-learning-record/individual-learning-record.component';
import { StudentPaneComponent } from './student-pane/student-pane.component';
import { RecordPaneComponent } from './record-pane/record-pane.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseAssessmentWorksheetComponent,
    TabsComponent,
    TabComponent,
    IndividualLearningRecordComponent,
    StudentPaneComponent,
    RecordPaneComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
