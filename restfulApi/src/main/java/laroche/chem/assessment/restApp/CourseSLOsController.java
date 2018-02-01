package laroche.chem.assessment.restApp;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
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

	private Course thiscourse;
	
	private ArrayList<CourseSLOsInfo> generateFakeData() {

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
		
		List<CourseSLOs> slos = course_SLOsRepository.findAll();
		if (!slos.iterator().hasNext()) {
			course_SLOsRepository.save(new CourseSLOs("CHEM2016", "true", "true", "true", "true", "true"));
			course_SLOsRepository.save(new CourseSLOs("CSCI4098", "true", "true", "true", "false", "false"));
			course_SLOsRepository.save(new CourseSLOs("MATH2050", "true", "true", "false", "false", "true"));
			course_SLOsRepository.save(new CourseSLOs("MATH1040", "true", "false", "true", "false", "true"));
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
			data.add(new CourseSLOsInfo(courseSLOs.getCourseId(), getCourseTitle(courses, courseSLOs.getCourseId()),
					thiscourse.getSemester() + " " + thiscourse.getYear(), getInstructorName(instructors, thiscourse), getSLOName(slolist, 1) + ": " + courseSLOs.getSlo1(), getSLOName(slolist, 2) + ": " + courseSLOs.getSlo2(), getSLOName(slolist, 3) + ": " + courseSLOs.getSlo3(), getSLOName(slolist, 4) + ": " + courseSLOs.getSlo4(), getSLOName(slolist, 5) + ": " + courseSLOs.getSlo5()));
		}

		return data;
	}

	private String getCourseTitle(List<Course> courses, String courseID) {
		for (Course course : courses) {
			if (course.getCourseNumAndSection().equals(courseID)) {
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
	
	private String getSLOName(List<SLOs> slos, int SLONum) {
		for (SLOs SLOs : slos) {
			if (SLOs.getId() == SLONum) {
				return SLOs.getSloName();
			}
		}

		return "Bad SLO Name";
	}

}
