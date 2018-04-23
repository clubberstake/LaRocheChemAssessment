import { TestBed, inject, async } from '@angular/core/testing';
import { InstructorInformationService } from './instructor-service.service';
import { InstructorInfo } from '../course-assessment-worksheet/instructorInfo';
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";

fdescribe('InstructorInformationServiceService', () => {
  let service: InstructorInformationService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [InstructorInformationService]
    });

    service = TestBed.get(InstructorInformationService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should return expected instructors', () => {
    const dummyPosts: InstructorInfo[] = [
      {
       id: 1,
       name: ""
      },
      {
       id: 2,
       name: ""
      }
    ];

    const dummyInstructor: InstructorInfo[] = [
      {
        id: 3,
        name: ""
      }
    ];

    service.getInstructorInfo().subscribe(posts => {
      expect(posts.length).toBe(2);
      expect(posts).toEqual(dummyPosts);
    });

    const request = httpMock.expectOne(service.API_URL + "/instructors");
    expect(request.request.method).toBe("GET");
    request.flush(dummyPosts);

    service.addInstructor(dummyInstructor);
    const addInstructor = httpMock.expectOne(service.API_URL + "/addInstructor");
    expect(addInstructor.request.method).toBe("POST");

  });
});
