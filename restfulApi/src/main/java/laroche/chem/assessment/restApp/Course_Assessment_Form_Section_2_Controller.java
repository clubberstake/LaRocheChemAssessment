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

import laroche.chem.assessment.entities.CourseAssessmentFormSection1;
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
	@CrossOrigin(origins = "http://localhost:4200")
	@PutMapping("/section2")
	public ResponseEntity<Void> updateCafs2(@RequestBody CourseAssessmentFormSection2 cafs2) {
		System.out.println(cafs2.getClassId());
		course_Assessment_Form_Section_2_Repository.save(cafs2);
		try {
			return ResponseEntity.created(new URI("/updated/" + cafs2.getId())).build();
		}
		catch(URISyntaxException e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.CONFLICT).build();
		}
	}

	private ArrayList<CourseInfoForAssessmentWorksheet2> generateFakeData() {

		List<CourseAssessmentFormSection2> formSection2 = course_Assessment_Form_Section_2_Repository.findAll();
		if (!formSection2.iterator().hasNext()) {
			course_Assessment_Form_Section_2_Repository.save(new CourseAssessmentFormSection2(6, "Concepts1", "Obj1", "Misc1", 4, 7, 2, 1, 1));
			course_Assessment_Form_Section_2_Repository.save(new CourseAssessmentFormSection2(7, "Concepts2", "Obj2", "Misc2", 7, 6, 5, 9, 2));
			course_Assessment_Form_Section_2_Repository.save(new CourseAssessmentFormSection2(8, "Concepts3", "Obj3", "Misc3", 10, 5, 8, 17, 3));
			course_Assessment_Form_Section_2_Repository.save(new CourseAssessmentFormSection2(9, "Concepts4", "Obj4", "Misc4", 13, 4, 11, 25, 4));
			formSection2 = course_Assessment_Form_Section_2_Repository.findAll();
		
		}

		ArrayList<CourseInfoForAssessmentWorksheet2> data = new ArrayList<CourseInfoForAssessmentWorksheet2>();

		for (CourseAssessmentFormSection2 course_Assessment_Form_Section_2 : formSection2) {
			data.add(new CourseInfoForAssessmentWorksheet2(course_Assessment_Form_Section_2.getId(), course_Assessment_Form_Section_2.getClassId(), course_Assessment_Form_Section_2.getChemConcept(),
					course_Assessment_Form_Section_2.getObjectivesContent(), course_Assessment_Form_Section_2.getGeneralComments(), course_Assessment_Form_Section_2.getPercentA(),
					course_Assessment_Form_Section_2.getPercentB(), course_Assessment_Form_Section_2.getPercentC(), course_Assessment_Form_Section_2.getPercentD(), course_Assessment_Form_Section_2.getPercentF()));
		}

		return data;
	}

}
