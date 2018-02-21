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
import laroche.chem.assessment.entities.CourseSLOs;
import laroche.chem.assessment.repositories.Course_Assessment_Form_Section_1Repository;
import laroche.chem.assessment.responseObjects.CourseAssessmentFormSection1Info;

@RestController
public class CourseAssessmentFormSection1Controller {

	@Autowired
	private Course_Assessment_Form_Section_1Repository CAFS1Repository;;

	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping("/cafs1")
	public ArrayList<CourseAssessmentFormSection1Info> getCourseAssessmentFormSection1() {
		return generateFakeData();
	}
	@CrossOrigin(origins = "http://localhost:4200")
	@PutMapping("/section1")
	public ResponseEntity<Void> updateCafs1(@RequestBody CourseAssessmentFormSection1 cafs1) {
		System.out.println(cafs1.getClassId());
		CAFS1Repository.save(cafs1);
		try {
			return ResponseEntity.created(new URI("/updated/" + cafs1.getId())).build();
		}
		catch(URISyntaxException e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.CONFLICT).build();
		}
	}

	private ArrayList<CourseAssessmentFormSection1Info> generateFakeData() {

		List<CourseAssessmentFormSection1> cafs1 = CAFS1Repository.findAll();
		if (!cafs1.iterator().hasNext()) {
			CAFS1Repository.save(new CourseAssessmentFormSection1(6, "No new SLOs", "No new upgrades", "No new enhancements", "No new modifications", "No new other"));
			CAFS1Repository.save(new CourseAssessmentFormSection1(7, "Now includes a Lab application", "No new upgrades", "No new enhancements", "No new modifications", "No new other"));
			CAFS1Repository.save(new CourseAssessmentFormSection1(8, "No new SLOs", "Now combines Discrete 1 and 2", "No new enhancements", "Tweaked some chapters to be more brief", "No new other"));
			CAFS1Repository.save(new CourseAssessmentFormSection1(9, "Now includes Societal Connects", "No new upgrades", "Now more projects", "No new modifications", "New calculators required"));
			cafs1 = CAFS1Repository.findAll();
		}
		
		ArrayList<CourseAssessmentFormSection1Info> data = new ArrayList<CourseAssessmentFormSection1Info>();

		for (CourseAssessmentFormSection1 caf : cafs1) {
			data.add(new CourseAssessmentFormSection1Info(caf.getId(), caf.getClassId(), caf.getNewSLOs(),
					caf.getUpgrades(), caf.getEnhancements(), caf.getModifications(), caf.getOther()));
		}

		return data;
	}
}