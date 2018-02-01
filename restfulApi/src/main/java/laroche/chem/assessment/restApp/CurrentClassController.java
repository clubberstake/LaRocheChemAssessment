package laroche.chem.assessment.restApp;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import laroche.chem.assessment.entities.Classes;
import laroche.chem.assessment.entities.Course;
import laroche.chem.assessment.entities.Instructor;
import laroche.chem.assessment.repositories.ClassRepository;
import laroche.chem.assessment.repositories.CourseRepository;
import laroche.chem.assessment.repositories.InstructorRepository;
import laroche.chem.assessment.responseObjects.ClassInfo;
import laroche.chem.assessment.responseObjects.CourseInfoForAssessmentWorksheet;

@RestController
public class CurrentClassController {
	
	@Autowired
	private ClassRepository classRepository;
	@Autowired
	private InstructorRepository instructorRepository;
	@Autowired
	private CourseRepository courseRepository;
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping("/currentClasses")
	public ArrayList<ClassInfo> getClassInfo() {
		return generateFakeData();
	}

		private Course thiscourse;
		
	private ArrayList<ClassInfo> generateFakeData() {

		List<Classes> classes = classRepository.findAll();
		if (!classes.iterator().hasNext()) {
			classRepository.save(new Classes("CHEM2016", null, "SPR 2017"));
			classRepository.save(new Classes("CHEM2016", null, "FAL 2016"));
			classRepository.save(new Classes("MATH2050", null, "SPR 2017"));
			classRepository.save(new Classes("CSCI4098", null, "SPR 2017"));
			classRepository.save(new Classes("MATH1040", null, "SPR 2017"));
			classes = classRepository.findAll();
		}
		
		List<Course> courses = courseRepository.findAll();
		if (!courses.iterator().hasNext()) {
			courseRepository.save(new Course("CHEM2016", "Organic Chemistry II Lecture", "Spring", "2017", 1));
			courseRepository.save(new Course("CSCI4098", "Capstone", "Fall", "2017", 2));
			courseRepository.save(new Course("MATH2050", "Discrete Mathematics I", "Fall", "2017", 3));
			courseRepository.save(new Course("MATH1040", "Probability & Statistics", "Fall", "2017", 4));
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

		ArrayList<ClassInfo> data = new ArrayList<ClassInfo>();

		for (Classes classs : classes) {
			if(classs.getSemester().equals("SPR 2017"))
			{
				data.add(new ClassInfo(classs.getCourseId(), classs.getSyllabus() , classs.getSemester(), getCourseTitle(courses, classs), getInstructorName(instructors, thiscourse)));
		
			}
		}

		return data;
	}
	
	private String getCourseTitle(List<Course> courses, Classes classs) {
		for (Course course : courses) {
			if (course.getCourseNumAndSection().equals(classs.getCourseId())) {
				thiscourse = course;
				return course.getCourseName();
			}
		}

		return "Bad Course Name";
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