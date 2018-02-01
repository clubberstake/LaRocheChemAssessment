package laroche.chem.assessment.restApp;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import laroche.chem.assessment.entities.CourseAssessmentFormSection3;
import laroche.chem.assessment.repositories.Course_Assessment_Form_Section_3_Repository;
import laroche.chem.assessment.responseObjects.CourseInfoForAssessmentWorksheet3;

@RestController
public class Course_Assessment_Form_Section_3_Controller {

	@Autowired
	private Course_Assessment_Form_Section_3_Repository course_Assessment_Form_Section_3_Repository;
	

	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping("/courseInfoForAssessmentWorksheet3")
	public ArrayList<CourseInfoForAssessmentWorksheet3> getCourseInfoForAssessmentWorksheet3() {
		return generateFakeData();
	}

	private ArrayList<CourseInfoForAssessmentWorksheet3> generateFakeData() {

		List<CourseAssessmentFormSection3> formSection3 = course_Assessment_Form_Section_3_Repository.findAll();
		if (!formSection3.iterator().hasNext()) {
			course_Assessment_Form_Section_3_Repository.save(new CourseAssessmentFormSection3("111".getBytes(), "212".getBytes(), "Yes".getBytes(), "No".getBytes(), "Yes".getBytes(), "Null ".getBytes(), "yyy".getBytes()));
			course_Assessment_Form_Section_3_Repository.save(new CourseAssessmentFormSection3("111".getBytes(), "212".getBytes(), "Yes".getBytes(), "No".getBytes(), "No ".getBytes(), "Reason 1 ".getBytes(),"yyyy".getBytes()));
			formSection3 = course_Assessment_Form_Section_3_Repository.findAll();
		
		}

		ArrayList<CourseInfoForAssessmentWorksheet3> data = new ArrayList<CourseInfoForAssessmentWorksheet3>();

		for (CourseAssessmentFormSection3 course_Assessment_Form_Section_3 : formSection3) {
			data.add(new CourseInfoForAssessmentWorksheet3(course_Assessment_Form_Section_3.getId(), course_Assessment_Form_Section_3.getCoursePreReq(),
					course_Assessment_Form_Section_3.getTextbooks(), course_Assessment_Form_Section_3.getStudentAsse(), course_Assessment_Form_Section_3.getPedagogy(), course_Assessment_Form_Section_3.getFaculty(), course_Assessment_Form_Section_3.getMinorCapitalEq()));
		}

		return data;
	}

}
