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

import laroche.chem.assessment.entities.Course;
import laroche.chem.assessment.entities.Instructor;
import laroche.chem.assessment.entities.SLOs;
import laroche.chem.assessment.entities.CourseSLOs;
import laroche.chem.assessment.repositories.CourseRepository;
import laroche.chem.assessment.repositories.Course_SLOsRepository;
import laroche.chem.assessment.repositories.InstructorRepository;
import laroche.chem.assessment.repositories.SLOsRepository;
import laroche.chem.assessment.responseObjects.CourseSLOsInfo;

@RestController
public class CourseSLOsController {

	@Autowired
	private CourseRepository courseRepository;
	@Autowired
	private InstructorRepository instructorRepository;
	@Autowired
	private Course_SLOsRepository course_SLOsRepository;
	@Autowired
	private SLOsRepository slosRepository;

	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping("/courseSLOs")
	public ArrayList<CourseSLOsInfo> getCourseSLOs() {
		return generateFakeData();
	}
	@CrossOrigin(origins = "http://localhost:4200")
	@PutMapping("/slos")
	public ResponseEntity<Void> updateSLOs(@RequestBody CourseSLOs slos) {
		System.out.println(slos.getClassId());
		course_SLOsRepository.save(slos);
		try {
			return ResponseEntity.created(new URI("/updated/" + slos.getId())).build();
		}
		catch(URISyntaxException e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.CONFLICT).build();
		}
	}
	
	private ArrayList<CourseSLOsInfo> generateFakeData() {

		List<Course> courses = courseRepository.findAll();
		
		List<Instructor> instructors = instructorRepository.findAll();
		if (!instructors.iterator().hasNext()) {
			instructorRepository.save(new Instructor("Dr. D.T. Fujito, Professor/Chair of Chemistry"));
			instructorRepository.save(new Instructor("Mr. Gregory Lang, Adjunct Faculty of Computer Science"));
			instructorRepository.save(new Instructor("Dr. Brian Smith, Adjunct Faculty of Mathematics"));
			instructorRepository.save(new Instructor("Mr. William Rushmore, Adjunct Faculty of Mathematics"));
			instructors = instructorRepository.findAll();
		}
		
		List<CourseSLOs> slos = course_SLOsRepository.findAll();
		if (!slos.iterator().hasNext()) {
			course_SLOsRepository.save(new CourseSLOs(6, false, false, false, false, false));
			course_SLOsRepository.save(new CourseSLOs(7, true, false, false, false, false));
			course_SLOsRepository.save(new CourseSLOs(8, true, false, true, false, false));
			course_SLOsRepository.save(new CourseSLOs(9, true, false, true, true, false));
			instructors = instructorRepository.findAll();
		}
		
		List<SLOs> slolist = slosRepository.findAll();
		if (!slolist.iterator().hasNext()) {
			slosRepository.save(new SLOs("Knowledge Base"));
			slosRepository.save(new SLOs("Lab Skills"));
			slosRepository.save(new SLOs("Practice"));
			slosRepository.save(new SLOs("Societal Connects"));
			slosRepository.save(new SLOs("Capstone"));
			slolist = slosRepository.findAll();
		}
		

		ArrayList<CourseSLOsInfo> data = new ArrayList<CourseSLOsInfo>();

		for (CourseSLOs courseSLOs : slos) {
			data.add(new CourseSLOsInfo(courseSLOs.getId(), courseSLOs.getClassId(), courseSLOs.getSlo1(), courseSLOs.getSlo2(), courseSLOs.getSlo3(), courseSLOs.getSlo4(), courseSLOs.getSlo5()));
		}

		return data;
	}
}
