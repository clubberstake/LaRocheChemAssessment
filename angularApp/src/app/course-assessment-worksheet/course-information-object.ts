import { CurrentClassInfo } from "./currentClassInfo";
import { CafSLO } from "./cafSLO";
import { Cafs1Info } from "./cafs1";
import { Cafs2Info } from "./cafs2";
import { Cafs3Info } from "./cafs3";
import { Cafs4Info } from "./cafs4";
import { Cafs5Info } from "./cafs5";
import { Cafs6Info } from "./cafs6";

export class CourseInformationObject {
  CurrentClassInfo: CurrentClassInfo;
  CafSLO: CafSLO;
  Cafs1Info: Cafs1Info;
  Cafs2Info: Cafs2Info;
  Cafs3Info: Cafs3Info;
  Cafs4Info: Cafs4Info;
  Cafs5Info: Cafs5Info;
  Cafs6Info: Cafs6Info;

  constructor() {
    this.CafSLO = new CafSLO(false, false, false, false, false);
  };
}
