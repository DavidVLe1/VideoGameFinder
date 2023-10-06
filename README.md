# VideoGameFinder
A website to recommend video games to a potential user. 

What This Does

1. Ask a user a question - what video game they like and have played
     Recommends next video game based on similarities between video games
     This is percentage similar that they are (you will ike this ~80%)


How will this be implemented

VideoGame(nameOfGame, publisher, publishedDate, genreId, MetaCriticScore, platform)

// May not be needed
Genre(genreId, Genre)
MetaCritic Score(Reviewer, Score)

Similarity Algorithm - (possibly Netflix similarity algorithm - Logan)

We do not create a DB 

fetch from that db - 
mapper 


read only ... 

Version -1 testbacked with our own SQL

Keep version 0 simple - we can always add stuff to it.
Form that will get the genre etc

Version 1 - add a profile - so we login - and get a profile

Version 2 - store past games you have played - to get a genre, publisher preference

Front end framework - 

Backend:

Controller 
Online
     - Getting VideoGame By Publisher
     - Getting All VideoGames
     - Getting VideoGames By Genre
     - Getting VideoGame By UserId
     - Getting VideoGame By PublishedYear
Local
     - POst User by UserId
     - Post VideoGamesViewed By UserId
     - Put VideoGamesViewed By UserId
     - Delete user
     - delete VideoGamesViewed By the User
     - View RecommendedTitles By UserId
     - Delete RecommendedTities By UserId
Model
Data (calls to the online DB)
Domain

FrontEnd:


Two Architectures - we are selecting the second

Architecture 1 is REACT -> JAVA -->(Online, MySQL)
Architecture 2 is React -> (Online, (JAVA, MySQL))

All user specific data will be in MySQL
Online is only fetches - and we can refine the fetch based on User input and MySQL profiles/ past history



![image](https://github.com/LoganHajdukiewicz/VideoGameFinder/assets/33878973/20415de0-a8f7-4e8d-b7a8-bc8c4a8814be)

![image](https://github.com/LoganHajdukiewicz/VideoGameFinder/assets/33878973/c031def4-35cb-45f2-b0a2-5b4589dc9ee4)

![image](https://github.com/LoganHajdukiewicz/VideoGameFinder/assets/33878973/afc07f1b-df60-4b2d-b83d-2e5e81400d5a)

Question 1: What did you get done yesterday? 
 React Table 
 Populated with Fetch from “Online Gaming API”

 Java/ MySQL Get from DB for Genre (.findAll and .findById)

 Template for Version 0.



Question 2: Did you get the things done that you wanted to? 
We are on track to have an operational version by tomorrow lunch

Question 3: What are you going to do today? 
Forms Done
React App 
UI – Tailwind/ Bootstrap
Backend Tables and Java Pullup
Fetch Query Addition
User Sign In 

Any blockers? 



Default Min-Max and Start and End Date in Form - requires a change in the Form.js
![image](https://github.com/LoganHajdukiewicz/VideoGameFinder/assets/33878973/8198c44d-43fc-47d4-9e43-5a77d0eae0e8)

For October 6

Oct 6 Stand Updates

What did you get done yesterday? Did you get the things done that you wanted to?
- Backend: We store and retrieve Genres and Platforms
- Frontend: Form that can be filled and includes API key - fetches from online source and filters the result and displays the results table
- UI: Structured the entire web app and Landing Page (completed)

 
What are you going to do today?
- Backend: We need to store and retrieve User and Preferences
- Frontend: Form default values and if User is logged in - overrides their preferences
- UI: Create the signup, signin and pass preferences to form
	
Any blockers?


### LOAD APP ###
1. When we load up the application
	1. NavBar
 	2. Cool Static Page
 	
### NAVBAR ###
- [ ] Logo
- [ ] Login
- [ ] Signup

2. Pathway for Existing User: 
	1. Navbar
	2. <Click> Login: Login Form

### Login Form ###
- [ ] Email
- [ ] Password
- [ ] Submit

Submit onClick (sends info [POST] to Backend. Returns with Either User <userId> or Error
* Error - Error Page <Link to Return to Home >
* Success - Redirect to WallPaper (End State)

### NAVBAR ###
- [ ] Wallpaper
- [ ] Internals Demo
- [ ] Config
- [ ] Logout

### Move to Internal Demo ###

1. Personalized GameForm with the Profile of the Customer Preloaded (Submit Button)
2. Returns Table
3. Presentation can shift back to the WallPaper

### Configure ###

1. Game Form with all Options and Save
2. If you save then it updated [PUT] to the Preferences Table
3. Presentation can shift back to the Internal Demo to show how WallPaper has Evolved


### Now we can logout and relog in to show pathway for New User ###

- Load App
- Go to Sign Up
- Pathway for Existing User: 
	1. Navbar
	2. <Click> SignUp: SignUp

### SignUp Form ###
- [ ] First Name
- [ ] Last Name
- [ ] Email
- [ ] Password
- [ ] Submit

Submit onClick (sends info [POST] to Backend. Returns with Either User <userId> or Error
* Error - Error Page <Link to Return to Home >
* Success - Redirect to Config

### NAVBAR ###
- [ ] Config
- [ ] Logout

Move to Config and Enter Save (or Submit)

### NAVBAR ###
- [ ] Wallpaper
- [ ] Internals Demo
- [ ] Config
- [ ] Logout

