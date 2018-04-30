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
import org.springframework.web.bind.annotation.RestController;

import laroche.chem.assessment.repositories.FileStorageRepository;
import laroche.chem.assessment.repositories.StudentRepository;
import laroche.chem.assessment.responseObjects.StudentInfoForBioAndAdmissionsPlacementTabResponse;
import laroche.chem.assessment.entities.FileStorage;
import laroche.chem.assessment.entities.Student;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "/student")
public class StudentController {

	@Autowired
	private StudentRepository studentRepository;

	@Autowired
	private FileStorageRepository fileStorageRepository;

	@GetMapping("/studentInfoForBioAndAdmissionsPlacementTab")
	public ArrayList<StudentInfoForBioAndAdmissionsPlacementTabResponse> getMiscNotesInfo() {
		return generateFakeBioAndAdmissionsPlacementTabData();
	}

	@GetMapping("/studentInfoForBioAndAdmissionsPlacementTab/studentId={studentId}")
	public StudentInfoForBioAndAdmissionsPlacementTabResponse getMiscNotesInfo(@PathVariable int studentId) {
		Student student = studentRepository.findOne((long) studentId);
		if (student != null) {
			return new StudentInfoForBioAndAdmissionsPlacementTabResponse(student.getFile(), student.getStudentName(),
					student.getStudentMajor(), student.getStudentYear(), student.getStudentSemester(),
					student.getStudentMathGrade(), student.getStudentAthletics(), student.getStudentHousingStatus(),
					student.getStudentHonors(), student.getInternationalStudent(), student.getTime(), student.getAuthor());
		}
		return null;
	}

	@GetMapping("/studentInfoForBioAndAdmissionsPlacementTab/studentName={studentName}")
	public StudentInfoForBioAndAdmissionsPlacementTabResponse getMiscNotesInfo(@PathVariable String studentName) {
		List<Student> students = studentRepository.findByStudentName(studentName);
		Student student = students.get(0);
		return new StudentInfoForBioAndAdmissionsPlacementTabResponse(student.getFile(), student.getStudentName(),
				student.getStudentMajor(), student.getStudentYear(), student.getStudentSemester(),
				student.getStudentMathGrade(), student.getStudentAthletics(), student.getStudentHousingStatus(),
				student.getStudentHonors(), student.getInternationalStudent(), student.getTime(), student.getAuthor());
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
		
		if (studentRepository.exists(student.getId())) {
			if (student.getFile() != null && fileStorageRepository.exists(student.getFile().getId())) {
				FileStorage fileUpdate = fileStorageRepository.findOne(student.getFile().getId());
				fileUpdate.setFileContent(student.getFile().getFileContent());
				fileUpdate.setFileName(student.getFile().getFileName());
				fileStorageRepository.save(fileUpdate);
			} 

			Student studentUpdate = studentRepository.findOne(student.getId());
			studentUpdate.setStudentName(student.getStudentName());
			studentUpdate.setFile(student.getFile());
			studentUpdate.setTime(student.getTime());
			studentUpdate.setStudentMajor(student.getStudentMajor());
			studentUpdate.setStudentYear(student.getStudentYear());
			studentUpdate.setStudentSemester(student.getStudentSemester());
			studentUpdate.setStudentMathGrade(student.getStudentMathGrade());
			studentUpdate.setStudentAthletics(student.getStudentAthletics());
			studentUpdate.setStudentHousingStatus(student.getStudentHousingStatus());
			studentUpdate.setStudentHonors(student.getStudentHonors());
			studentUpdate.setInternationalStudent(student.getInternationalStudent());
			studentUpdate.setAuthor(student.getAuthor());
			
			studentRepository.save(studentUpdate);
		} else {
			fileStorageRepository.save(student.getFile());
			studentRepository.save(student);
		}
		try {
			return ResponseEntity.created(new URI("/updated/" + student.getId())).build();
		} catch (URISyntaxException e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.CONFLICT).build();
		}
	}

	private ArrayList<StudentInfoForBioAndAdmissionsPlacementTabResponse> generateFakeBioAndAdmissionsPlacementTabData() {

		List<Student> students = studentRepository.findAll();
		if (!students.iterator().hasNext()) {
			String time = LocalDateTime.now().toString();
			FileStorage file = fileStorageRepository.findOne((long) 1);
			studentRepository.save(new Student(file, "Nathan Drake", "Archeology", "2016", "Spring", "A",
					"Rock Climbing", "Commuter", "Honors", "No International", time, "doritos@service.com"));
			students = studentRepository.findAll();
		}

		ArrayList<StudentInfoForBioAndAdmissionsPlacementTabResponse> studentData = new ArrayList<StudentInfoForBioAndAdmissionsPlacementTabResponse>();

		for (Student student : students) {
			studentData.add(new StudentInfoForBioAndAdmissionsPlacementTabResponse(student.getFile(),
					student.getStudentName(), student.getStudentMajor(), student.getStudentYear(),
					student.getStudentSemester(), student.getStudentMathGrade(), student.getStudentAthletics(),
					student.getStudentHousingStatus(), student.getStudentHonors(), student.getInternationalStudent(),
					student.getTime(), student.getAuthor()));
		}

		return studentData;
	}

}
