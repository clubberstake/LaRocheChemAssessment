package laroche.chem.assessment.restApp;

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
import laroche.chem.assessment.entities.Instructor;
import laroche.chem.assessment.repositories.InstructorRepository;
import laroche.chem.assessment.responseObjects.instructorInfo;

@RestController
public class instructorController {
	
	@Autowired
	private InstructorRepository instructorRepository;

	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping("/instructors")
	public ArrayList<instructorInfo> getInstructorInfo() {
		return generateFakeData();
	}
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/addInstructor")
 	public ResponseEntity<Void> addInstructor(@RequestBody Instructor instructor) {
 		System.out.println(instructor.getId());
 		instructorRepository.save(instructor);
			return ResponseEntity.status(HttpStatus.CONFLICT).build(); 
	}


	private ArrayList<instructorInfo> generateFakeData() {

		List<Instructor> instructors = instructorRepository.findAll();
		if (!instructors.iterator().hasNext()) {
			instructorRepository.save(new Instructor("Dr. D.T. Fujito, Professor/Chair of Chemistry"));
			instructorRepository.save(new Instructor("Mr. Gregory Lang, Adjunct Faculty of Computer Science"));
			instructorRepository.save(new Instructor("Dr. Brian Smith, Adjunct Faculty of Mathematics"));
			instructorRepository.save(new Instructor("Mr. William Rushmore, Adjunct Faculty of Mathematics"));
			instructors = instructorRepository.findAll();
		}

		ArrayList<instructorInfo> data = new ArrayList<instructorInfo>();

		for (Instructor instructor : instructors) {
			data.add(new instructorInfo(instructor.getId(), instructor.getName()));
		}

		return data;
	}
}
