package laroche.chem.assessment.restApp;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

	private ArrayList<CourseInfoForAssessmentWorksheetReview> generateFakeData() {

		List<CourseAssessmentReviewSection> formSectionR = course_Assessment_Review_Repository.findAll();
		if (!formSectionR.iterator().hasNext()) {
			course_Assessment_Review_Repository.save(new CourseAssessmentReviewSection("Terrible".getBytes(), "Kinda Terrible".getBytes(), "Blah".getBytes(), "Not be Terrible".getBytes(), "Money 1".getBytes(), "Money2".getBytes(), "1234".getBytes()));
			course_Assessment_Review_Repository.save(new CourseAssessmentReviewSection("Okay".getBytes(), "Better".getBytes(), "Good".getBytes(), "Blah Blah".getBytes(), "More Money".getBytes(), "Sports".getBytes(),"4321".getBytes()));
			formSectionR = course_Assessment_Review_Repository.findAll();
		
		}

		ArrayList<CourseInfoForAssessmentWorksheetReview> data = new ArrayList<CourseInfoForAssessmentWorksheetReview>();

		for (CourseAssessmentReviewSection course_Assessment_Review : formSectionR) {
			data.add(new CourseInfoForAssessmentWorksheetReview(course_Assessment_Review.getDepReview(), 
					course_Assessment_Review.getDivChairRevDate(), course_Assessment_Review.getDivChairReview(),
					course_Assessment_Review.getDivChairSig(), course_Assessment_Review.getNewActPlan(),
					course_Assessment_Review.getNewBudgItem(), course_Assessment_Review.getDepReviewer()));
		}

		return data;
	}

}
