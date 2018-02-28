import { CafSLO } from "./cafSLO";
import { Cafs1Info } from "./cafs1";
import { Cafs2Info } from "./cafs2";
import { Cafs3Info } from "./cafs3";
import { Cafs4Info } from "./cafs4";
import { Cafs5Info } from "./cafs5";
import { Cafs6Info } from "./cafs6";
import { CurrentClassInfo } from "./currentClassInfo";
import { CourseSLOs } from "./courseSLOs";

export class CourseInformationObject {
  CurrentClassInfo: CurrentClassInfo;
  CourseSLOs: CourseSLOs;
  Cafs1Info: Cafs1Info;
  Cafs2Info: Cafs2Info;
  Cafs3Info: Cafs3Info;
  Cafs4Info: Cafs4Info;
  Cafs5Info: Cafs5Info;
  Cafs6Info: Cafs6Info;

  constructor() {
    this.CourseSLOs = new CourseSLOs(null, 0, false, false, false, false, false);
    this.Cafs1Info = new Cafs1Info(null, 0, '', '', '', '', '');
    this.Cafs2Info = new Cafs2Info(null, 0, '', '', '', '', '', '', '', '');
    this.Cafs3Info = new Cafs3Info(null, 0, '', '', '', '', '', '', '');
    this.Cafs6Info = new Cafs6Info(null, 0, '', '', '', '', '', '', '');
  };
}
