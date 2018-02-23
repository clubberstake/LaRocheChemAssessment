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
import laroche.chem.assessment.entities.MidSemesterReviewEntity;
import laroche.chem.assessment.entities.MiscNotes;
import laroche.chem.assessment.repositories.Course_Assessment_Form_Section_4_Repository;
import laroche.chem.assessment.responseObjects.CourseInfoForAssessmentWorksheet4;

@RestController

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/midSemesterReview")
public class MidSemesterReviewController {
	@Autowired
	private Course_Assessment_Form_Section_4_Repository midSemesterRepo;

	public ArrayList<CourseInfoForAssessmentWorksheet4> getCourseInfoForAssessmentWorksheet4() {
		return getData();
	}
	
	@PostMapping("/addNote")
	public ResponseEntity<Void> addMidSemesterReview(@RequestBody MidSemesterReviewEntity midSemesterEntry) {
		midSemesterRepo.save(midSemesterEntry);
		
		try {
			return ResponseEntity.created(new URI("/midSemesterEntry/" + midSemesterEntry.getID())).build();
		} catch (URISyntaxException e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.CONFLICT).build();
		}
	}
	
	

	private ArrayList<CourseInfoForAssessmentWorksheet4> getData() {		
		List<MidSemesterReviewEntity> sec4list = midSemesterRepo.findAll();
		ArrayList<CourseInfoForAssessmentWorksheet4> midSemesterData = new ArrayList<>();
		for(MidSemesterReviewEntity e: sec4list) {
			midSemesterData.add(new CourseInfoForAssessmentWorksheet4(e.getStudentID(),e.getLearningIssues(),
					e.getExtentInstructor(),e.getInstructorRecommendations()));
			
		}	    
	    return midSemesterData;
	}

}
