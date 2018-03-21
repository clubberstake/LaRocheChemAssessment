package laroche.chem.assessment.restApp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import laroche.chem.assessment.entities.FileStorage;
import laroche.chem.assessment.repositories.FileStorageRepository;

@RestController
public class FileStorageController {
	
	@Autowired
	private FileStorageRepository fileStorageRepository;

	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping("/addFile")
	public ResponseEntity<Void> addClass(@RequestBody FileStorage fileToStore) {
 		System.out.println(fileToStore.getId());
 		fileStorageRepository.save(fileToStore);
 		return ResponseEntity.status(HttpStatus.OK).build(); 
	}
}
