var maxGuessCount = 10;
var movies = ["Jurassic Park", "Star Wars", "Indiana Jones", "Avengers", 
                "Sky Captain and the World of Tomorrow",
                "Zombie Land"];

var possible = "abcdefghijklmnopqrstuvwxyz";


var wins = 0;
var loss = 0;
var guessesLeft = maxGuessCount;
var letters = [];
var answer = movies[Math.floor(Math.random() * movies.length)];

console.debug(answer);


function win(){
    document.getElementById("game-img").src="./assets/images/bla.jpg";
    
}