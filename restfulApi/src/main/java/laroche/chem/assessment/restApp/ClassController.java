package laroche.chem.assessment.restApp;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
public class ClassController {
	
	@Autowired
	private ClassRepository classRepository;
	@Autowired
	private InstructorRepository instructorRepository;
	@Autowired
	private CourseRepository courseRepository;
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping("/classInfo")
	public ArrayList<ClassInfo> getClassInfo() {
		return generateFakeData();
	}
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/addClass")
 	public ResponseEntity<Void> addClass(@RequestBody Classes classes) {
 		System.out.println(classes.getId());
 		classRepository.save(classes);
			return ResponseEntity.status(HttpStatus.CONFLICT).build(); 
	}
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/saveSyllabus")
 	public ResponseEntity<Void> saveSyllabus(@RequestBody String syllabus) throws FileNotFoundException, IOException{
 		System.out.println(syllabus);
 		
 		try
 		{
 			PrintWriter writer = new PrintWriter(syllabus, "UTF-8");
 			writer.println("The first line");
 			writer.println("The second line");
 			writer.close();
 		}
 		catch (FileNotFoundException e)
 		{
 			
 		}
			return ResponseEntity.status(HttpStatus.CONFLICT).build(); 
	}

		private Course thiscourse;
		
	private ArrayList<ClassInfo> generateFakeData() {

		List<Classes> classes = classRepository.findAll();
		if (!classes.iterator().hasNext()) {
			classRepository.save(new Classes(1, "/SP2017/CHEM2016/01Syllabus.txt", "SP2017", "01", 1));
			classRepository.save(new Classes(1, "/SP2016/CHEM2016/01Syllabus.txt", "FA2016", "01", 1));
			classRepository.save(new Classes(3, "/SP2017/MATH2050/01Syllabus.txt", "SP2017", "01", 1));
			classRepository.save(new Classes(2, "/SP2017/CSCI4098/01Syllabus.txt", "SP2017", "01", 2));
			classRepository.save(new Classes(4, "/SP2017/MATH1040/01Syllabus.txt", "SP2017", "01", 4));
			classRepository.save(new Classes(1, "/SP2018/CHEM2016/01Syllabus.txt", "SP2018", "01", 1));
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
			data.add(new ClassInfo(classs.getId(), classs.getCourseId(), getCourseId(courses, classs), classs.getSyllabus(), classs.getSection(), classs.getSemester(), getCourseTitle(courses, classs), getInstructorId(instructors, thiscourse), getInstructorName(instructors, thiscourse)));
		}

		return data;
	}
	
	private String getCourseTitle(List<Course> courses, Classes classs) {
		for (Course course : courses) {
			if (course.getId() == classs.getCourseId()) {
				thiscourse = course;
				return course.getCourseName();
			}
		}

		return "Bad Course Name";
	}
	
	private String getCourseId(List<Course> courses, Classes classs) {
		for (Course course : courses) {
			if (course.getId() == classs.getCourseId()) {
				thiscourse = course;
				return course.getCourseNumAndSection();
			}
		}

		return "Bad Course ID";
	}
	
	private String getInstructorName(List<Instructor> instructors, Course course) {
		for (Instructor instructor : instructors) {
			if (instructor.getId() == course.getInstructorId()) {
				return instructor.getName();
			}
		}

		return "Bad Instructor Name";
	}
	
	private long getInstructorId(List<Instructor> instructors, Course course) {
		for (Instructor instructor : instructors) {
			if (instructor.getId() == course.getInstructorId()) {
				return instructor.getId();
			}
		}

		return 0;
	}

}
