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
			userRepository.save(new Users("jon.nichols@stu.laroche.edu", "Superdude", "student"));
			userRepository.save(new Users("bradley.gray@laroche.edu", "Lamborghiniman", "admin"));
			userRepository.save(new Users("greg.lang@laroche.edu", "teacher5", "teacher"));
			userRepository.save(new Users("reggie.fill@stu.laroche.edu", "regginator", "student"));
			userRepository.save(new Users("steve.jobs@laroche.edu", "iPassword", "teacher"));
			userRepository.save(new Users("bill.gates@laroche.edu", "macdaddy", "admin"));
			users = userRepository.findAll();
		}
		
		ArrayList<UserInfo> data = new ArrayList<UserInfo>();

		for (Users user : users) {
			data.add(new UserInfo(user.getId(), user.getUsername(), user.getPassword(), user.getPermissions()));
		}

		return data;
	}
	
}
