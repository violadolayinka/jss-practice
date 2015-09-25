// Pick a secret number
var myNumber = Math.floor(Math.random() * 100);

function guessMyNumber (guess) {
    
    if (guess < myNumber) {
        console.log("Too low!");
    } else if (guess > myNumber) {
        console.log("Too high!");
    } else {
        console.log("Yay!");
    }
}

// Take a wild guess

guessMyNumber(50);