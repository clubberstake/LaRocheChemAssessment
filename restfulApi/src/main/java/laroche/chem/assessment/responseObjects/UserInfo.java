package laroche.chem.assessment.responseObjects;

public class UserInfo{
	
	public UserInfo(long id, String username, String password, String permissions)
	{
		this.id = id;
		this.username = username;
		this.password = password;
		this.permissions = permissions;
	}
	private long id;
	private String username;
	private String password;
	private String permissions;
	
	public long getId()
	{
		return id;
	}
	
	public String getUsername()
	{
		return username;
	}
	
	public String getPassword()
	{
		return password;
	}
	public String getPermissions() 
	{
		return permissions;
	}
}