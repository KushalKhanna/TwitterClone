A Twitter Clone Application

## Project Details
The program has three parts a frontend, backend and database. We used React as our language for the frontend. Java for the backend and Postgresql for the database. The project also uses Spring as part of the API. In backend, we used singleton and observer patterns as part of our code for this project. This project was made by Allen Vattakkattu Tom, Corey Gendron, Kushal Khanna, Nithish Dhananjay Yadav Mummidi, Vanam Sanjay Shanker, Xuyang Wu. 


## How to Run Each End
### Frontend
    cd YourDirectory/Twixx/frontend/twixx
    npm run build
@@ -17,6 +17,6 @@ In YourDirectory/Twixx/backend/twixx/src/main/java/com/twixx have your IDE run T
### Database
You can use the two .sql files found in YourDirectory/Twixx/database. These have two table creation commands with sample data.

### Notes on Running 
Make sure you have a database named "twixxdb" and make sure there is a user postgres with password root. This can be found in YourDirectory/Twixx/backend/twixx/src/main/resources/application.properties. <br/>
You can run each end in order of Database, Backend, Frontend. The database doesn't need a start command just make sure there is one setup. 