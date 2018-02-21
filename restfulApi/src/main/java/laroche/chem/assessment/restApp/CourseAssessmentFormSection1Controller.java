package laroche.chem.assessment.restApp;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import laroche.chem.assessment.entities.CourseAssessmentFormSection1;
import laroche.chem.assessment.repositories.Course_Assessment_Form_Section_1Repository;

@RestController
public class CourseAssessmentFormSection1Controller {

	@Autowired
	private Course_Assessment_Form_Section_1Repository CAFS1Repository;;

	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping("/cafs1")
	public ArrayList<CourseAssessmentFormSection1> getCourseAssessmentFormSection1() {
		return generateFakeData();
	}

	private ArrayList<CourseAssessmentFormSection1> generateFakeData() {

		List<CourseAssessmentFormSection1> cafs1 = CAFS1Repository.findAll();
		if (!cafs1.iterator().hasNext()) {
			CAFS1Repository.save(new CourseAssessmentFormSection1("CHEM2016-SPR2017", "No new SLOs".getBytes(), "No new upgrades".getBytes(), "No new enhancements".getBytes(), "No new modifications".getBytes(), "No new other".getBytes()));
			CAFS1Repository.save(new CourseAssessmentFormSection1("CSCI4098-FAL2017", "Now includes a Lab application".getBytes(), "No new upgrades".getBytes(), "No new enhancements".getBytes(), "No new modifications".getBytes(), "No new other".getBytes()));
			CAFS1Repository.save(new CourseAssessmentFormSection1("MATH2050-FAL2017", "No new SLOs".getBytes(), "Now combines Discrete 1 and 2".getBytes(), "No new enhancements".getBytes(), "Tweaked some chapters to be more brief".getBytes(), "No new other".getBytes()));
			CAFS1Repository.save(new CourseAssessmentFormSection1("MATH1040-FAL2017", "Now includes Societal Connects".getBytes(), "No new upgrades".getBytes(), "Now more projects".getBytes(), "No new modifications".getBytes(), "New calculators required".getBytes()));
			cafs1 = CAFS1Repository.findAll();
		}
		
		ArrayList<CourseAssessmentFormSection1> data = new ArrayList<CourseAssessmentFormSection1>();

		for (CourseAssessmentFormSection1 caf : cafs1) {
			data.add(new CourseAssessmentFormSection1(caf.getCafs1id(), caf.getNewSLOs(),
					caf.getUpgrades(), caf.getEnhancements(), caf.getModifications(), caf.getOther()));
		}

		return data;
	}
}