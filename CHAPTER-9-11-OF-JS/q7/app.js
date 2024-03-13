
var secretNumber = Math.floor(Math.random() * 10) + 1;


var guess = parseInt(prompt("Guess the secret number (between 1 and 10):"));


if (guess === secretNumber) {
    alert("Bingo! Correct answer.");
} else if (guess + 1 === secretNumber || guess - 1 === secretNumber) {
    alert("Close enough to the correct answer.");
} else {
    alert("Sorry, incorrect guess. The secret number was " + secretNumber + ".");
}
