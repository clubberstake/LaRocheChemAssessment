package laroche.chem.assessment.restApp;

import java.util.ArrayList;
import java.util.List;
import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import laroche.chem.assessment.repositories.StudentRepository;
import laroche.chem.assessment.responseObjects.StudentInfoForBioAndAdmissionsPlacementTab;
import laroche.chem.assessment.entities.Student;

@RestController
public class StudentController {

	@Autowired
	private StudentRepository studentRepository;
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping("/studentInfoForBioAndAdmissionsPlacementTab")
	public ArrayList<StudentInfoForBioAndAdmissionsPlacementTab> getMiscNotesInfo() {
		return generateFakeBioAndAdmissionsPlacementTabData();
	}
	
	private ArrayList<StudentInfoForBioAndAdmissionsPlacementTab> generateFakeBioAndAdmissionsPlacementTabData() {
		
		List<Student> students = studentRepository.findAll();
		if(!students.iterator().hasNext()) {
			String time = LocalDateTime.now().toString();
			studentRepository.save(new Student("Nathan Drake", "Archeology", "2016", "Spring", "A", "Rock Climbing", "Commuter", "Honors", "No International", "/photo/destination", time));
			students = studentRepository.findAll();
		}
		
		ArrayList<StudentInfoForBioAndAdmissionsPlacementTab> studentData = new ArrayList<StudentInfoForBioAndAdmissionsPlacementTab>();
		
		for(Student student : students) {
			studentData.add(new StudentInfoForBioAndAdmissionsPlacementTab(student.getStudentName(), student.getStudentMajor(), student.getStudentYear(), student.getStudentSemester(), student.getStudentMathGrade(), student.getStudentAthletics(), student.getStudentHousingStatus(), student.getStudentHonors(), student.getInternationalStudent(), student.getStudentPhoto(), student.getTime()));
		}
		
		return studentData;
	}
	
}
