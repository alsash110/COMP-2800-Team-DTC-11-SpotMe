# COMP2800PROJECT

# spot-me

## My Web Application (Title)

* [General info](#general-info)
* [Technologies](#technologies)
* [Required installations](#Required-installations)
* [How to use the dev server](#How-to-use-the-dev-server)
* [Contents](#content)
* [Test Plan](#test-plan)

## General Info
Our application, SpotMe, provides users with the features of being able to match with other health fanatics and chatting with them on the user’s preferences. Our application gives people the freedom of being able to create a diversifiable workout schedule, and keep each other motivated.
	
## Technologies
Technologies used for this project:
* Git
* HTML, CSS
* JavaScript
* Jquery
* Vue
* Vuetify
* Node.js

## Required installations
1. Install git
2. Install sourcetree
3. Install Node.js
4. Install Visual studio code IDE
5. Install dependincies 
   - Launch visual studio code
   - Open "Spot-Me" folder
   - Open terminal inside visual studio code
   - Enter: "npm install"


## How to use the dev server
1. Follow the Requried installations instructions above
2. Open "Spot-Me" folder inside visual studio code
3. Open terminal inside visual studio code
   - Enter: "npm run serve"
	
## Content
Content of the project folder:

```
 Top level of project folder: 
├──.firebase                    #firebase hosting stuff
├──node_modules                 #installed modules from npm
├──public                       #publicly served folder
├──src                          #source files folder
├──testing                      #Folder that contains test files
├──.browserslistrc
├──.firebasesrc
├──.gitignore                   #git ignore
├──babel.config.js              #babel configuration file
├──firebase.json                #Firebase stuff
├──firestore.indexes.json       #Firebase stuff
├──forestore.rules              #firestore rules
├──package.json                 #dependancies json
├──storage.rules                #firebase storage rules
├──vue.config.js                #Vue configuration file
└── README.md

It has the following subfolders and files:
├──.firebase
    └──/..
├──node_modules
    └──/..
├──public
    ├──favicon-old.ico
    ├──favicon-test.ico
    ├──favicon.ico
    └──index.html                           #The index html for the project
├──testing
    ├──tests_v1.side                        #Selenium tests for V1.0 of the project
├──src
    ├──assets
    ├──components
       ├──Caroursel.vue                     #Caroursel Component for DisplayMatches.vue
       ├──ChatRow.vue
       ├──DevProfile.vue                    #Developer Profile for About.vue
       ├──FindMatchesFooter.vue             #Footer Component for DisplayMatches.vue
       ├──FindMatchesHeader.vue             #Header Component for DisplayMatches.vue
       ├──FindMatchesProfileCard.vue        #Profile Card Component for DisplayMatches.vue
       ├──FooterJY.vue                      #Footer component for Chat vues
       ├──HelloWorld.vue                    #A test component
       ├──HomePageCarousel.vue              #Image carousel component for Home page
       ├──LoginForm.vue                     #Login form component for Login.vue
       ├──MainSettingsBottomBtns.vue        #The bottom buttons component for Main Settings page
       ├──MessageBubble.vue                 #Message bubble component for Chat page
       ├──SettingsFooter.vue                #Settings footer components
       ├──SettingsInput.vue                 #Settings input form component
       ├──ShowAndOverwriteInfo.vue          #Settings overwrite form component for Settigns page
       ├──SignupFooter.vue                  #The footer used in form for Login.vue and Signup.vue
       ├──SignupForm.vue                    #Signup form component for Signup.vue
       ├──SignupHeader.vue                  #Signup header component
       └──UserPhoto.vue                     #User profile photo component
    ├──fonts                                #fonts
       ├──Lato-Black.ttf
       ├──Lato-BlackItalic.ttf
       ├──Lato-Bold.ttf
       ├──Lato-BoldItalic.ttf
       ├──Lato-Italic.ttf
       ├──Lato-Light.ttf
       ├──Lato-LightItalic.ttf
       ├──Lato-Regular.ttf
       ├──Lato-Thin.ttf
       └──Lato-ThinItalic.ttf
    ├──plugins
       └──veutify.js                        #Vuetify plugin
    ├──router
       └──index.js                          #Router scripts for the project
    ├──store
       └──index.js                          #Firebase storage plugin
    ├──views
       ├──About.vue                         #About Us main Vue
       ├──AddPhotos.vue                     #Add Photos main Vue
       ├──Chat.vue                          #Chat window main Vue
       ├──DisplayMatches.vue                #View for Displaying Users that match your preferences
       ├──EditInfo.vue                      #The main Vue component for editing info
       ├──Home.vue                          #Home page of the project
       ├──Login.vue                         #View for user login
       ├──mainsettings.vue                  #The main Vue component for logged in users
       ├──Message.vue                       #The main Vue component for messaging
       ├──SettingsTwo.vue                   #The second Vue component for Messaging
       └──Signup.vue                        #View for user signup
    ├──App.vue                              #Application Vue driver
    └──main.js                              #The main script for the project (connecting all the npm modules)
       

```

## Test Plan
Testing is important, and at SpotMe, we take testing very seriously. We have developed a test plan that will ensure the efficient execution of the scripts of different components. The following [sheet](https://docs.google.com/spreadsheets/d/12xuC7PXhSAdk09i0HVz4YIIjYlbGX35xVCrLaHN6Exo/edit?usp=sharing) provides the test plan that the team has outlined. This sheet will be updated as the project develops. 

