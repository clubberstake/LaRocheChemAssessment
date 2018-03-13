import { TestBed, inject, async } from "@angular/core/testing";
import { CAFS1InformationService } from "./cafs1-service.service";
import { Cafs1Info } from "../course-assessment-worksheet/cafs1";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";

fdescribe("Cafs1ServiceService", () => {
  let service: CAFS1InformationService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CAFS1InformationService]
    });

    service = TestBed.get(CAFS1InformationService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it("should return expected heroes (HttpClient called once)", () => {
    const dummyPosts: Cafs1Info[] = [
      { classId: 1, id: 1 },
      { classId: 2, id: 2 }
    ];

    service.getCAFS1Info().subscribe(posts => {
      expect(posts.length).toBe(2);
      expect(posts).toEqual(dummyPosts);
    });

    const request = httpMock.expectOne("${this.API_URL}/cafs1");
    expect(request.request.method).toBe("GET");
    request.flush(dummyPosts);
  });
});
