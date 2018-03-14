package laroche.chem.assessment.responseObjects;

import laroche.chem.assessment.entities.Classes;
import laroche.chem.assessment.entities.SemesterReview;

public class ClassSemesterReviewsResponse {

	SemesterReview semesterReview;
	Classes classes;
	
	public ClassSemesterReviewsResponse(SemesterReview semesterReview, Classes classes) {
		this.setSemesterReview(semesterReview);
		this.setClasses(classes);
	}
	
	public SemesterReview getSemesterReview() {
		return semesterReview;
	}

	public void setSemesterReview(SemesterReview semesterReview) {
		this.semesterReview = semesterReview;
	}

	public Classes getClasses() {
		return classes;
	}

	public void setClasses(Classes classes) {
		this.classes = classes;
	}
}
