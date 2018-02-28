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
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PutMapping("/section3")
	public ResponseEntity<Void> updateCafs3(@RequestBody CourseAssessmentFormSection3 cafs3) {
		System.out.println(cafs3.getId());
		course_Assessment_Form_Section_3_Repository.save(cafs3);
		try {
			return ResponseEntity.created(new URI("/updated/" + cafs3.getId())).build();
		}
		catch(URISyntaxException e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.CONFLICT).build();
		}
	}
	
	private ArrayList<CourseInfoForAssessmentWorksheet3> generateFakeData() {

		List<CourseAssessmentFormSection3> formSection3 = course_Assessment_Form_Section_3_Repository.findAll();
		if (!formSection3.iterator().hasNext()) {
			course_Assessment_Form_Section_3_Repository.save(new CourseAssessmentFormSection3(6, "212", "Yes", "No", "Yes", "Null ", "yyy", "Hello"));
			course_Assessment_Form_Section_3_Repository.save(new CourseAssessmentFormSection3(7, "212", "Yes", "No", "No ", "Reason 1 ","yyyy", "Goodby"));
			formSection3 = course_Assessment_Form_Section_3_Repository.findAll();
		
		}

		ArrayList<CourseInfoForAssessmentWorksheet3> data = new ArrayList<CourseInfoForAssessmentWorksheet3>();

		for (CourseAssessmentFormSection3 course_Assessment_Form_Section_3 : formSection3) {
			data.add(new CourseInfoForAssessmentWorksheet3(course_Assessment_Form_Section_3.getId(), course_Assessment_Form_Section_3.getClassId(), course_Assessment_Form_Section_3.getCoursePreReq(),
					course_Assessment_Form_Section_3.getTextbooks(), course_Assessment_Form_Section_3.getStudentAsse(), course_Assessment_Form_Section_3.getPedagogy(), course_Assessment_Form_Section_3.getFaculty(), course_Assessment_Form_Section_3.getMinorCapitalEq(), course_Assessment_Form_Section_3.getOther()));
		}

		return data;
	}

}
