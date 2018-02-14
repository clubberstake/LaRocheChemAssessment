package laroche.chem.assessment.responseObjects;

public class instructorInfo {
	
	public instructorInfo(long instructorId, String name)
	{
		this.id = instructorId;
		this.name = name;
	}
	
	private long id;
	private String name;
	
	public long getId()
	{
		return id;
	}
	
	public String getName()
	{
		return name;
	}

}
