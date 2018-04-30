package laroche.chem.assessment.responseObjects;

import laroche.chem.assessment.entities.Classes;
import laroche.chem.assessment.entities.Student;

public class SemesterReviewResponse {
	private Student students;
	private Classes classes;
	public Boolean mliCoursePace;
	public Boolean mliLackOfMindset;	
	public Boolean mliLackOfInterestCuriousity;
	public Boolean mliLackOfEffortFocus;
	public Boolean mliPoorTimeManagement;
	public Boolean mliHealthIssues;
	public Boolean mliComplacence;
	public Boolean mliEmploymentHours;
	public Boolean mliOther;
	public String mliOtherIssues;
	public Boolean esliCoursePace;

	public Boolean esliLackOfMindset;	
	public Boolean esliLackOfInterestCuriousity;
	public Boolean esliPoorTimeManagement;
	public Boolean esliHealthIssues;
	public Boolean esliComplacence;
	public Boolean esliEmploymentHours;
	public Boolean esliOther;
	public String esliotherIssues;
	private String midSemesterExtentInstructor;
	private String endSemesterExtentInstructor;
	private String midSemesterInstructorRecommendations;
	private String endSemesterInstructorRecommendations;

	public SemesterReviewResponse(Student students, Classes classes, Boolean mliCoursePace, Boolean mliLackOfMindset,
			Boolean mliLackOfInterestCuriousity, Boolean mliLackOfEffortFocus, Boolean mliPoorTimeManagement,
			Boolean mliHealthIssues, Boolean mliComplacence, Boolean mliEmploymentHours, Boolean mliOther,
			String mliOtherIssues, Boolean esliCoursePace, Boolean esliLackOfMindset,Boolean esliLackOfInterestCuriosity, Boolean esliPoorTimeManagement, Boolean esliHealthIssues,
			Boolean esliComplacence, Boolean esliEmploymentHours, Boolean esliOther, String esliotherIssues,
			String midSemesterExtentInstructor, String endSemesterExtentInstructor,
			String midSemesterInstructorRecommendations, String endSemesterInstructorRecommendations) {
		this.setClasses(classes);
		this.setStudent(students);
		this.mliCoursePace = mliCoursePace;
		this.mliLackOfMindset = mliLackOfMindset;
		this.mliLackOfInterestCuriousity = mliLackOfInterestCuriousity;
		this.mliLackOfEffortFocus = mliLackOfEffortFocus;
		this.mliPoorTimeManagement = mliPoorTimeManagement;
		this.mliHealthIssues = mliHealthIssues;
		this.mliComplacence = mliComplacence;
		this.mliEmploymentHours = mliEmploymentHours;
		this.mliOther = mliOther;
		this.mliOtherIssues = mliOtherIssues;
		this.esliCoursePace = esliCoursePace;
		this.esliLackOfMindset = esliLackOfMindset;
		this.esliLackOfInterestCuriousity = esliLackOfInterestCuriosity;
		this.esliPoorTimeManagement = esliPoorTimeManagement;
		this.esliHealthIssues = esliHealthIssues;
		this.esliComplacence = esliComplacence;
		this.esliEmploymentHours = esliEmploymentHours;
		this.esliOther = esliOther;
		this.esliotherIssues = esliotherIssues;
		
		this.midSemesterExtentInstructor = midSemesterExtentInstructor;
		this.endSemesterExtentInstructor = endSemesterExtentInstructor;
		this.midSemesterInstructorRecommendations = midSemesterInstructorRecommendations;
		this.endSemesterInstructorRecommendations = endSemesterInstructorRecommendations;
	}

	public Boolean getMliCoursePace() {
		return mliCoursePace;
	}

	public Boolean getEsliLackOfMindset() {
		return esliLackOfMindset;
	}

	public void setEsliLackOfMindset(Boolean esliLackOfMindset) {
		this.esliLackOfMindset = esliLackOfMindset;
	}

	public Boolean getEsliLackOfInterestCuriousity() {
		return esliLackOfInterestCuriousity;
	}

	public void setEsliLackOfInterestCuriousity(Boolean esliLackOfInterestCuriousity) {
		this.esliLackOfInterestCuriousity = esliLackOfInterestCuriousity;
	}


	public void setMliCoursePace(Boolean mliCoursePace) {
		this.mliCoursePace = mliCoursePace;
	}



	public Boolean getMliLackOfMindset() {
		return mliLackOfMindset;
	}



	public void setMliLackOfMindset(Boolean mliLackOfMindset) {
		this.mliLackOfMindset = mliLackOfMindset;
	}



	public Boolean getMliLackOfInterestCuriousity() {
		return mliLackOfInterestCuriousity;
	}



	public void setMliLackOfInterestCuriousity(Boolean mliLackOfInterestCuriousity) {
		this.mliLackOfInterestCuriousity = mliLackOfInterestCuriousity;
	}



