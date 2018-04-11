import { FileStorage } from "../services/file-storage";

export class Student {
  constructor(
    public id: number,
	  public studentName: string,
	  public studentMajor: string,
	  public studentYear: string,
	  public studentSemester: string,
	  public studentMathGrade: string,
	  public studentAthletics: string,
	  public studentHousingStatus: string,
	  public studentHonors: string,
	  public internationalStudent: string,
	  public fileId: number,
	  public time: string
  ) {}
}
