package laroche.chem.assessment.restApp;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mysql.fabric.xmlrpc.base.Array;

import laroche.chem.assessment.entities.ClassRoster;
import laroche.chem.assessment.entities.Classes;
import laroche.chem.assessment.entities.Course;
import laroche.chem.assessment.repositories.ClassRepository;
import laroche.chem.assessment.repositories.ClassRosterRepo;
import laroche.chem.assessment.repositories.CourseRepository;
import laroche.chem.assessment.repositories.StudentRepository;
import laroche.chem.assessment.responseObjects.ClassRosterResponseObject;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/studentRoster")
public class ClassRosterController {
	@Autowired
	private StudentRepository studentRepository;
	
	@Autowired
	private ClassRepository classRepository;
	
	@Autowired
	private CourseRepository courseRepository;
	
	@Autowired
	private ClassRosterRepo classRosterRepo;
	
	public ArrayList<ClassRosterResponseObject> getClassRoster(){
		return getClassRosterData();
	}
	
	
	
	@GetMapping("/getStudentRoster")
	public ArrayList<ClassRosterResponseObject> getClassRosterData(){
		List<Course> courses = courseRepository.findAll();
		if (!courses.iterator().hasNext()) {
			courseRepository.save(new Course("CHEM2016", "Organic Chemistry II Lecture", "Spring", "2017", 1));
			courseRepository.save(new Course("CSCI4098", "Capstone", "Fall", "2017", 2));
			courseRepository.save(new Course("MATH2050", "Discrete Mathematics I", "Fall", "2017", 3));
			courseRepository.save(new Course("MATH1040", "Probability & Statistics", "Fall", "2017", 4));
			courses = courseRepository.findAll();
		}
		
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
		
		ClassRoster item = new ClassRoster(1, 6);
		classRosterRepo.save(item);
		
		List<ClassRoster> rosters = classRosterRepo.findAll();
		ArrayList<ClassRosterResponseObject> classRosterDataList = new ArrayList<>();
		for(ClassRoster roster: rosters){
			classRosterDataList.add(new ClassRosterResponseObject(roster.getStudentId(), roster.getClassId(), getCourseTitle(courses, roster)));
		}
		return classRosterDataList;
		
		
		
	}
	private String getCourseTitle(List<Course> courses, ClassRoster classRoster) {
		
		for (Course course : courses) {
			if (course.getId() == classRoster.getClassId()) {
				return course.getCourseNumAndSection();
			}
		}

		return "Bad Course Name";
	}
}
