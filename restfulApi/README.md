## Required Software
* To run this program you need a Java IDE that can open and run maven files. I personally use eclipse oxygen over Jet Brains IDEA because it's lighter weight. I'm assuming you can install this and get it up and running. 
* You will need a MySQL installation. If you started with xampp that's fine.

## Opening the Project
* In your Java IDE, look for the ability to "import a project".
* In those menus, you should be able to pick a "maven" file to import.
* Your IDE may begin installing required projects. This could take time.

## Running the project
* Create a database in MySQL called "sampleDB"
* First setup your database connection. The Spring JPA project "knows" to look for it in a specific location.
* Create a folder under src > main > "resources".
* In that newly created resources folder create a file called application.properties. In that file add these settings:
spring.jpa.hibernate.ddl-auto=update
spring.datasource.url=jdbc:mysql://localhost:3306/sampleDB
spring.datasource.username=root
spring.datasource.password=
* Find the main class called "LaRocheChemAssessmentRestfulApp.java" a successful run creates output similar to...

 2017-12-04 20:43:00.153  INFO 5824 --- [           main] s.b.c.e.t.TomcatEmbeddedServletContainer : __Tomcat started on port(s): 8080__ (http)
 2017-12-04 20:43:00.160  INFO 5824 --- [           main] l.c.a.r.LaRocheChemAssessmentRestfulApp  : __Started LaRocheChemAssessmentRestfulApp in 4.819 seconds (JVM running for 5.211)__
 