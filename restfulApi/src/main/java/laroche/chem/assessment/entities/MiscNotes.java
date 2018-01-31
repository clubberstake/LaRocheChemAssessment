package laroche.chem.assessment.entities;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class MiscNotes {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	private String notes;
	private String time;
	private String author;
	private long studentId;
	
	public MiscNotes() {}

	public MiscNotes(String notes, String author, long studentId, String time) {
		this.notes = notes;
		this.author = author;
		this.studentId = studentId;
		this.time = time;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNotes() {
		return notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public long getStudentId() {
		return studentId;
	}

	public void setStudentId(long studentId) {
		this.studentId = studentId;
	}
	
}
