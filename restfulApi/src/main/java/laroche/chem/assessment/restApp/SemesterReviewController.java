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
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import laroche.chem.assessment.entities.SemesterReview;
import laroche.chem.assessment.repositories.SemesterReviewRepository;
import laroche.chem.assessment.repositories.StudentRepository;
import laroche.chem.assessment.responseObjects.SemesterReviewResponse;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/midSemesterReview")
public class SemesterReviewController {
	@Autowired
	private SemesterReviewRepository semesterReviewRepository;

	@Autowired
	private StudentRepository studentRepository;

	public ArrayList<SemesterReviewResponse> getCourseInfoForAssessmentWorksheet4() {
		return getMidSemesterReview();
	}

	@PostMapping("/addReview")
	public ResponseEntity<Void> addMidSemesterReview(@RequestBody SemesterReview semesterEntry) {
		semesterReviewRepository.save(semesterEntry);

		try {
			return ResponseEntity.created(new URI("/midSemesterEntry/" + semesterEntry.getID())).build();
		} catch (URISyntaxException e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.CONFLICT).build();
		}
	}

	@GetMapping("/midSemesterReviews")
	private ArrayList<SemesterReviewResponse> getMidSemesterReview() {

		SemesterReview item = new SemesterReview();
		item.setMidSemesterExtentInstructor("Teacher");
		item.setEndSemesterExtentInstructor("Another Teacher");
		item.setMidSemesterInstructorRecommendations("Do better bro");
		item.setEndSemesterInstructorRecommendations("You did better");
		item.setMidSemesterLearningIssues(null);
		item.setEndSemesterLearningIssues(null);
		item.setStudentID(studentRepository.findOne((long) 1));

		semesterReviewRepository.save(item);

		List<SemesterReview> reviews = semesterReviewRepository.findAll();
		ArrayList<SemesterReviewResponse> midSemesterData = new ArrayList<>();
		for (SemesterReview review : reviews) {
			midSemesterData.add(new SemesterReviewResponse(review.getStudentID(), review.getMidSemesterLearningIssues(), review.getEndSemesterLearningIssues(),
					review.getMidSemesterExtentInstructor(), review.getEndSemesterExtentInstructor(), review.getMidSemesterInstructorRecommendations(),
					review.getEndSemesterInstructorRecommendations()));
		}
		return midSemesterData;
	}
}
