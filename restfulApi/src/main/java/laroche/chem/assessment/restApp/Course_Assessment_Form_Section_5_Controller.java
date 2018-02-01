package laroche.chem.assessment.restApp;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import laroche.chem.assessment.entities.CourseAssessmentFormSection5;
import laroche.chem.assessment.repositories.Course_Assessment_Form_Section_5_Repository;
import laroche.chem.assessment.responseObjects.CourseInfoForAssessmentWorksheet5;

@RestController
public class Course_Assessment_Form_Section_5_Controller {

	@Autowired
	private Course_Assessment_Form_Section_5_Repository course_Assessment_Form_Section_5_Repository;
	

	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping("/courseInfoForAssessmentWorksheet5")
	public ArrayList<CourseInfoForAssessmentWorksheet5> getCourseInfoForAssessmentWorksheet5() {
		return generateFakeData();
	}

	private ArrayList<CourseInfoForAssessmentWorksheet5> generateFakeData() {

		List<CourseAssessmentFormSection5> formSection5 = course_Assessment_Form_Section_5_Repository.findAll();
		if (!formSection5.iterator().hasNext()) {
			course_Assessment_Form_Section_5_Repository.save(new CourseAssessmentFormSection5(23, 1234, "A", "Cant swim", "Null1".getBytes(),"1".getBytes()));
			course_Assessment_Form_Section_5_Repository.save(new CourseAssessmentFormSection5(23, 4321, "F", "Cant walk", "Nully2".getBytes(), "2".getBytes()));
			formSection5 = course_Assessment_Form_Section_5_Repository.findAll();
		
		}

		ArrayList<CourseInfoForAssessmentWorksheet5> data = new ArrayList<CourseInfoForAssessmentWorksheet5>();

		for (CourseAssessmentFormSection5 course_Assessment_Form_Section_5 : formSection5) {
			data.add(new CourseInfoForAssessmentWorksheet5(course_Assessment_Form_Section_5.getId(), 
					course_Assessment_Form_Section_5.getSec5Num(), course_Assessment_Form_Section_5.getIdNum(), 
					course_Assessment_Form_Section_5.getGrade(), course_Assessment_Form_Section_5.getLearningIssue(), 
					course_Assessment_Form_Section_5.getExtentInstructorInt()));
		}

		return data;
	}

}
