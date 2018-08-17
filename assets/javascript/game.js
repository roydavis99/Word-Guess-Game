var maxGuessCount = 10;


var possible = "abcdefghijklmnopqrstuvwxyz";

var isPlaying = false;
var wins = 0;
var loss = 0;
var good = [];
var bad = [];
var answer;
var currentWordText = document.getElementById("current-word");
var guessesMadeText = document.getElementById("guesses-made");
var guessesLeftText = document.getElementById("guesses-left");
var winsText = document.getElementById("wins");

console.debug(answer);
reset();
setDisplay();

//Update display
function setDisplay() {
    var word = "";
    var guesses = "";

    for (let i = 0; i < answer.length; i++) {
        let letter = answer.charAt(i);
        if (letter === " ") {
            word += " ";

        } else if (good.includes(letter.toLowerCase())) {

            word += letter;
        } else {
            word += "_";
        }
    };

    bad.forEach(guess => {
        guesses += guess;
    });

    if (word === answer) {
        gameWin();
    }else if (bad.length >= maxGuessCount){
        gameLoss();
    }

    currentWordText.textContent = word;
    guessesMadeText.textContent = guesses;
    guessesLeftText.textContent = maxGuessCount - bad.length;
    winsText.textContent = wins;
}

document.onkeyup = function (event) {
    var key = event.key.toLowerCase();
    if(!isPlaying){
        reset();
        setDisplay();
        return;
    }

    if (!possible.includes(key)) {
        return;
    }
    else if (!good.includes(key) && answer.toLowerCase().includes(key)) {
        good.push(key);
    }
    else if (!bad.includes(key) && !answer.toLowerCase().includes(key)){
        bad.push(key);
    }
    setDisplay();
}

function gameWin() {
    var image = "./assets/images/" + answer + ".jpg"
    document.getElementById("game-img").src = image;
    wins++;
    isPlaying = false;
    //playAudio(answer);
}

function reset(){
    bad = [];
    good = [];
    answer = movies[Math.floor(Math.random() * movies.length)];
    isPlaying = true;
}

function gameLoss() {
    isPlaying = false;
    loss++;
    //playAudio("loss");
}

function playAudio(name){
    //need to get audio files
    var audio = new Audio("./assets/audio/" + name + ".mp3");
    audio.play();   
}