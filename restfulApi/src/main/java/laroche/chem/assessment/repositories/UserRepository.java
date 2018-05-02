package laroche.chem.assessment.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import laroche.chem.assessment.entities.Users;

public interface UserRepository extends JpaRepository<Users, Long>{

	List<Users> findByUsername(String username);

}
