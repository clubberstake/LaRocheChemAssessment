package laroche.chem.assessment.restApp;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import laroche.chem.assessment.entities.Classes;
import laroche.chem.assessment.entities.SemesterReview;
import laroche.chem.assessment.entities.Student;
import laroche.chem.assessment.repositories.ClassRepository;
import laroche.chem.assessment.repositories.SemesterReviewRepository;
import laroche.chem.assessment.repositories.StudentRepository;
import laroche.chem.assessment.responseObjects.CourseSemesterReviewRequest;
import laroche.chem.assessment.responseObjects.SemesterReviewRequest;
import laroche.chem.assessment.responseObjects.SemesterReviewResponse;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/review")
public class SemesterReviewController {
	@Autowired
	private SemesterReviewRepository semesterReviewRepository;
	@Autowired
	private ClassRepository classRepository;
	@Autowired
	private StudentRepository studentRepository;

	public ArrayList<SemesterReviewResponse> getCourseInfoForAssessmentWorksheet4() {
		return getMidSemesterReview();
	}


	/**
	 * Put request to update currently placed semester review
	 * 
	 * @param request
	 *            the semester review request object to be updated/added
	 * @return response URI path
	 */
	@PutMapping("/putReview")		
	public ResponseEntity<Void> putMidSemesterReview(@RequestBody SemesterReviewRequest request) {		
		SemesterReview review = findSemeterReviewByClassAndStudent(request.getClassId(), request.getStudentId());
		if (review != null) {
			//review.setMidSemesterLearningIssues(request.getMidSemesterLearningIssues());
			//review.setEndSemesterLearningIssues(request.getEndSemesterLearningIssues());
			review.setMidSemesterExtentInstructor(request.getMidSemesterExtentInstructor());
			review.setMidSemesterExtentInstructor(request.getEndSemesterExtentInstructor());
			review.setMidSemesterInstructorRecommendations(request.getMidSemesterInstructorRecommendations());
			review.setEndSemesterInstructorRecommendations(request.getEndSemesterInstructorRecommendations());
		} else {

			Student student = studentRepository.findOne(request.getStudentId());
			Classes classes = classRepository.findOne(request.getClassId());
			review = new SemesterReview(student, classes, request.getMliCoursePace(),
					request.getMliLackOfMindset(), request.getMliLackOfInterestCuriousity(),
					request.getMliLackOfEffortFocus(), request.getMliPoorTimeManagement(), request.getMliHealthIssues(),
					request.getMliComplacence(), request.getMliEmploymentHours(), request.getMliOther(),
					request.getMliOtherIssues(), request.getEsliCoursePace(), request.getEsliPoorTimeManagement(),
					request.getEsliHealthIssues(), request.getEsliComplacence(), request.getEsliEmploymentHours(),
					request.getEsliOther(), request.getEsliotherIssues(), request.getMidSemesterExtentInstructor(),
					request.getEndSemesterExtentInstructor(), request.getMidSemesterInstructorRecommendations(),
					request.getEndSemesterInstructorRecommendations());
		}
		semesterReviewRepository.save(review);

		try {
			return ResponseEntity.created(new URI("/semesterEntry/" + review.getID())).build();
		} catch (URISyntaxException e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.CONFLICT).build();
		}
	}

	/**
	 * Post request to add a newly created course semester review
	 * 
	 * @param request
	 *            the course semester review request object to be added
	 * @return response URI path
	 */
	@PostMapping("/putCourseReview")
	public ResponseEntity<Void> putCourseSemesterReview(@RequestBody CourseSemesterReviewRequest request) {

		SemesterReview review = findSemeterReviewByClassAndStudent(request.getClassId(), request.getStudentId());
		if (review != null) {
			review.setMliCoursePace(request.getMliCoursePace());
			review.setMliLackOfMindset(request.getMliLackOfMindset());
			review.setMliLackOfInterestCuriousity(request.getMliLackOfInterestCuriousity());
			review.setMliLackOfEffortFocus(request.getMliLackOfEffortFocus());
			review.setMliPoorTimeManagement(request.getMliPoorTimeManagement());
			review.setMliHealthIssues(request.getMliHealthIssues());
			review.setMliComplacence(request.getMliComplacence());
			review.setMliEmploymentHours(request.getMliEmploymentHours());
			review.setMliOther(request.getMliOther());
			review.setMliOtherIssues(request.getMliOtherIssues());
			review.setEsliCoursePace(request.getEsliCoursePace());
			review.setEsliPoorTimeManagement(request.getEsliPoorTimeManagement());
			review.setEsliHealthIssues(request.getEsliHealthIssues());
			review.setEsliComplacence(request.getEsliComplacence());
			review.setEsliEmploymentHours(request.getEsliEmploymentHours());
			review.setEsliOther(request.getEsliOther());
			review.setEsliotherIssues(request.getEsliotherIssues());
			review.setMidSemesterExtentInstructor(request.getMidSemesterExtentInstructor());
			review.setMidSemesterExtentInstructor(request.getEndSemesterExtentInstructor());
			review.setMidSemesterInstructorRecommendations(request.getMidSemesterInstructorRecommendations());
			review.setEndSemesterInstructorRecommendations(request.getEndSemesterInstructorRecommendations());
		} else {
			Student student = studentRepository.findOne(request.getStudentId());
			Classes classes = classRepository.findOne(request.getClassId());
			review = new SemesterReview(review.getStudentID(), review.getClassesID(), review.getMliCoursePace(), review.getMliLackOfMindset(),
					review.getMliLackOfInterestCuriousity(), review.getMliLackOfEffortFocus(), review.getMliPoorTimeManagement(), 
					review.getMliHealthIssues(), review.getMliComplacence(), review.getMliEmploymentHours(), review.getMliOther(), review.getMliOtherIssues(), 
					review.getEsliCoursePace(), review.getEsliPoorTimeManagement(), review.getEsliHealthIssues(), review.getEsliComplacence(), review.getEsliEmploymentHours(), 
					review.getEsliOther(), review.getEsliotherIssues(),review.getMidSemesterExtentInstructor(),review.getEndSemesterExtentInstructor(),review.getMidSemesterInstructorRecommendations(),
					review.getEndSemesterInstructorRecommendations());
		}

		semesterReviewRepository.save(review);


		try {
			return ResponseEntity.created(new URI("/courseSemesterEntry/" + review.getID())).build();
		} catch (URISyntaxException e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.CONFLICT).build();
		}
	}

	private SemesterReview findSemeterReviewByClassAndStudent(long classId, long studentId) {
		List<SemesterReview> reviews = semesterReviewRepository.findByClassesIdAndStudentId(classId, studentId);
		if (!reviews.isEmpty()) {
			return reviews.get(0);
		}
		return null;
	}

	@GetMapping("/semesterReviews")
	private ArrayList<SemesterReviewResponse> getMidSemesterReview() {



		List<SemesterReview> reviews = semesterReviewRepository.findAll();
		List<Student> students = studentRepository.findAll();
		List<Classes> classes = classRepository.findAll();
		if (!(reviews.iterator().hasNext() || students.iterator().hasNext() || classes.iterator().hasNext())) {
			SemesterReview item = new SemesterReview();
			item.setMidSemesterExtentInstructor("Teacher");
			item.setEndSemesterExtentInstructor("Another Teacher");
			item.setMidSemesterInstructorRecommendations("Do better bro");
			item.setEndSemesterInstructorRecommendations("You did better");
			item.setMliCoursePace(true);
			item.setMliLackOfMindset(true);
			item.setMliLackOfInterestCuriousity(true);
			item.setMliLackOfEffortFocus(true);
			item.setMliPoorTimeManagement(true);
			item.setMliHealthIssues(true);
			item.setMliComplacence(true);
			item.setMliEmploymentHours(true);
			item.setMliOther(true);
			item.setMliOtherIssues("so many issues");
			item.setEsliCoursePace(true);
			item.setEsliPoorTimeManagement(true);
			item.setEsliHealthIssues(true);
			item.setEsliComplacence(true);
			item.setEsliEmploymentHours(true);
			item.setEsliOther(true);
			item.setEsliotherIssues("so many issues");
			item.setStudentID(studentRepository.findOne((long) 1));
			item.setClassesID(classRepository.findOne((long) 3));
			semesterReviewRepository.save(item);
			reviews = semesterReviewRepository.findAll();
		}

		ArrayList<SemesterReviewResponse> midSemesterData = new ArrayList<>();
		for (SemesterReview review : reviews) {
			midSemesterData.add(new SemesterReviewResponse(review.getStudentID(), review.getClassesID(), review.getMliCoursePace(), review.getMliLackOfMindset(),
					review.getMliLackOfInterestCuriousity(), review.getMliLackOfEffortFocus(), review.getMliPoorTimeManagement(), 
					review.getMliHealthIssues(), review.getMliComplacence(), review.getMliEmploymentHours(), review.getMliOther(), review.getMliOtherIssues(), 
					review.getEsliCoursePace(), review.getEsliPoorTimeManagement(), review.getEsliHealthIssues(), review.getEsliComplacence(), review.getEsliEmploymentHours(), 
					review.getEsliOther(), review.getEsliotherIssues(),review.getMidSemesterExtentInstructor(),review.getEndSemesterExtentInstructor(),review.getMidSemesterInstructorRecommendations(),
					review.getEndSemesterInstructorRecommendations()));
		}
		return midSemesterData;
	}

	@GetMapping("/semesterReviews/studentId={studentId}")
	public ArrayList<SemesterReviewResponse> getReviewInfo(@PathVariable int studentId) {
		Student student = studentRepository.findOne((long) studentId);
		List<SemesterReview> reviews = semesterReviewRepository.findByStudentId(student.getId());
		ArrayList<SemesterReviewResponse> reviewData = new ArrayList<>();
		for (SemesterReview review : reviews) {
			if (review.getStudentID().getId() == student.getId()) {
				reviewData.add(new SemesterReviewResponse(review.getStudentID(), review.getClassesID(), review.getMliCoursePace(), review.getMliLackOfMindset(),
				review.getMliLackOfInterestCuriousity(), review.getMliLackOfEffortFocus(), review.getMliPoorTimeManagement(), 
				review.getMliHealthIssues(), review.getMliComplacence(), review.getMliEmploymentHours(), review.getMliOther(), review.getMliOtherIssues(), 
				review.getEsliCoursePace(), review.getEsliPoorTimeManagement(), review.getEsliHealthIssues(), review.getEsliComplacence(), review.getEsliEmploymentHours(), 
				review.getEsliOther(), review.getEsliotherIssues(),review.getMidSemesterExtentInstructor(),review.getEndSemesterExtentInstructor(),review.getMidSemesterInstructorRecommendations(),
				review.getEndSemesterInstructorRecommendations()));
			}
		}
		return reviewData;
	}

	/**
	 * Obtain a list of semester review info by class Id
	 * 
	 * @param classId
	 *            course id from URL
	 * @return list of semester reviews
	 */
	@GetMapping("/semesterReviews/classId={classId}")
	public ArrayList<SemesterReviewResponse> getReviewInfoByClassId(@PathVariable int classId) {
		Classes classes = classRepository.findOne((long) classId);
		List<SemesterReview> reviews = semesterReviewRepository.findByClassesId(classes.getId());
		ArrayList<SemesterReviewResponse> reviewData = new ArrayList<>();

		for (SemesterReview review : reviews) {
			if (review.getClassesID().getId() == classes.getId()) {
				reviewData.add(new SemesterReviewResponse(review.getStudentID(), review.getClassesID(), review.getMliCoursePace(), review.getMliLackOfMindset(),
						review.getMliLackOfInterestCuriousity(), review.getMliLackOfEffortFocus(), review.getMliPoorTimeManagement(), 
						review.getMliHealthIssues(), review.getMliComplacence(), review.getMliEmploymentHours(), review.getMliOther(), review.getMliOtherIssues(), 
						review.getEsliCoursePace(), review.getEsliPoorTimeManagement(), review.getEsliHealthIssues(), review.getEsliComplacence(), review.getEsliEmploymentHours(), 
						review.getEsliOther(), review.getEsliotherIssues(),review.getMidSemesterExtentInstructor(),review.getEndSemesterExtentInstructor(),review.getMidSemesterInstructorRecommendations(),
						review.getEndSemesterInstructorRecommendations()));				
			}
		}
		return reviewData;
	}

	@GetMapping("/semesterReviews/courseId={courseId}/studentId={studentId}")
	public ArrayList<SemesterReviewResponse> getReviewRequestInfoByCourseId(@PathVariable int courseId, @PathVariable int studentId) {
		List<Classes> classes = classRepository.findByCourseId((long) courseId);
		Student student = studentRepository.findOne((long) studentId);
				
		ArrayList<SemesterReviewResponse> reviewData = new ArrayList<>();
		
		SemesterReview review = findSemeterReviewByClassAndStudent(classes.get(0).getId(), student.getId());

		if (review != null) {
			if (review.getClassesID().getCourseId() == classes.get(0).getCourseId()) {
				reviewData.add(new SemesterReviewResponse(review.getStudentID(), review.getClassesID(), review.getMliCoursePace(), review.getMliLackOfMindset(),
						review.getMliLackOfInterestCuriousity(), review.getMliLackOfEffortFocus(), review.getMliPoorTimeManagement(), 
						review.getMliHealthIssues(), review.getMliComplacence(), review.getMliEmploymentHours(), review.getMliOther(), review.getMliOtherIssues(), 
						review.getEsliCoursePace(), review.getEsliPoorTimeManagement(), review.getEsliHealthIssues(), review.getEsliComplacence(), review.getEsliEmploymentHours(), 
						review.getEsliOther(), review.getEsliotherIssues(),review.getMidSemesterExtentInstructor(),review.getEndSemesterExtentInstructor(),review.getMidSemesterInstructorRecommendations(),
						review.getEndSemesterInstructorRecommendations()));
			}
		}
		return reviewData;
	}
}
