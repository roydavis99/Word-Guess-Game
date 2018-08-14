var maxGuessCount = 10;
var movies = ["Jurassic Park", "Star Wars", "Indianna Johns", "Avengers", 
                "Sky Captian and the World of Tomorrow",
                "Zombi Land"];

var possible = "abcdefghijklmnopqrstuvwxyz";


var wins = 0;
var loss = 0;
var guessesLeft = maxGuessCount;
var letters = [];
var answer = movies[Math.floor(Math.random() * movies.length)];

console.debug(answer);
