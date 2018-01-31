package laroche.chem.assessment.responseObjects;

import java.time.LocalDateTime;

public class NotesInfoForMiscNotesTab {

	private String studentName;
	private String time = LocalDateTime.now().toString();
	private String notes;
	private String author;
	
	public NotesInfoForMiscNotesTab(String studentName, String notes, String author, String time) {
		this.studentName = studentName;
		this.notes = notes;
		this.author = author;
		this.time = time;
	}

	public String getStudentName() {
		return studentName;
	}

	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public String getNotes() {
		return notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}
	
	
}
