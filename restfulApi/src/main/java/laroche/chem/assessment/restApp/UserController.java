package laroche.chem.assessment.restApp;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import laroche.chem.assessment.entities.Users;
import laroche.chem.assessment.repositories.UserRepository;
import laroche.chem.assessment.responseObjects.UserInfo;

@RestController
public class UserController {
	@Autowired
	private UserRepository userRepository;
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping("/userInfo")
	public ArrayList<UserInfo> getUserInfo() {
		return generateFakeData();
	}
		
	private ArrayList<UserInfo> generateFakeData() {
		
		List<Users> users = userRepository.findAll();
		if (!users.iterator().hasNext()) {
			userRepository.save(new Users("jon.nichols@stu.laroche.edu", "bdd499ffb20d25b636d22f915a9f895a", "student"));
            //pswd is Superdude for jon
            userRepository.save(new Users("bradley.gray@laroche.edu", "bfbb9026b6f039f9e9dfb46f5c9c1aa9", "admin"));
            //pswd is Lamborghiniman for bradley
            userRepository.save(new Users("greg.lang@laroche.edu", "ea105f0d381e790cdadc6a41eb611c77", "teacher"));
            //pswd is teacher5 for greg
            userRepository.save(new Users("reggie.fill@stu.laroche.edu", "3c1bada5012fa1d2f708c39228e8f033", "student"));
            //pswd is regginator for reggie
            userRepository.save(new Users("steve.jobs@laroche.edu", "b54619aaeaae0e6078f4df37462b4cf4", "teacher"));
            //pswd is iPassword for steve
            userRepository.save(new Users("bill.gates@laroche.edu", "5ea87fe90e14926b50ddbee77c889d1c", "admin"));
            //pswd is macdaddy for bill
			users = userRepository.findAll();
		}
		
		ArrayList<UserInfo> data = new ArrayList<UserInfo>();

		for (Users user : users) {
			data.add(new UserInfo(user.getId(), user.getUsername(), user.getPassword(), user.getPermissions()));
		}

		return data;
	}
	
}
