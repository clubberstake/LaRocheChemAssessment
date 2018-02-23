package laroche.chem.assessment.restApp;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import laroche.chem.assessment.entities.MidSemesterReview;
import laroche.chem.assessment.repositories.MidSemesterReviewRepository;
import laroche.chem.assessment.responseObjects.MidSemesterReviewResponse;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/midSemesterReview")
public class MidSemesterReviewController {
	@Autowired
	private MidSemesterReviewRepository midSemesterRepo;

	public ArrayList<MidSemesterReviewResponse> getCourseInfoForAssessmentWorksheet4() {
		return getData();
	}
	
	@PostMapping("/addNote")
	public ResponseEntity<Void> addMidSemesterReview(@RequestBody MidSemesterReview midSemesterEntry) {
		midSemesterRepo.save(midSemesterEntry);
		
		try {
			return ResponseEntity.created(new URI("/midSemesterEntry/" + midSemesterEntry.getID())).build();
		} catch (URISyntaxException e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.CONFLICT).build();
		}
	}
	
	

	private ArrayList<MidSemesterReviewResponse> getData() {		
		List<MidSemesterReview> sec4list = midSemesterRepo.findAll();
		ArrayList<MidSemesterReviewResponse> midSemesterData = new ArrayList<>();
		for(MidSemesterReview e: sec4list) {
			midSemesterData.add(new MidSemesterReviewResponse(e.getStudentID(),e.getLearningIssues(),
					e.getExtentInstructor(),e.getInstructorRecommendations()));
			
		}	    
	    return midSemesterData;
	}

}
