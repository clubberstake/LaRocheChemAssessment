package laroche.chem.assessment.restApp;

import java.util.ArrayList;
import java.util.List;
import java.net.URI;
import java.net.URISyntaxException;
import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import laroche.chem.assessment.repositories.StudentRepository;
import laroche.chem.assessment.responseObjects.StudentInfoForBioAndAdmissionsPlacementTab;
import laroche.chem.assessment.entities.Student;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "/student")
public class StudentController {

	@Autowired
	private StudentRepository studentRepository;

	@GetMapping("/studentInfoForBioAndAdmissionsPlacementTab")
	public ArrayList<StudentInfoForBioAndAdmissionsPlacementTab> getMiscNotesInfo() {
		return generateFakeBioAndAdmissionsPlacementTabData();
	}

	@GetMapping("/studentInfoForBioAndAdmissionsPlacementTab/studentId={studentId}")
	public StudentInfoForBioAndAdmissionsPlacementTab getMiscNotesInfo(@PathVariable int studentId) {
		Student student = studentRepository.findOne((long) studentId);
		return new StudentInfoForBioAndAdmissionsPlacementTab(student.getStudentName(), student.getStudentMajor(),
				student.getStudentYear(), student.getStudentSemester(), student.getStudentMathGrade(),
				student.getStudentAthletics(), student.getStudentHousingStatus(), student.getStudentHonors(),
				student.getInternationalStudent(), student.getStudentPhoto(), student.getTime());
	}

	@GetMapping("/studentInfoForBioAndAdmissionsPlacementTab/studentName={studentName}")
	public StudentInfoForBioAndAdmissionsPlacementTab getMiscNotesInfo(@PathVariable String studentName) {
		List<Student> students = studentRepository.findByStudentName(studentName);
		Student student = students.get(0);
		return new StudentInfoForBioAndAdmissionsPlacementTab(student.getStudentName(), student.getStudentMajor(),
				student.getStudentYear(), student.getStudentSemester(), student.getStudentMathGrade(),
				student.getStudentAthletics(), student.getStudentHousingStatus(), student.getStudentHonors(),
				student.getInternationalStudent(), student.getStudentPhoto(), student.getTime());
	}

	@PostMapping("/addStudent")
	public ResponseEntity<Void> addStudent(@RequestBody Student student) {
		System.out.println(student.getId());
		studentRepository.save(student);

		try {
			return ResponseEntity.created(new URI("/user/" + student.getId())).build();
		} catch (URISyntaxException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.CONFLICT).build();
		}
	}
	
	@PutMapping("/updateStudent")
	public ResponseEntity<Void> updateStudent(@RequestBody Student student) {
		// Data Test Prints:
		System.out.println(student.getStudentSemester());
		System.out.println(student.getId());
		System.out.println(studentRepository.exists(student.getId()));
		System.out.println(student.getStudentAthletics());
		System.out.println(student.getStudentMajor());
		
		studentRepository.save(student);
		try {
			return ResponseEntity.created(new URI("/updated/" + student.getId())).build();
		}
		catch(URISyntaxException e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.CONFLICT).build();
		}
	}

	private ArrayList<StudentInfoForBioAndAdmissionsPlacementTab> generateFakeBioAndAdmissionsPlacementTabData() {

		List<Student> students = studentRepository.findAll();
		if (!students.iterator().hasNext()) {
			String time = LocalDateTime.now().toString();
			studentRepository.save(new Student("Nathan Drake", "Archeology", "2016", "Spring", "A", "Rock Climbing",
					"Commuter", "Honors", "No International", "/photo/destination", time));
			students = studentRepository.findAll();
		}

		ArrayList<StudentInfoForBioAndAdmissionsPlacementTab> studentData = new ArrayList<StudentInfoForBioAndAdmissionsPlacementTab>();

		for (Student student : students) {
			studentData.add(new StudentInfoForBioAndAdmissionsPlacementTab(student.getStudentName(),
					student.getStudentMajor(), student.getStudentYear(), student.getStudentSemester(),
					student.getStudentMathGrade(), student.getStudentAthletics(), student.getStudentHousingStatus(),
					student.getStudentHonors(), student.getInternationalStudent(), student.getStudentPhoto(),
					student.getTime()));
		}

		return studentData;
	}

}
