package laroche.chem.assessment.restApp;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import laroche.chem.assessment.entities.CourseAssessmentFormSection2;
import laroche.chem.assessment.repositories.Course_Assessment_Form_Section_2Repository;
import laroche.chem.assessment.responseObjects.CourseInfoForAssessmentWorksheet2;

@RestController
public class Course_Assessment_Form_Section_2_Controller {

	@Autowired
	private Course_Assessment_Form_Section_2Repository course_Assessment_Form_Section_2_Repository;
	

	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping("/courseInfoForAssessmentWorksheet2")
	public ArrayList<CourseInfoForAssessmentWorksheet2> getCourseInfoForAssessmentWorksheet2() {
		return generateFakeData();
	}

	private ArrayList<CourseInfoForAssessmentWorksheet2> generateFakeData() {

		List<CourseAssessmentFormSection2> formSection2 = course_Assessment_Form_Section_2_Repository.findAll();
		if (!formSection2.iterator().hasNext()) {
			course_Assessment_Form_Section_2_Repository.save(new CourseAssessmentFormSection2(111, "Concepts1".getBytes(), "Obj1".getBytes(), "Misc1".getBytes(), 4, 7, 2, 1, 1));
			course_Assessment_Form_Section_2_Repository.save(new CourseAssessmentFormSection2(111, "Concepts2".getBytes(), "Obj2".getBytes(), "Misc2".getBytes(), 7, 6, 5, 9, 2));
			formSection2 = course_Assessment_Form_Section_2_Repository.findAll();
		
		}

		ArrayList<CourseInfoForAssessmentWorksheet2> data = new ArrayList<CourseInfoForAssessmentWorksheet2>();

		for (CourseAssessmentFormSection2 course_Assessment_Form_Section_2 : formSection2) {
			data.add(new CourseInfoForAssessmentWorksheet2(course_Assessment_Form_Section_2.getId(), course_Assessment_Form_Section_2.getChemConcept(),
					course_Assessment_Form_Section_2.getObjectivesContent(), course_Assessment_Form_Section_2.getGeneralComments(), course_Assessment_Form_Section_2.getPercentA(),
					course_Assessment_Form_Section_2.getPercentB(), course_Assessment_Form_Section_2.getPercentC(), course_Assessment_Form_Section_2.getPercentD(), course_Assessment_Form_Section_2.getPercentF()));
		}

		return data;
	}

}
