import { TestBed, inject } from '@angular/core/testing';
import { UserService } from './user-service.service';
import { HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import { UserInfo } from '../login/userInfo';

fdescribe("When getting User info...", () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });

    service = TestBed.get(UserService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it("should return two section 1 blocks (HttpClient called once)", () => {
    const dummyPosts: UserInfo[] = [
      {
        id: 1,
        username: "",
        password: "",
        permissions: "",
      }
    ];
    const dummyNewUser: UserInfo[] = [
      {
        id: 1,
        username: "",
        password: "",
        permissions: "",
      }
    ];

    service.getUserInfo().subscribe(posts => {
      expect(posts.length).toBe(1);
      expect(posts).toEqual(dummyPosts);
    });

    const request = httpMock.expectOne(service.API_URL + "/userInfo");
    expect(request.request.method).toBe("GET");
    request.flush(dummyPosts);

     service.addNewUser(dummyNewUser);
     const addNewUser = httpMock.expectOne(service.API_URL + "/addUser");
     expect(addNewUser.request.method).toBe("POST");

  });
});

