import { Component, OnInit } from '@angular/core';
import { CourseInformationObject } from "../course-assessment-worksheet/course-information-object";
import { ClassInfo } from "../course-assessment-worksheet/classInfo";
import { CourseSLOsInformationService } from "../services/course-slo-service.service";
import { CAFS1InformationService } from "../services/cafs1-service.service";
import { CAFS2InformationService } from "../services/cafs2-service.service";
import { CAFS3InformationService } from "../services/cafs3-service.service";
import { CAFS6InformationService } from "../services/cafs6-service.service";
import { CourseSemesterEvaluationService } from "../services/course-semester-evaluation.service";
import { SemesterEvaluationService } from "../services/semester-evaluation.service";

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  courseInformationObj: CourseInformationObject;
  constructor(
    public sloService: CourseSLOsInformationService,
    public cafs1Service: CAFS1InformationService,
    public cafs2Service: CAFS2InformationService,
    public cafs3Service: CAFS3InformationService,
    public cafs6Service: CAFS6InformationService,
    public CourseSemesterEvaluationService: CourseSemesterEvaluationService,
    private semesterEvaluationService: SemesterEvaluationService
  ) {
    this.courseInformationObj = new CourseInformationObject();
  }

  ngOnInit() {
  }

}
