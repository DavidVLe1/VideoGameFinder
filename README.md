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
![image](https://github.com/LoganHajdukiewicz/VideoGameFinder/assets/33878973/9298f596-e024-471a-8fae-0671d1e913cd)
