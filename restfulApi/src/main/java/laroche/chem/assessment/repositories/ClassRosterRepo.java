package laroche.chem.assessment.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import laroche.chem.assessment.entities.ClassRoster;

public interface ClassRosterRepo extends JpaRepository<ClassRoster, Long>{
	
}
