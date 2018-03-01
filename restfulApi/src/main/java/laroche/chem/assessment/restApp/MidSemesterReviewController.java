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
import laroche.chem.assessment.entities.MidSemesterReview;
import laroche.chem.assessment.repositories.MidSemesterReviewRepository;
import laroche.chem.assessment.repositories.StudentRepository;
import laroche.chem.assessment.responseObjects.MidSemesterReviewResponse;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/midSemesterReview")
public class MidSemesterReviewController {
	@Autowired
	private MidSemesterReviewRepository midSemesterRepo;

	@Autowired
	private StudentRepository studentRepository;

	public ArrayList<MidSemesterReviewResponse> getCourseInfoForAssessmentWorksheet4() {
		return getMidSemesterReview();
	}

	@PostMapping("/addReview")
	public ResponseEntity<Void> addMidSemesterReview(@RequestBody MidSemesterReview midSemesterEntry) {
		midSemesterRepo.save(midSemesterEntry);

		try {
			return ResponseEntity.created(new URI("/midSemesterEntry/" + midSemesterEntry.getID())).build();
		} catch (URISyntaxException e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.CONFLICT).build();
		}
	}

	@GetMapping("/midSemesterReviews")
	private ArrayList<MidSemesterReviewResponse> getMidSemesterReview() {

		MidSemesterReview item = new MidSemesterReview();
		item.setExtentInstructor("Teacher");
		item.setInstructorRecommendations("Do Better");
		item.setLearningIssues(null);
		item.setStudentID(studentRepository.findOne((long) 1));

		midSemesterRepo.save(item);

		List<MidSemesterReview> sec4list = midSemesterRepo.findAll();
		ArrayList<MidSemesterReviewResponse> midSemesterData = new ArrayList<>();
		for (MidSemesterReview e : sec4list) {
			midSemesterData.add(new MidSemesterReviewResponse(e.getStudentID(), e.getLearningIssues(),
					e.getExtentInstructor(), e.getInstructorRecommendations()));

		}
		return midSemesterData;
	}

}
