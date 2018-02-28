import { Component, OnInit, Input } from '@angular/core';
import { CourseInfoForAssessment } from '../../courseInfoForAssessment';
import { CourseInformationService } from '../../../services/course-information-service.service';
import { CourseInformationObject } from '../../course-information-object';
import { NotesInfoForMiscNotesTab } from '../../../individual-learning-record/notesInfoForMiscNotesTab';
import { NotesInfoForMiscNotesTabService } from '../../../services/notes-info-for-misc-notes-tab.service';
import { ClassInfo } from '../../../course-assessment-worksheet/classInfo'
import { ClassInformationService } from '../../../services/class-service.service'
import { CurrentClassInfo } from '../../../course-assessment-worksheet/currentClassInfo'
import { CurrentClassInformationService } from '../../../services/current-class-service'
import { CourseSLOsInformationService } from '../../../services/course-slo-service.service'
import { CourseSLOs } from '../../../course-assessment-worksheet/courseSLOs'
import { Cafs1Info } from '../../cafs1';
import { CAFS1InformationService } from '../../../services/cafs1-service.service';
import { Cafs4Info } from '../../cafs4';
import { CAFS4InformationService } from '../../../services/cafs4-service.service';
import { CAFS2InformationService } from '../../../services/cafs2-service.service';
import { Cafs2Info } from '../../cafs2';



@Component({
  selector: 'app-course-assessment-course-information',
  templateUrl: './course-assessment-course-information.component.html',
  styleUrls: ['./course-assessment-course-information.component.css']
})
export class CourseAssessmentCourseInformationComponent implements OnInit {
  @Input() courseInformationObjInput: CourseInformationObject;
  courseAndSections: CurrentClassInfo[] = [];
  courseSlos: CourseSLOs[] = [];
  cafs1: Cafs1Info[] = [];
  cafs4: Cafs4Info[] = [];
  cafs2: Cafs2Info[] = [];


  setcourseAndSection(courseNumAndSection: any): void {
    this.courseInformationObjInput.CurrentClassInfo = this.courseAndSections.find(
      value => value.classId == courseNumAndSection
    );
    console.log(this.courseInformationObjInput.CourseSLOs);
    this.courseInformationObjInput.CourseSLOs = this.courseSlos.find(
      value => value.classId == courseNumAndSection
    );
    console.log("Value: ", courseNumAndSection)
    if(this.courseInformationObjInput.CourseSLOs == null)
    {
      this.courseInformationObjInput.CourseSLOs = new CourseSLOs(null, Number(courseNumAndSection), false, false, false, false, false);
    }
    console.log(this.courseInformationObjInput.CourseSLOs == null);
    console.log("Dropdownslos", this.courseInformationObjInput.CourseSLOs);
    this.courseInformationObjInput.Cafs1Info = this.cafs1.find(
      value => value.classId == courseNumAndSection
    );
    if(this.courseInformationObjInput.Cafs1Info == null)
    {
      this.courseInformationObjInput.Cafs1Info = new Cafs1Info(null, Number(courseNumAndSection), '', '', '', '', '');
    }
    console.log("this section 1", this.courseInformationObjInput.Cafs1Info);
    this.courseInformationObjInput.Cafs4Info = this.cafs4.find(
      value => value.classId == courseNumAndSection
    );
    console.log("section 4: ", courseNumAndSection)
    if(this.courseInformationObjInput.Cafs4Info == null)
    {
      this.courseInformationObjInput.Cafs4Info = new Cafs4Info(null, Number(courseNumAndSection), 0, 0, '', '', '');
    }
    this.courseInformationObjInput.Cafs2Info = this.cafs2.find(
      value => value.classId == courseNumAndSection
    );
    console.log("this section 2: ", courseNumAndSection)
    if(this.courseInformationObjInput.Cafs2Info == null)
    {
      this.courseInformationObjInput.Cafs2Info = new Cafs2Info(null, Number(courseNumAndSection), '', '', '', '', '', '', '', '');
    }
  }

  constructor(private courseInfoService: CourseInformationService, private notesService: NotesInfoForMiscNotesTabService, private classInformationService: ClassInformationService, private currentClassInformationService: CurrentClassInformationService, private courseSLOsInformationService: CourseSLOsInformationService, private cafs1InformationService: CAFS1InformationService, private cafs4InformationService: CAFS4InformationService,  private cafs2InformationService: CAFS2InformationService) {
  }

  ngOnInit() {
    this.courseInformationObjInput.CurrentClassInfo = new CurrentClassInfo(0, 0, '', null, '', '', ''); //console log is nasty without this.
    this.currentClassInformationService.getCurrentClassInfo().subscribe((courses: CurrentClassInfo[]) => {
      this.courseAndSections = courses;
      console.log(this.courseAndSections);
    });
    this.courseSLOsInformationService.getCourseSLOsInfo().subscribe((slos: CourseSLOs[]) => {
      this.courseSlos = slos;
      console.log("courseSLOs", this.courseSlos);
    });
    this.cafs1InformationService.getCAFS1Info().subscribe((section1: Cafs1Info[]) => {
      this.cafs1 = section1;
      console.log("section1", this.cafs1);
    });
    this.cafs4InformationService.getCAFS4Info().subscribe((section4: Cafs4Info[]) => {
      this.cafs4 = section4;
      console.log("section4", this.cafs4);
    });
    this.cafs2InformationService.getCAFS2Info().subscribe((section2: Cafs2Info[]) => {
      this.cafs2 = section2;
      console.log("section2", this.cafs2);
    });
  }
}

