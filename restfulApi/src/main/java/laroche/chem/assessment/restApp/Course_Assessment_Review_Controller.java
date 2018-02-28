package laroche.chem.assessment.restApp;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import laroche.chem.assessment.entities.CourseAssessmentFormSection3;
import laroche.chem.assessment.entities.CourseAssessmentReviewSection;
import laroche.chem.assessment.repositories.Course_Assessment_Review_Repository;
import laroche.chem.assessment.responseObjects.CourseInfoForAssessmentWorksheetReview;

@RestController
public class Course_Assessment_Review_Controller {

	@Autowired
	private Course_Assessment_Review_Repository course_Assessment_Review_Repository;
	

	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping("/courseInfoForAssessmentWorksheetReview")
	public ArrayList<CourseInfoForAssessmentWorksheetReview> getCourseInfoForAssessmentWorksheetReview() {
		return generateFakeData();
	}

	@CrossOrigin(origins = "http://localhost:4200")
	@PutMapping("/section6")
	public ResponseEntity<Void> updateCafs6(@RequestBody CourseAssessmentReviewSection cafs6) {
		System.out.println(cafs6.getId());
		course_Assessment_Review_Repository.save(cafs6);
		try {
			return ResponseEntity.created(new URI("/updated/" + cafs6.getId())).build();
		}
		catch(URISyntaxException e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.CONFLICT).build();
		}
	}
	
	private ArrayList<CourseInfoForAssessmentWorksheetReview> generateFakeData() {

		List<CourseAssessmentReviewSection> formSectionR = course_Assessment_Review_Repository.findAll();
		if (!formSectionR.iterator().hasNext()) {
			course_Assessment_Review_Repository.save(new CourseAssessmentReviewSection(6, "Terrible", "Kinda Terrible", "Blah", "Not be Terrible", "Money 1", "Money2", "1234"));
			course_Assessment_Review_Repository.save(new CourseAssessmentReviewSection(7, "Okay", "Better", "Good", "Blah Blah", "More Money", "Sports","4321"));
			formSectionR = course_Assessment_Review_Repository.findAll();
		
		}

		ArrayList<CourseInfoForAssessmentWorksheetReview> data = new ArrayList<CourseInfoForAssessmentWorksheetReview>();

		for (CourseAssessmentReviewSection course_Assessment_Review : formSectionR) {
			data.add(new CourseInfoForAssessmentWorksheetReview(course_Assessment_Review.getId(), course_Assessment_Review.getClassId(), course_Assessment_Review.getDepReview(), 
					course_Assessment_Review.getDivChairRevDate(), course_Assessment_Review.getDivChairReview(),
					course_Assessment_Review.getDivChairSig(), course_Assessment_Review.getNewActPlan(),
					course_Assessment_Review.getNewBudgItem(), course_Assessment_Review.getDepReviewer()));
		}

		return data;
	}

}
