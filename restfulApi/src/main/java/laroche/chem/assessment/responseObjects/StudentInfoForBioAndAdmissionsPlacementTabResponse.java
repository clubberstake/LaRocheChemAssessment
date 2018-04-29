package laroche.chem.assessment.responseObjects;

import laroche.chem.assessment.entities.FileStorage;

public class StudentInfoForBioAndAdmissionsPlacementTabResponse {

	private FileStorage file;
	
	private String studentName;
	private String studentMajor;
	private String studentYear;
	private String studentSemester;	
	private String studentMathGrade;
	private String studentAthletics;
	private String studentHousingStatus;
	private String studentHonors;
	private String internationalStudent;
	
	private String time;
	private String author;
	
	public StudentInfoForBioAndAdmissionsPlacementTabResponse(FileStorage file, String studentName, String studentMajor, String studentYear, String studentSemester,
				String studentMathGrade, String studentAthletics, String studentHousingStatus, String studentHonors, String internationalStudent, String time, String author) {
		this.setFile(file);
		this.studentName = studentName;
		this.studentMajor = studentMajor;
		this.studentYear = studentYear;
		this.studentSemester = studentSemester;
		this.studentMathGrade = studentMathGrade;
		this.studentAthletics = studentAthletics;
		this.studentHousingStatus = studentHousingStatus;
		this.studentHonors = studentHonors;
		this.internationalStudent = internationalStudent;
		this.time = time;
		this.author = author;
	}
	
	public String getStudentName() {
		return studentName;
	}
	
	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}
	
	public String getStudentMajor() {
		return studentMajor;
	}
	
	public void setStudentMajor(String studentMajor) {
		this.studentMajor = studentMajor;
	}
	
	public String getStudentYear() {
		return studentYear;
	}
	
	public void setStudentYear(String studentYear) {
		this.studentYear = studentYear;
	}
	
	public String getStudentSemester() {
		return studentSemester;
	}
	
	public void setStudentSemester(String studentSemester) {
		this.studentSemester = studentSemester;
	}
	
	public String getStudentMathGrade() {
		return studentMathGrade;
	}
	
	public void setStudentMathGrade(String studentMathGrade) {
		this.studentMathGrade = studentMathGrade;
	}
	
	public String getStudentAthletics() {
		return studentAthletics;
	}
	
	public void setStudentAthletics(String studentAthletics) {
		this.studentAthletics = studentAthletics;
	}
	
	public String getStudentHousingStatus() {
		return studentHousingStatus;
	}
	
	public void setStudentHousingStatus(String studentHousingStatus) {
		this.studentHousingStatus = studentHousingStatus;
	}
	
	public String getStudentHonors() {
		return studentHonors;
	}
	
	public void setStudentHonors(String studentHonors) {
		this.studentHonors = studentHonors;
	}
	
	public String getInternationalStudent() {
		return internationalStudent;
	}
	
	public void setInternationalStudent(String internationalStudent) {
		this.internationalStudent = internationalStudent;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public FileStorage getFile() {
		return file;
	}

	public void setFile(FileStorage file) {
		this.file = file;
	}
	
	public String getAuthor () {
		return author;
	}
	
	public void setAuthor (String author) {
		this.author = author;
	}
	
}
