package laroche.chem.assessment.entities;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
public class SemesterReview {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "student_id")
	private Student student;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "class_id")
	private Classes classes;
	
	private Boolean mliCoursePace;
	private Boolean mliLackOfMindset;	
	private Boolean mliLackOfInterestCuriousity;
	private Boolean mliLackOfEffortFocus;
	private Boolean mliPoorTimeManagement;
	private Boolean mliHealthIssues;
	private Boolean mliComplacence;
	private Boolean mliEmploymentHours;
	private Boolean mliOther;
	private String mliOtherIssues;
	private Boolean esliCoursePace;
	private Boolean esliLackOfMindset;	
	private Boolean esliLackOfInterestCuriosity;
	private Boolean esliPoorTimeManagement;
	private Boolean esliHealthIssues;
	private Boolean esliComplacence;
	private Boolean esliEmploymentHours;
	private Boolean esliOther;
	private String esliotherIssues;
	private String midSemesterExtentInstructor;
	private String endSemesterExtentInstructor;
	private String midSemesterInstructorRecommendations;
	private String endSemesterInstructorRecommendations;

	public SemesterReview() {
	}

	public SemesterReview(Student student, Classes classes, Boolean mliCoursePace, Boolean mliLackOfMindset,
			Boolean mliLackOfInterestCuriousity, Boolean mliLackOfEffortFocus, Boolean mliPoorTimeManagement,
			Boolean mliHealthIssues, Boolean mliComplacence, Boolean mliEmploymentHours, Boolean mliOther,
			String mliOtherIssues, Boolean esliCoursePace, Boolean esliLackOfMindset,Boolean esliLackOfInterestCuriosity, Boolean esliPoorTimeManagement, Boolean esliHealthIssues,
			Boolean esliComplacence, Boolean esliEmploymentHours, Boolean esliOther, String esliotherIssues,
			String midSemesterExtentInstructor, String endSemesterExtentInstructor,
			String midSemesterInstructorRecommendations, String endSemesterInstructorRecommendations) {
		this.setClassesID(classes);
		this.setStudentID(student);
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
		this.esliLackOfInterestCuriosity = esliLackOfInterestCuriosity;
		this.esliLackOfMindset = esliLackOfMindset;
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

	public long getID() {
		return id;
	}
	public Boolean getEsliLackOfMindset() {
		return esliLackOfMindset;
	}

	public void setEsliLackOfMindset(Boolean esliLackOfMindset) {
		this.esliLackOfMindset = esliLackOfMindset;
	}

	public Boolean getEsliLackOfInterestCuriosity() {
		return esliLackOfInterestCuriosity;
	}

	public void setEsliLackOfInterestCuriosity(Boolean esliLackOfInterestCuriosity) {
		this.esliLackOfInterestCuriosity = esliLackOfInterestCuriosity;
	}

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

	public Student getStudentID() {
		return student;
	}

	public void setStudentID(Student student) {
		this.student = student;
	}

	public Classes getClassesID() {
		return classes;
	}

	public void setClassesID(Classes classes) {
		this.classes = classes;
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
	public Boolean getMliCoursePace() {
		return mliCoursePace;
	}

	public void setMliCoursePace(Boolean mliCoursePace) {
		this.mliCoursePace = mliCoursePace;
	}

}
