interface StudentInterface {
  id: number;
}

export class studentInfoForBioAndAdmissionsPlacementTabRequest implements StudentInterface {
  public id: number;
  constructor(public fileId: number, public studentName: string, public studentMajor: string, public studentYear: string, public studentSemester: string, public studentMathGrade: string, public studentAthletics: string, public studentHousingStatus: string, public studentHonors: string, public internationalStudent: string, public time: string){}
}
