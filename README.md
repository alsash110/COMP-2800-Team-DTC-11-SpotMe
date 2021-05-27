# COMP2800PROJECT

# spot-me

## My Web Application (Title)

* [General info](#general-info)
* [Technologies](#technologies)
* [Required installations](#Required-installations)
* [How to use the dev server](#How-to-use-the-dev-server)
* [Contents](#content)

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
    └──index.html
├──src
    ├──assets
    ├──components
       ├──Caroursel.vue                     #Caroursel Component for DisplayMatches.vue
       ├──ChatRow.vue
       ├──DevProfile.vue                    #Developer Profile for About.vue
       ├──FindMatchesFooter.vue             #Footer Component for DisplayMatches.vue
       ├──FindMatchesHeader.vue             #Header Component for DisplayMatches.vue
       ├──FindMatchesProfileCard.vue        #Profile Card Component for DisplayMatches.vue
       ├──FooterJY.vue
       ├──HelloWorld.vue
       ├──HomePageCarousel.vue
       ├──LoginForm.vue                     #Login form component for Login.vue
       ├──MainSettingsBottomBtns.vue
       ├──MessageBubble.vue
       ├──SettingsFooter.vue                
       ├──SettingsInput.vue
       ├──ShowAndOverwriteInfo.vue
       ├──SignupFooter.vue                  #The footer used in form for Login.vue and Signup.vue
       ├──SignupForm.vue                    #Signup form component for Signup.vue
       ├──SignupHeader.vue
       └──UserPhoto.vue
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
       └──veutify.js
    ├──router
       └──index.js                          #Router scripts for the project
    ├──store
       └──index.js
    ├──views
       ├──About.vue
       ├──AddPhotos.vue
       ├──Chat.vue
       ├──DisplayMatches.vue                #View for Displaying Users that match your preferences
       ├──EditInfo.vue
       ├──Home.vue                          #Home page of the project
       ├──Login.vue                         #View for user login
       ├──mainsettings.vue
       ├──Message.vue
       ├──SettingsTwo.vue
       └──Signup.vue                        #View for user signup
    ├──App.vue
    └──main.js
       

```
