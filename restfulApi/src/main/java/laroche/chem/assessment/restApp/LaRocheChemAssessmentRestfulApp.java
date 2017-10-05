package laroche.chem.assessment.restApp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan({"laroche.chem.assessment"})
@EntityScan("laroche.chem.assessment")
@EnableJpaRepositories("laroche.chem.assessment")
public class LaRocheChemAssessmentRestfulApp {

	public static void main(String[] args) {
		SpringApplication.run(LaRocheChemAssessmentRestfulApp.class, args);
	}

}
