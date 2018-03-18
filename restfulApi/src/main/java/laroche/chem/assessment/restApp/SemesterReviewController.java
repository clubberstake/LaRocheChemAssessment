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
import laroche.chem.assessment.responseObjects.SemesterReviewRequest;
import laroche.chem.assessment.responseObjects.SemesterReviewResponse;
import laroche.chem.assessment.responseObjects.StudentInfoForBioAndAdmissionsPlacementTab;

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

	@PostMapping("/addReview")
	public ResponseEntity<Void> addMidSemesterReview(@RequestBody SemesterReviewRequest request) {
		// Find a student from student repository based on request's recorded student ID and create a new student
		Student student = studentRepository.findOne(request.getStudentId());
		Classes classes = classRepository.findOne(request.getClassId());
		// Pass this newly created student to a Semester Review object along with additional request's recorded data
		SemesterReview review = new SemesterReview(student, classes, request.getMidSemesterLearningIssues(), request.getEndSemesterLearningIssues(), request.getMidSemesterExtentInstructor(), request.getEndSemesterExtentInstructor(), request.getMidSemesterInstructorRecommendations(), request.getEndSemesterInstructorRecommendations());
		// Save this newly create Semester Review object to the database through the semester review repository
		semesterReviewRepository.save(review);
		System.out.println("Semester Entry Student Id: " + request.getStudentId());

		try {
			return ResponseEntity.created(new URI("/midSemesterEntry/" + review.getID())).build();
		} catch (URISyntaxException e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.CONFLICT).build();
		}
	}
	
	/**
	 * Put request to update currently placed semester review
	 * @param request the semester review request object to be updated/added
	 * @return response URI path
	 */
	@PutMapping("/putReview")
	public ResponseEntity<Void> putMidSemesterReview(@RequestBody SemesterReviewRequest request) {
		Student student = studentRepository.findOne(request.getStudentId());
		Classes classes = classRepository.findOne(request.getClassId());
		SemesterReview review = new SemesterReview(student, classes, request.getMidSemesterLearningIssues(), request.getEndSemesterLearningIssues(), request.getMidSemesterExtentInstructor(), request.getEndSemesterExtentInstructor(), request.getMidSemesterInstructorRecommendations(), request.getEndSemesterInstructorRecommendations());
		semesterReviewRepository.save(review);
		
		try {
			return ResponseEntity.created(new URI("/semesterEntry/" + review.getID())).build();
		} catch(URISyntaxException e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.CONFLICT).build();
		}
	}

	@GetMapping("/semesterReviews")
	private ArrayList<SemesterReviewResponse> getMidSemesterReview() {

		SemesterReview item = new SemesterReview();
		item.setMidSemesterExtentInstructor("Teacher");
		item.setEndSemesterExtentInstructor("Another Teacher");
		item.setMidSemesterInstructorRecommendations("Do better bro");
		item.setEndSemesterInstructorRecommendations("You did better");
		item.setMidSemesterLearningIssues(null);
		item.setEndSemesterLearningIssues(null);
		item.setStudentID(studentRepository.findOne((long) 1));
		item.setClassesID(classRepository.findOne((long) 3));
		semesterReviewRepository.save(item);

		List<SemesterReview> reviews = semesterReviewRepository.findAll();
		ArrayList<SemesterReviewResponse> midSemesterData = new ArrayList<>();
		for (SemesterReview review : reviews) {
			midSemesterData.add(new SemesterReviewResponse(review.getStudentID(), review.getClassesID(), review.getMidSemesterLearningIssues(), review.getEndSemesterLearningIssues(),
					review.getMidSemesterExtentInstructor(), review.getEndSemesterExtentInstructor(), review.getMidSemesterInstructorRecommendations(),
					review.getEndSemesterInstructorRecommendations()));
		}
		return midSemesterData;
	}
	
	@GetMapping("/semesterReviews/studentId={studentId}")
	public ArrayList<SemesterReviewResponse> getReviewInfo(@PathVariable int studentId) {
		Student student = studentRepository.findOne((long) studentId);
		List<SemesterReview> reviews = semesterReviewRepository.findByStudentId(student.getId());
		ArrayList<SemesterReviewResponse> reviewData = new ArrayList<>();
		for(SemesterReview review : reviews) {
			if(review.getStudentID().getId() == student.getId()) {
				reviewData.add(new SemesterReviewResponse(review.getStudentID(), review.getClassesID(), null, null,
						review.getMidSemesterExtentInstructor(), review.getEndSemesterExtentInstructor(),
						review.getMidSemesterInstructorRecommendations(), review.getEndSemesterInstructorRecommendations()));
			}
		}
		return reviewData;	
	}
	
	/**
	 * Obtain a list of semester review info by class Id
	 * @param classId course id from URL
	 * @return list of semester reviews
	 */
	@GetMapping("/semesterReviews/classId={classId}")
	public ArrayList<SemesterReviewResponse> getReviewInfoByClassId(@PathVariable int classId) {
		Classes classes = classRepository.findOne((long) classId);
		List<SemesterReview> reviews = semesterReviewRepository.findByClassesId(classes.getId());
		ArrayList<SemesterReviewResponse> reviewData = new ArrayList<>();
		
		for(SemesterReview review : reviews) {
			if(review.getClassesID().getId() == classes.getId()) {
				reviewData.add(new SemesterReviewResponse(review.getStudentID(), review.getClassesID(), null, null,
						review.getMidSemesterExtentInstructor(), review.getEndSemesterExtentInstructor(),
						review.getMidSemesterInstructorRecommendations(), review.getEndSemesterInstructorRecommendations()));
			}
		}
		return reviewData;
	}
	
}
