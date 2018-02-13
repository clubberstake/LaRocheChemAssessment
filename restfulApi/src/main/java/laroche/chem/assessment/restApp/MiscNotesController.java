package laroche.chem.assessment.restApp;

import java.util.ArrayList;
import java.util.List;
import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import laroche.chem.assessment.repositories.MiscNotesRepository;
import laroche.chem.assessment.repositories.StudentRepository;
import laroche.chem.assessment.responseObjects.NotesInfoForMiscNotesTab;
import laroche.chem.assessment.responseObjects.StudentInfoForBioAndAdmissionsPlacementTab;
import laroche.chem.assessment.entities.Student;
import laroche.chem.assessment.entities.MiscNotes;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "/notes")
public class MiscNotesController {
	
	@Autowired
	private StudentRepository studentRepository;
	@Autowired
	private MiscNotesRepository miscNotesRepository;

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
	
	private ArrayList<NotesInfoForMiscNotesTab> generateFakeMiscNotesTabData() {
		
		// Generate Data for student table if it does not exist already
		List<Student> students = studentRepository.findAll();
		if(!students.iterator().hasNext()) {
			String time = LocalDateTime.now().toString();
			studentRepository.save(new Student("John Nicholson", "Computer Science", "2018", "Spring", "A", "Cross Country", "Commuter", "No Honors", "No International", "/photo/destination", time));
			studentRepository.save(new Student("Robb Stark", "History", "2017", "Fall", "B", "Fencing", "Resident", "Honors", "Westeros", "/photo/destination", time));
			studentRepository.save(new Student("Nathan Drake", "Archeology", "2016", "Spring", "A", "Rock Climbing", "Commuter", "Honors", "No International", "/photo/destination", time));
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
