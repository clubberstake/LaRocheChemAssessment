import { Cafs1Info } from "./cafs1";
import { CafSLO } from "./cafSLO";
import { Cafs2Info } from "./cafs2";
import { CurrentClassInfo } from "./currentClassInfo";
import { CourseSLOs } from "./courseSLOs";

export class CourseInformationObject {
  CurrentClassInfo: CurrentClassInfo;
  CourseSLOs: CourseSLOs;
  Cafs1Info: Cafs1Info;
  Cafs2Info: Cafs2Info;


  constructor() {
    this.CourseSLOs = new CourseSLOs(null, 0, false, false, false, false, false);
  };
}
