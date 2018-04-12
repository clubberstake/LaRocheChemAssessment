package laroche.chem.assessment.restApp;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import laroche.chem.assessment.entities.Course;
import laroche.chem.assessment.entities.Instructor;
import laroche.chem.assessment.repositories.CourseRepository;
import laroche.chem.assessment.repositories.InstructorRepository;
import laroche.chem.assessment.responseObjects.CourseInfoForAssessmentWorksheet;

@RestController
public class CourseController {

	// Dependency Injection: @Autowired
	@Autowired
	private CourseRepository courseRepository;
	@Autowired
	private InstructorRepository instructorRepository;

	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping("/courseInfoForAssessmentWorksheet")
	public ArrayList<CourseInfoForAssessmentWorksheet> getCourseInfoForAssessmentWorksheet() {
		return generateFakeData();
	}
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/addCourse")
 	public ResponseEntity<Void> addCourse(@RequestBody Course course) {
 		System.out.println(course.getId());
 		courseRepository.save(course);
			return ResponseEntity.status(HttpStatus.CONFLICT).build(); 
	}
	@GetMapping("/course/{CourseNumAndSection}")
	public long getCourseId(@PathVariable String courseNumAndSection) {
		List<Course> courses = courseRepository.findByCourseName(courseNumAndSection);
		long courseId = courses.get(0).getId();
		return courseId;
}

	private ArrayList<CourseInfoForAssessmentWorksheet> generateFakeData() {

		List<Course> courses = courseRepository.findAll();
		if (!courses.iterator().hasNext()) {
			courseRepository.save(new Course("CHEM2016", "Organic Chemistry II Lecture"));
			courseRepository.save(new Course("CSCI4098", "Capstone"));
			courseRepository.save(new Course("MATH2050", "Discrete Mathematics I"));
			courseRepository.save(new Course("MATH1040", "Probability & Statistics"));
			courseRepository.save(new Course("CHEM2016L", "Organic Chemistry II Lab"));
			courses = courseRepository.findAll();
		}

		List<Instructor> instructors = instructorRepository.findAll();
		if (!instructors.iterator().hasNext()) {
			instructorRepository.save(new Instructor("Dr. D.T. Fujito, Professor/Chair of Chemistry"));
			instructorRepository.save(new Instructor("Mr. Gregory Lang, Adjunct Faculty of Computer Science"));
			instructorRepository.save(new Instructor("Dr. Brian Smith, Adjunct Faculty of Mathematics"));
			instructorRepository.save(new Instructor("Mr. William Rushmore, Adjunct Faculty of Mathematics"));
			instructors = instructorRepository.findAll();
		}

		ArrayList<CourseInfoForAssessmentWorksheet> data = new ArrayList<CourseInfoForAssessmentWorksheet>();

		for (Course course : courses) {
			data.add(new CourseInfoForAssessmentWorksheet(course.getId(), course.getCourseNumber(), course.getCourseName()));
		}

		return data;
	}
}
