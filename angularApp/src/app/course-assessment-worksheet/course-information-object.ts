import { Cafs1Info } from "./cafs1";
import { CafSLO } from "./cafSLO";
import { Cafs2Info } from "./cafs2";
import { CurrentClassInfo } from "./currentClassInfo";

export class CourseInformationObject {
  CurrentClassInfo: CurrentClassInfo;
  CafSLO: CafSLO;
  Cafs1Info: Cafs1Info;
  Cafs2Info: Cafs2Info;


  constructor() {
    this.CafSLO = new CafSLO(false, false, false, false, false);
  };
}
