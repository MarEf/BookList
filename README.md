# BookList

## Technologies Used
The application was developed on a linux-computer. As it's Java, it should run on a Windows PC as well, but that is untested.

Java 17 with JDK 8  
Maven  
Spring Boot  
JPA (for makeshift database)  
REST API  
REACT JS  
axios (for HTTP requests)  
NetBeans 12.5 (As the IDE. If you see some NetBeans files/folders, this is why)

## To Run:
To launch the application you have the eay way and the developer-way. After launching the application, use your browser to go to http://localhost:8080/  
Note that there is no persistence unit in the project, so the database is not saved between backend reboots. For that, we would need to create a database to connect to and add a persistence unit to the project.   
This has no effect on the frontend. As long as the backend is running, the edits made by the user are preserved.

### The Easy Way
Get the .jar file from the /taret folder and execute it with "java -jar FILENAME"

### The Other Way
Save the project to your computer. Then navigate via command line to the target folder and execute the following commands:

mvn clean install (This will install the node dependancy that was too large to include via github)  
mvn (the actual command to run the project)  

## Known Issues
While every component of the application has been observed working by me, there are a few kinks in the system that would neet to be addressed for a more serious application than a demo.

### The First Click
The first book selection is for some reason ignored by the frontend. As a workaround, before selecting the book you want to view, click on a different book first.

### Inconsistent Connection
Not all database interactions go through. Sometimes they do, sometimes they dont, and there is no way to predict if a change made to a book will save, if adding a new book will succeed, or if you can delete an entry. The frontend sends the request to the backend consistently, but the backend will sometimes return a "Promise<pending>" and not even call the operation function from BookController.java.   
This could be a problem with the code, or it could be the developer's computer playing tricks on her. This is yet to be determined.
  
### Not A Beauty
In the frontend, the SubmissionForm is implemented as a child component to Book. I did not want to do this, but the alternative implementation had an unexpected bug that would have taken too much time to resolve at my current skill level. This design decision is ugly, but at least it works.
  
## One more thing
As github has kindly decided that the frontend is a submodule, it will not be possible to navigate to it and view the contents online. However, I have included a copy of the source files in the folder /frontend src.
