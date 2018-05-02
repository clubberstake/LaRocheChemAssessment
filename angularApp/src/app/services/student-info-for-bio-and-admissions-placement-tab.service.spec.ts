import { TestBed, inject } from '@angular/core/testing';

import { StudentInfoForBioAndAdmissionsPlacementTabService } from './student-info-for-bio-and-admissions-placement-tab.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { StudentInfoForBioAndAdmissionsPlacementTabResponse } from '../individual-learning-record/studentInfoForBioAndAdmissionsPlacementTabResponse';
import { FileStorage } from './file-storage';

fdescribe('When creating the studentInfo service ', () => {
let service: StudentInfoForBioAndAdmissionsPlacementTabService; // Initializing my service
let httpMock: HttpTestingController;  // Initializing my mock http
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],  // Importing the testing module
      providers: [StudentInfoForBioAndAdmissionsPlacementTabService] // Importing the Service
    });
    service = TestBed.get(StudentInfoForBioAndAdmissionsPlacementTabService);  // Instantiating the service and http mock
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Verifying the http mock here
  })

  it('should return a proper student Information ', inject([StudentInfoForBioAndAdmissionsPlacementTabService], (service: StudentInfoForBioAndAdmissionsPlacementTabService) => {
    const dummyStudentInfos: StudentInfoForBioAndAdmissionsPlacementTabResponse[]  =
    [
      {
       id: 1,
       file: new FileStorage(0, "", "", ""),
       studentName: "",
       studentMajor: "",
       studentYear: "",
       studentSemester: "",
       studentMathGrade:"",
       studentAthletics: "",
       studentHousingStatus: "",
       studentHonors: "",
       internationalStudent: "",
       time: "",
       author: ""
      }
    ];

    const dummyStudentInfo: StudentInfoForBioAndAdmissionsPlacementTabResponse =
    {
      id: 1,
      file: new FileStorage(0, "", "", ""),
      studentName: "",
      studentMajor: "",
      studentYear: "",
      studentSemester: "",
      studentMathGrade:"",
      studentAthletics: "",
      studentHousingStatus: "",
      studentHonors: "",
      internationalStudent: "",
      time: "",
      author: ""
    }


    service.getStudentInfo().subscribe(studentInfos => {
      expect(studentInfos.length).toBeGreaterThan(0);
      expect(studentInfos).toEqual(dummyStudentInfos);
    });

    const getStudentInfo = httpMock.expectOne("http://localhost:8080/student/studentInfoForBioAndAdmissionsPlacementTab");
    expect(getStudentInfo.request.method).toBe("GET");
    getStudentInfo.flush(dummyStudentInfos);

  }));
});