	public Boolean getMliLackOfEffortFocus() {
		return mliLackOfEffortFocus;
	}



	public void setMliLackOfEffortFocus(Boolean mliLackOfEffortFocus) {
		this.mliLackOfEffortFocus = mliLackOfEffortFocus;
	}



	public Boolean getMliPoorTimeManagement() {
		return mliPoorTimeManagement;
	}



	public void setMliPoorTimeManagement(Boolean mliPoorTimeManagement) {
		this.mliPoorTimeManagement = mliPoorTimeManagement;
	}



	public Boolean getMliHealthIssues() {
		return mliHealthIssues;
	}



	public void setMliHealthIssues(Boolean mliHealthIssues) {
		this.mliHealthIssues = mliHealthIssues;
	}



	public Boolean getMliComplacence() {
		return mliComplacence;
	}



	public void setMliComplacence(Boolean mliComplacence) {
		this.mliComplacence = mliComplacence;
	}



	public Boolean getMliEmploymentHours() {
		return mliEmploymentHours;
	}



	public void setMliEmploymentHours(Boolean mliEmploymentHours) {
		this.mliEmploymentHours = mliEmploymentHours;
	}



	public Boolean getMliOther() {
		return mliOther;
	}



	public void setMliOther(Boolean mliOther) {
		this.mliOther = mliOther;
	}



	public String getMliOtherIssues() {
		return mliOtherIssues;
	}



	public void setMliOtherIssues(String mliOtherIssues) {
		this.mliOtherIssues = mliOtherIssues;
	}



	public Boolean getEsliCoursePace() {
		return esliCoursePace;
	}



	public void setEsliCoursePace(Boolean esliCoursePace) {
		this.esliCoursePace = esliCoursePace;
	}



	public Boolean getEsliPoorTimeManagement() {
		return esliPoorTimeManagement;
	}



	public void setEsliPoorTimeManagement(Boolean esliPoorTimeManagement) {
		this.esliPoorTimeManagement = esliPoorTimeManagement;
	}



	public Boolean getEsliHealthIssues() {
		return esliHealthIssues;
	}



	public void setEsliHealthIssues(Boolean esliHealthIssues) {
		this.esliHealthIssues = esliHealthIssues;
	}



	public Boolean getEsliComplacence() {
		return esliComplacence;
	}



	public void setEsliComplacence(Boolean esliComplacence) {
		this.esliComplacence = esliComplacence;
	}



	public Boolean getEsliEmploymentHours() {
		return esliEmploymentHours;
	}



	public void setEsliEmploymentHours(Boolean esliEmploymentHours) {
		this.esliEmploymentHours = esliEmploymentHours;
	}



	public Boolean getEsliOther() {
		return esliOther;
	}



	public void setEsliOther(Boolean esliOther) {
		this.esliOther = esliOther;
	}



	public String getEsliotherIssues() {
		return esliotherIssues;
	}



	public void setEsliotherIssues(String esliotherIssues) {
		this.esliotherIssues = esliotherIssues;
	}


//
//	public long getStudentId() {
//		return studentId;
//	}
//
//
//
//	public void setStudentId(long studentId) {
//		this.studentId = studentId;
//	}
//
//
//
//	public long getClassId() {
//		return classId;
//	}
//
//
//
//	public void setClassId(long classId) {
//		this.classId = classId;
//	}

	public String getMidSemesterExtentInstructor() {
		return midSemesterExtentInstructor;
	}

	public void setMidSemesterExtentInstructor(String midSemesterExtentInstructor) {
		this.midSemesterExtentInstructor = midSemesterExtentInstructor;
	}

	public String getEndSemesterExtentInstructor() {
		return endSemesterExtentInstructor;
	}

	public void setEndSemesterExtentInstructor(String endSemesterExtentInstructor) {
		this.endSemesterExtentInstructor = endSemesterExtentInstructor;
	}

	public String getMidSemesterInstructorRecommendations() {
		return midSemesterInstructorRecommendations;
	}

	public void setMidSemesterInstructorRecommendations(String midSemesterInstructorRecommendations) {
		this.midSemesterInstructorRecommendations = midSemesterInstructorRecommendations;
	}

	public String getEndSemesterInstructorRecommendations() {
		return endSemesterInstructorRecommendations;
	}

	public void setEndSemesterInstructorRecommendations(String endSemesterInstructorRecommendations) {
		this.endSemesterInstructorRecommendations = endSemesterInstructorRecommendations;
	}

	public Student getStudent() {
		return students;
	}

	public void setStudent(Student student) {
		this.students = student;
	}

	public Classes getClasses() {
		return classes;
	}

	public void setClasses(Classes classes) {
		this.classes = classes;
	}

	
}
