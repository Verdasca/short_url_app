Short Url App - Information and Installation Instructions

Short Url App technologies: MEAN application (MongoDB, Express, AngularJs and NodeJs) plus Bootstrap.
It generates a short version of an url given. When use the short verion in a browser it redirects to the original url by opening a new tab.

Personal notes: 
Instead of creating a random value to the short url, reuse the id create in the DB. 
This app was tested in Firefox and works as aspected (in chrome and safari it was not tested). 
Lots of things can be improved in this app like design, add other functonalities (like clipboard to copy short url), security (don't show DB data when using short url), etc...

---------------------------------------------------------------------------------------------------------------------------

Structure 

short_url_app
	- node_modules
	- public 					<!-- all frontend and angular files -->
	----- controllers
	---------- controller.js 	<!-- angular controller for index.html page -->
	----- css					<!-- css files from a bootstrap template -->
	----- img					<!-- images -->
	----- scss					<!-- scss files from a bootstrap template -->
	----- vendor				<!-- files (fonts, js, css...) from a bootstrap template -->
	----- index.html 			<!-- main view -->
	- package-lock.json 		<!-- npm configuration to install dependencies/modules -->
	- server.js 				<!-- Node configuration and set up app -->

    
---------------------------------------------------------------------------------------------------------------------------

Installation Instructions

Follow the steps to succefully run the application. Any questions contact Cristina. 

Code is also available in Git: https://github.com/Verdasca


Step 1) Install MongoDB (current stable version v3.6.3) and NodeJS (v 9.10.0)

<!-- Optional - not sure if this step is needed -->
Step 1.2) Install npm inside short_url_app, in terminal run: npm install
		Install the following npm api, in terminal: npm install <name_api>
			express
			mongojs
			bodyParser
			open

Step 2) Go to the folder were mongoDB is install and open the terminal in the bin folder (ex: C:\Program Files\MongoDB\Server\3.6\bin): 
		In the terminal run (in seperated terminals): 
			./mongod.exe  
			./mongo.exe 
		In mongo.exe terminal, create urllist db. In terminal run: use urllist
		Check if urllist is created. In terminal run: shows dbs

		IMPORTANT: THE DATABASE MUST BE RUNNING IN ORDER TO THE APPLICATION WORK SUCCESSFULLY.

Step 3) Open the terminal inside short_url_app folder and run the server: 
		In the terminal run: node server

Step 4) Open the following url in any browser (firefox recommended): http://localhost:80/ 
	
	(Tested in Firefox, while in chrome and safari not. Issues please contact Cristina)
