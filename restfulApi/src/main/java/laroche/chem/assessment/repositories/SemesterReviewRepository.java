package laroche.chem.assessment.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import laroche.chem.assessment.entities.SemesterReview;

public interface SemesterReviewRepository extends JpaRepository<SemesterReview, Long> {

}
