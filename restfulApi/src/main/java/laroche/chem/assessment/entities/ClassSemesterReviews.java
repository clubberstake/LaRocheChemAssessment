package laroche.chem.assessment.entities;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class ClassSemesterReviews {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "semseter_review_id")
	SemesterReview semesterReview;

	@ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "classes_id")
	Classes classes;
	
	public ClassSemesterReviews() {}
	
	public ClassSemesterReviews(SemesterReview semesterReview, Classes classes) {
		this.setSemesterReviewId(semesterReview);
		this.setClassesId(classes);
	}
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}
	
	public SemesterReview getSemesterReviewId() {
		return semesterReview;
	}

	public void setSemesterReviewId(SemesterReview semesterReview) {
		this.semesterReview = semesterReview;
	}

	public Classes getClassesId() {
		return classes;
	}

	public void setClassesId(Classes classes) {
		this.classes = classes;
	}
}
