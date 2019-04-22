#
Technologies used



*Javascript
*jQuery
*HTML
*CSS and bootstrap
*Ruby back-end api (supplied by General Assembly)

#Development Process#
I started this project by catalouging all of the required specifications given to us by General Assembly. I then set out with first creating the HTML board
and giving the tic tac toe responsive design by adding hover effects through the CSS to give visual feedback and help with future debugging.

After the board was created I set out by creating the code logic with javascript and creating arrays to keep track of each of the tic tac toe boxes and adding
user input into the array based on the position they clicked and then comparing that with a winner combination array which contains the 8 winning combinations
that are present in tic tac toe. Once the game was fully functional I then set up the API calls that logged the user data such as the play a particular made, it's position
and if the game is over. The API was also used to create new instances of a game, and keep track of stats. You can display these stats after the user has created and
authorized a username and password. API was provided by General Assembly that allowed for the creation of user accounts, change of passwords, and to track that data across
multiple devices through the internet.

#Unsolved problems#
I was not able to develop a suitable Ai. An easy solution I thought of using was copying over much of the same game logic used by players to pick a spot
and instead using a Math.random() method to make the computer select a random tic tac toe box. I could then add additional code to account for what spots are currently taken
and thus allow the Ai to make more intelligent decisions as to where to go next.

#Wireframes and user stories#
Login page
https://imgur.com/2f86MPp

Post login page
https://imgur.com/DWwYnEL

The login page is a bootstrap overlay. After user authentication is approved,
the login page is hidden from view and the game is made available on the present viewport
