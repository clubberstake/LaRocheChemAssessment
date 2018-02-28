package laroche.chem.assessment.responseObjects;

public class CourseInfoForAssessmentWorksheetReview {

	public CourseInfoForAssessmentWorksheetReview(long id, long classId, String depReview, String divChairRevDate, String divChairReview, String divChairSig, String newActPlan, String newBudgItem, String depReviewer) {

		this.id = id;
		this.classId = classId;
		this.depReview = depReview;
		this.divChairRevDate = divChairRevDate;
		this.divChairReview = divChairReview;
		this.divChairSig = divChairSig;
		this.newActPlan = newActPlan;
		this.newBudgItem = newBudgItem;
		this.depReviewer = depReviewer;
	}

	private long id;
	private long classId;
	private String depReview;
	private String divChairRevDate;
	private String divChairReview;
	private String divChairSig;
	private String newActPlan;
	private String newBudgItem;
	private String depReviewer;
	
	public long getId()
	{
		return id;
	}
	
	public long getClassId()
	{
		return classId;
	}
	
	public String getDepReview() 
	{
		return depReview;
	}

	public String getDivChairRevDate() 
	{
		return divChairRevDate;
	}

	public String getDivChairReview() 
	{
		return divChairReview;
	}

	public String getDivChairSig() 
	{
		return divChairSig;
	}

	public String getNewActPlan() 
	{
		return newActPlan;
	}

	public String getNewBudgItem() 
	{
		return newBudgItem;
	}
	
	public String getDepReviewer() 
	{
		return depReviewer;
	}
}
