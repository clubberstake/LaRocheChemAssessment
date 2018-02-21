package laroche.chem.assessment.responseObjects;

public class CourseSLOsInfo {

	public CourseSLOsInfo(long id, long classId, boolean slo1, boolean slo2, boolean slo3, boolean slo4, boolean slo5) {
		this.id = id;
		this.classId = classId;
		this.slo1 = slo1;
		this.slo2 = slo2;
		this.slo3 = slo3;
		this.slo4 = slo4;
		this.slo5 = slo5;
	}

	private long id;
	private long classId;
	private boolean slo1;
	private boolean slo2;
	private boolean slo3;
	private boolean slo4;
	private boolean slo5;

	public long getId()
	{
		return id;
	}
	
	public long getClassId()
	{
		return classId;
	}
	
	public boolean getSLO1()
	{
		return slo1;
	}
	
	public boolean getSLO2()
	{
		return slo2;
	}
	
	public boolean getSLO3()
	{
		return slo3;
	}
	
	public boolean getSLO4()
	{
		return slo4;
	}
	
	public boolean getSLO5()
	{
		return slo5;
	}
}
