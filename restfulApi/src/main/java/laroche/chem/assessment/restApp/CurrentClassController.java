package laroche.chem.assessment.restApp;

import java.util.ArrayList;
import java.util.List;
import java.util.Calendar;

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
	public ArrayList<ClassInfo> getCurrentClassInfo() {
		return generateFakeData();
	}
		
	private ArrayList<ClassInfo> generateFakeData() {
		
		List<Classes> classes = classRepository.findAll();
		if (!classes.iterator().hasNext()) {
			classRepository.save(new Classes(1, null, "SP2017", "01", 1));
			classRepository.save(new Classes(1, null, "FA2016", "01", 1));
			classRepository.save(new Classes(3, null, "SP2017", "01", 1));
			classRepository.save(new Classes(2, null, "SP2017", "01", 2));
			classRepository.save(new Classes(4, null, "SP2017", "01", 4));
			classRepository.save(new Classes(1, null, "SP2018", "01", 1));
			classes = classRepository.findAll();
		}
		
		List<Course> courses = courseRepository.findAll();
		
		List<Instructor> instructors = instructorRepository.findAll();
		if (!instructors.iterator().hasNext()) {
			instructorRepository.save(new Instructor("Dr. D.T. Fujito, Professor/Chair of Chemistry"));
			instructorRepository.save(new Instructor("Mr. Gregory Lang, Adjunct Faculty of Computer Science"));
			instructorRepository.save(new Instructor("Dr. Brian Smith, Adjunct Faculty of Mathematics"));
			instructorRepository.save(new Instructor("Mr. William Rushmore, Adjunct Faculty of Mathematics"));
			instructors = instructorRepository.findAll();
		}

		ArrayList<ClassInfo> data = new ArrayList<ClassInfo>();
		Calendar now = Calendar.getInstance();
		int year = now.get(Calendar.YEAR);
		int month = now.get(Calendar.MONTH) + 1;
		String semester;
		
		if(month < 6)
		{
			semester = "SP" + year;
		}
		else if(month < 9)
		{
			semester = "SU" + year;
		}
		else
		{
			semester = "FA" + year;
		}

		for (Classes classs : classes) {
			if(classs.getSemester().equals(semester))
			{
				data.add(new ClassInfo(classs.getId(), classs.getCourseId(), getCourseId(courses, classs), classs.getSyllabus(), classs.getSection(), classs.getSemester(), getCourseTitle(courses, classs), classs.getInstructorId(), getInstructorName(instructors, classs)));		
			}
		}

		return data;
	}
	
	private String getCourseTitle(List<Course> courses, Classes classs) {
		for (Course course : courses) {
			if (course.getId() == classs.getCourseId()) {
				return course.getCourseName();
			}
		}

		return "Bad Course Name";
	}
	
	private String getInstructorName(List<Instructor> instructors, Classes classs) {
		for (Instructor instructor : instructors) {
			if (instructor.getId() == classs.getInstructorId()) {
				return instructor.getName();
			}
		}

		return "Bad Instructor Name";
	}
	
	private String getCourseId(List<Course> courses, Classes classs) {
		for (Course course : courses) {
			if (course.getId() == classs.getCourseId()) {
				return course.getCourseNumber();
			}
		}

		return "Bad Course ID";
	}
}