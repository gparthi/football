# football

This project is nodejs backend service for fetching the team standings of football tournament.<br />
This server is dependent on apifootball.com to fetch the data.<br />
Reference: https://apifootball.com/documentation

## Setup and test in local machine.<br />
Download Install NodeJs. Refer https://nodejs.org/en/download/

On Ubuntu or MAC:
````````
%sudo apt-get install nodejs
%sudo apt-get install nodejs
````````

Test in local machine or cloud VM:
````````
%npm install
%node app.js
````````

## Docker<br />
You can instantly run and check the service by pulling docker image.
````````
%docker pull gparthi/football:v2
%docker run -p 8080:3001 football:v2
````````
Verify in your favourate web browser with http://localhost:8080/ 
