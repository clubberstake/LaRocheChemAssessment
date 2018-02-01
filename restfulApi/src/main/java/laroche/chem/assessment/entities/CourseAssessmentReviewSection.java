package laroche.chem.assessment.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class CourseAssessmentReviewSection {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	private byte[] depReview;
	private byte[] depReviewer;
	private byte[] newActPlan;
	private byte[] newBudgItem;
	private byte[] divChairReview;
	private byte[] divChairSig;
	private byte[] divChairRevDate;
	
	public CourseAssessmentReviewSection() {}

	public CourseAssessmentReviewSection(byte[] depReview, byte[] depReviewer, byte[] newActPlan, byte[] newBudgItem,
			byte[] divChairReview, byte[] divChairSig, byte[] divChairRevDate) {
		this.depReview = depReview;
		this.depReviewer = depReviewer;
		this.newActPlan = newActPlan;
		this.newBudgItem = newBudgItem;
		this.divChairReview = divChairReview;
		this.divChairSig = divChairSig;
		this.divChairRevDate = divChairRevDate;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public byte[] getDepReview() {
		return depReview;
	}

	public void setDepReview(byte[] depReview) {
		this.depReview = depReview;
	}

	public byte[] getDepReviewer() {
		return depReviewer;
	}

	public void setDepReviewer(byte[] depReviewer) {
		this.depReviewer = depReviewer;
	}

	public byte[] getNewActPlan() {
		return newActPlan;
	}

	public void setNewActPlan(byte[] newActPlan) {
		this.newActPlan = newActPlan;
	}

	public byte[] getNewBudgItem() {
		return newBudgItem;
	}

	public void setNewBudgItem(byte[] newBudgItem) {
		this.newBudgItem = newBudgItem;
	}

	public byte[] getDivChairReview() {
		return divChairReview;
	}

	public void setDivChairReview(byte[] divChairReview) {
		this.divChairReview = divChairReview;
	}

	public byte[] getDivChairSig() {
		return divChairSig;
	}

	public void setDivChairSig(byte[] divChairSig) {
		this.divChairSig = divChairSig;
	}

	public byte[] getDivChairRevDate() {
		return divChairRevDate;
	}

	public void setDivChairRevDate(byte[] divChairRevDate) {
		this.divChairRevDate = divChairRevDate;
	}
	
}
