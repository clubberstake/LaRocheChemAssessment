package laroche.chem.assessment.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import laroche.chem.assessment.entities.Users;

public interface UserRepository extends JpaRepository<Users, Long>{

	

}
