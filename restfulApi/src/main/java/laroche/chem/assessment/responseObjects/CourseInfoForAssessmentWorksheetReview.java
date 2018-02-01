package laroche.chem.assessment.responseObjects;

public class CourseInfoForAssessmentWorksheetReview {

	public CourseInfoForAssessmentWorksheetReview(byte[] depReview, byte[] divChairRevData, byte[] divChairReview, byte[] divChairSig, byte[] newActPlan, byte[] newBudgetItem, byte[] reviewID) {

		
		this.depReview = depReview;
		this.divChairRevData = divChairRevData;
		this.divChairReview = divChairReview;
		this.divChairSig = divChairSig;
		this.newActPlan = newActPlan;
		this.newBudgetItem = newBudgetItem;
		this.reviewID = reviewID;
	}

	private byte[] depReview;
	private byte[] divChairRevData;
	private byte[] divChairReview;
	private byte[] divChairSig;
	private byte[] newActPlan;
	private byte[] newBudgetItem;
	private byte[] reviewID;
	
	
	public byte[] getDepReview() 
	{
		return depReview;
	}

	public byte[] getDivChairRevData() 
	{
		return divChairRevData;
	}

	public byte[] getDivChairReview() 
	{
		return divChairReview;
	}

	public byte[] getDivChairSig() 
	{
		return divChairSig;
	}

	public byte[] getNewActPlans() 
	{
		return newActPlan;
	}

	public byte[] getNewBudgetItem() 
	{
		return newBudgetItem;
	}
	
	public byte[] getReviewID() 
	{
		return reviewID;
	}
}
