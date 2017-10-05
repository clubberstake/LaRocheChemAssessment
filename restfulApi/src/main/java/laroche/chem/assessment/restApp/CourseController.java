package laroche.chem.assessment.restApp;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import laroche.chem.assessment.entities.Course;
import laroche.chem.assessment.entities.Instructor;
import laroche.chem.assessment.repositories.CourseRepository;
import laroche.chem.assessment.repositories.InstructorRepository;
import laroche.chem.assessment.responseObjects.CourseInfoForAssessmentWorksheet;

@RestController
public class CourseController {

	@Autowired
	private CourseRepository courseRepository;
	@Autowired
	private InstructorRepository instructorRepository;

	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping("/courseInfoForAssessmentWorksheet")
	public ArrayList<CourseInfoForAssessmentWorksheet> getCourseInfoForAssessmentWorksheet() {
		return generateFakeData();
	}

	private ArrayList<CourseInfoForAssessmentWorksheet> generateFakeData() {

		List<Course> courses = courseRepository.findAll();
		if (!courses.iterator().hasNext()) {
			courseRepository.save(new Course("CHEM 2017/01", "Organic Chemistry II Lecture", "Spring", "2017", 1));
			courseRepository.save(new Course("CS 2017/01", "Capstone", "Fall", "2017", 2));
			courses = courseRepository.findAll();
		}

		List<Instructor> instructors = instructorRepository.findAll();
		if (!instructors.iterator().hasNext()) {
			instructorRepository.save(new Instructor("Dr. D.T. Fujito, Professor/Chair of Chemistry"));
			instructorRepository.save(new Instructor("Mr. Gregory Lang, Adjunct Faculty of Computer Science"));
			instructors = instructorRepository.findAll();
		}

		ArrayList<CourseInfoForAssessmentWorksheet> data = new ArrayList<CourseInfoForAssessmentWorksheet>();

		for (Course course : courses) {
			data.add(new CourseInfoForAssessmentWorksheet(course.getCourseNumAndSection(), course.getCourseName(),
					course.getSemester() + " " + course.getYear(), getInstructorName(instructors, course)));
		}

		return data;
	}

	private String getInstructorName(List<Instructor> instructors, Course course) {
		for (Instructor instructor : instructors) {
			if (instructor.getId() == course.getInstructorId()) {
				return instructor.getName();
			}
		}

		return "Bad Instructor Name";
	}

}
