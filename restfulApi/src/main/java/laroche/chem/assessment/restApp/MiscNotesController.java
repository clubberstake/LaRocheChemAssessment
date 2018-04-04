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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import laroche.chem.assessment.repositories.FileStorageRepository;
import laroche.chem.assessment.repositories.MiscNotesRepository;
import laroche.chem.assessment.repositories.StudentRepository;
import laroche.chem.assessment.responseObjects.NotesInfoForMiscNotesTab;
import laroche.chem.assessment.entities.Student;
import laroche.chem.assessment.entities.FileStorage;
import laroche.chem.assessment.entities.MiscNotes;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "/notes")
public class MiscNotesController {
	
	@Autowired
	private StudentRepository studentRepository;
	@Autowired
	private MiscNotesRepository miscNotesRepository;
	@Autowired
	private FileStorageRepository fileStorageRepository;

	@GetMapping("/notesInfoForMiscNotesTab")
	public ArrayList<NotesInfoForMiscNotesTab> getMiscNotesInfo() {
		return generateFakeMiscNotesTabData();
	}
	
	@GetMapping("/notesInfoForMiscNotesTab/studentId={studentId}")
	public ArrayList<NotesInfoForMiscNotesTab> getMiscNotesInfo(@PathVariable int studentId) {
		List<MiscNotes> notes = miscNotesRepository.findByStudentId((long) studentId);
		List<Student> students = studentRepository.findAll();
		
		ArrayList<NotesInfoForMiscNotesTab> notesDataByStudentId = new ArrayList<NotesInfoForMiscNotesTab>();
		for(MiscNotes note : notes) {
			for(Student student : students) {
				if(student.getId() == note.getStudentId()) {
					notesDataByStudentId.add(new NotesInfoForMiscNotesTab(student.getStudentName(), note.getNotes(), note.getAuthor(), note.getTime()));
				}
			}
		}
		return notesDataByStudentId;
	}
	
	@PostMapping("/addNote")
	public ResponseEntity<Void> addNote(@RequestBody MiscNotes note) {
		miscNotesRepository.save(note);
		
		try {
			return ResponseEntity.created(new URI("/note/" + note.getId())).build();
		} catch (URISyntaxException e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.CONFLICT).build();
		}
	}
	
	private ArrayList<NotesInfoForMiscNotesTab> generateFakeMiscNotesTabData() {
		
		// Generate Data for student table if it does not exist already
		List<Student> students = studentRepository.findAll();
		FileStorage file = fileStorageRepository.findOne((long) 1);
		if(!students.iterator().hasNext()) {
			String time = LocalDateTime.now().toString();
			studentRepository.save(new Student(file, "John Nicholson", "Computer Science", "2018", "Spring", "A", "Cross Country", "Commuter", "No Honors", "No International", time));
			studentRepository.save(new Student(file, "Robb Stark", "History", "2017", "Fall", "B", "Fencing", "Resident", "Honors", "Westeros", time));
			studentRepository.save(new Student(file, "Nathan Drake", "Archeology", "2016", "Spring", "A", "Rock Climbing", "Commuter", "Honors", "No International", time));
			students = studentRepository.findAll();
		}
		
		// Generate Data for miscNotes table if it does not exist already
		List<MiscNotes> notes = miscNotesRepository.findAll();
		if(!notes.iterator().hasNext()) {
			String time = LocalDateTime.now().toString();
			miscNotesRepository.save(new MiscNotes("This student has shown excelence in all classes.", "johnfnicholson123@gmail.com", 9, time));
			miscNotesRepository.save(new MiscNotes("This student has not returned from battle,", "stark@winteriscoming.com", 10, time));
			miscNotesRepository.save(new MiscNotes("This student will never return from battle,", "lanister@hearmeroar.com", 10, time));
			notes = miscNotesRepository.findAll();
		}
		
		// Generate specific data needed for miscNotes tab on web page
		ArrayList<NotesInfoForMiscNotesTab> notesData = new ArrayList<NotesInfoForMiscNotesTab>();
		
		for(MiscNotes note : notes) {
			notesData.add(new NotesInfoForMiscNotesTab(getStudentName(students, note), note.getNotes(), note.getAuthor(), note.getTime()));
		}
		
		return notesData;
	}
	
	// Grab a student's name based off of their associated note/notes
	private String getStudentName(List<Student> students, MiscNotes note) {
		for(Student student : students) {
			if (student.getId() == note.getStudentId()) {
				return student.getStudentName();
			}
		}
		
		return "Bad Student Name.";
	}
	
}
