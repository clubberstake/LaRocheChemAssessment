package laroche.chem.assessment.restApp;

import java.io.File;
import java.io.FileNotFoundException;
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
import laroche.chem.assessment.entities.FileStorage;
import laroche.chem.assessment.entities.Instructor;
import laroche.chem.assessment.repositories.ClassRepository;
import laroche.chem.assessment.repositories.CourseRepository;
import laroche.chem.assessment.repositories.FileStorageRepository;
import laroche.chem.assessment.repositories.InstructorRepository;
import laroche.chem.assessment.responseObjects.ClassInfo;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ClassController {
	
	@Autowired
	private ClassRepository classRepository;
	@Autowired
	private InstructorRepository instructorRepository;
	@Autowired
	private CourseRepository courseRepository;
	@Autowired
	private FileStorageRepository fileStorageRepository;

	
	@RequestMapping("/classInfo")
	public ArrayList<ClassInfo> getClassInfo() {
		return generateFakeData();
	}
	
	@PostMapping("/addClass")
 	public ResponseEntity<Void> addClass(@RequestBody Classes classes) {
 		System.out.println(classes.getId());
 		List<FileStorage> files = fileStorageRepository.findAll();
 		long id = files.get(files.size()-1).getId();
		FileStorage syllabus = fileStorageRepository.findOne(id);
		classes.setSyllabus(syllabus);
 		classRepository.save(classes);
			return ResponseEntity.status(HttpStatus.CONFLICT).build(); 
	}

	public static PrintWriter writer;
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/saveSyllabus")
 	public ResponseEntity<Void> saveSyllabus(@RequestBody String[] syllabus) throws FileNotFoundException {
 		System.out.println(syllabus[1]);
 		String[] filepath = syllabus[0].split("/");
 		String PATH = "src/main/java/laroche/chem/assessment/syllabus";
 				
 		for(int i = 0; i < filepath.length - 1; i++)
 		{
 	 		PATH = PATH + "/" + filepath[i];
 	 		File directory = new File(String.valueOf(PATH));

 	 		if(!directory.exists())
 	 		{
 	 		    directory.mkdir();
 	 		}
 		}
 		System.out.println(PATH);

 		writer = new PrintWriter(PATH + "/" + filepath[filepath.length - 1]);
 		writer.println(syllabus[1]);
 		writer.close();
		return ResponseEntity.status(HttpStatus.CONFLICT).build(); 
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

		for (Classes classs : classes) {
			data.add(new ClassInfo(classs.getId(), classs.getCourseId(), getCourseId(courses, classs), classs.getSyllabus(), classs.getSection(), classs.getSemester(), getCourseTitle(courses, classs), getInstructorId(instructors, classs), getInstructorName(instructors, classs)));
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
	
	private String getCourseId(List<Course> courses, Classes classs) {
		for (Course course : courses) {
			if (course.getId() == classs.getCourseId()) {
				return course.getCourseNumber();
			}
		}

		return "Bad Course ID";
	}
	
	private String getInstructorName(List<Instructor> instructors, Classes classs) {
		for (Instructor instructor : instructors) {
			if (instructor.getId() == classs.getInstructorId()) {
				return instructor.getName();
			}
		}

		return "Bad Instructor Name";
	}
	
	private long getInstructorId(List<Instructor> instructors, Classes classs) {
		for (Instructor instructor : instructors) {
			if (instructor.getId() == classs.getInstructorId()) {
				return instructor.getId();
			}
		}

		return 0;
	}

}
