package laroche.chem.assessment.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import laroche.chem.assessment.entities.Classes;

public interface ClassRepository extends JpaRepository<Classes, Long>{

}
