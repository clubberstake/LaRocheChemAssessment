package laroche.chem.assessment.restApp;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import laroche.chem.assessment.entities.CourseAssessmentFormSection4;
import laroche.chem.assessment.repositories.Course_Assessment_Form_Section_4_Repository;
import laroche.chem.assessment.responseObjects.CourseInfoForAssessmentWorksheet4;

@RestController
public class Course_Assessment_Form_Section_4_Controller {

	@Autowired
	private Course_Assessment_Form_Section_4_Repository course_Assessment_Form_Section_4_Repository;
	

	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping("/courseInfoForAssessmentWorksheet4")
	public ArrayList<CourseInfoForAssessmentWorksheet4> getCourseInfoForAssessmentWorksheet4() {
		return generateFakeData();
	}

	private ArrayList<CourseInfoForAssessmentWorksheet4> generateFakeData() {

		List<CourseAssessmentFormSection4> formSection4 = course_Assessment_Form_Section_4_Repository.findAll();
		if (!formSection4.iterator().hasNext()) {
			course_Assessment_Form_Section_4_Repository.save(new CourseAssessmentFormSection4(212, 4321, "Unable to Read", "Very much so".getBytes(), "The other other".getBytes()));
			course_Assessment_Form_Section_4_Repository.save(new CourseAssessmentFormSection4(212, 1234, "Maths Bad", "Not so much ".getBytes(), "Other to the other".getBytes()));
			formSection4 = course_Assessment_Form_Section_4_Repository.findAll();
		
		}

		ArrayList<CourseInfoForAssessmentWorksheet4> data = new ArrayList<CourseInfoForAssessmentWorksheet4>();

		for (CourseAssessmentFormSection4 course_Assessment_Form_Section_4 : formSection4) {
			data.add(new CourseInfoForAssessmentWorksheet4(course_Assessment_Form_Section_4.getId(), course_Assessment_Form_Section_4.getIdNum() ,
					course_Assessment_Form_Section_4.getIdNum(), course_Assessment_Form_Section_4.getLearningIssue(), course_Assessment_Form_Section_4.getExtentInstructor(), 
					course_Assessment_Form_Section_4.getInstructorRecommendations()));
		}

		return data;
	}

}
