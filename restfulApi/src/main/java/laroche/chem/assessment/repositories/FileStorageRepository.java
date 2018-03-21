package laroche.chem.assessment.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import laroche.chem.assessment.entities.FileStorage;

public interface FileStorageRepository extends JpaRepository<FileStorage, Long>  {

}
