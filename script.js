'use strict';

let name1 = prompt('What is your name?');
name1 = name1.toUpperCase();

if (name1 === 'RYAN') {
    alert('Hey, that\'s my name!');
}
let response1 = prompt("Hello there " + name1 + " welcome to my bio page. Do you wish to learn about me? Yes or No?");

response1 = response1.toUpperCase();

var response2, response3, response4, response5;

var numGuess;
let randomInt = 45;



// let numGame = prompt("Pick a number");
// someData = parseInt(someData);
// let testString = true;
// let result = typeof(someData);
// console.log("This result is a " + result);



/* response3 = response3.toUpperCase();
response4 = response4.toUpperCase();
response5 = response5.toUpperCase(); */

switch (response1) {
case 'YES':
    alert('Excellent!');
    // console.log('Excellent!');
    question2();
    break;
case 'NO':
    alert('Well that\'s too bad. You\'re here anyway.');
    // console.log('Well that\'s too bad. You\'re here anyway.');
    question2();
    break;
default:
    alert('Please enter \"yes\" or \"no\"');
    // console.log('Please enter \"yes\" or \"no\"');
    question2();

}

function question2() {
    response2 = prompt("We are going to play a guessing game. Am I married?");
    response2 = response2.toUpperCase();
}

switch (response2) {
    case 'YES':
        alert('You\'re correct!');
        // console.log('You\'re correct!');
        question3();
        break;
    case 'NO':
        alert('Wrong! I am in fact married.');
        // console.log('Wrong! I am in fact married.');
        question3();
        break;
    default:
        alert('Please enter \"yes\" or \"no\"');
        // console.log('Please enter \"yes\" or \"no\"');
        question2();
    }

    function question3() {
        response3 = prompt("Okay, now have I ever been on TV?");
        response3 = response3.toUpperCase();
    }

switch (response3) {
    case 'YES':
        alert('You\'re correct!');
        // console.log('You\'re correct!');
        question4();
        break;
    case 'NO':
        alert('Wrong! I was on TV for being a victim of a crime.');
        // console.log('Wrong! I was on TV for being a victim of a crime.');
        question4();
        break;
    default:
        alert('Please enter \"yes\" or \"no\"');
        // console.log('Please enter \"yes\" or \"no\"');
        question3();
    
    }

    function question4() {
        response4 = prompt("Do I like cilantro?");
        response4 = response4.toUpperCase();
    }

    switch (response4) {
        case 'YES':
            alert('You\'re correct!');
            // console.log('You\'re correct!');
            question5();
            break;
        case 'NO':
            alert('Wrong! I need it on tacos to feel alive.');
            // console.log('Wrong! I need it on tacos to feel alive.');
            question5();
            break;
        default:
            alert('Please enter \"yes\" or \"no\"');
            // console.log('Please enter \"yes\" or \"no\"');
            question4();
        
        }

 function question5() {
            response5 = prompt("Have I seen the new 2021 Dune movie directed by Denis Villeneuve?");
            response5 = response5.toUpperCase();
    }

    switch (response5) {
        case 'YES':
            alert('You\'re correct! If you haven\'t seen it, you should go. It\'s good.');
            // console.log('You\'re correct! If you haven\'t seen it, you should go. It\'s good.');
            question6();
            break;
        case 'NO':
            alert('Wrong! I\'ve seen it twice now. If you haven\'t seen it, you should go. It\'s good.');
            // console.log('Wrong! I\'ve seen it twice now. If you haven\'t seen it, you should go. It\'s good.');
            question6();
            break;
        default:
            alert('Please enter \"yes\" or \"no\"');
            // console.log('Please enter \"yes\" or \"no\"');
            question5();
        
        }


 function question6() {
            alert("Alright, let's play a guessing game now.");
            guessingGame()
            
    }



function guessingGame() {
      numGuess =  prompt("Guess an integer between 0 and 100. You have 4 guesses! Don't worry I'll tell you if it's low or high.")
      parseInt(numGuess);
      console.log("You guessed " + numGuess);
      console.log("Random int is: " + randomInt);
      alert("You guessed " + numGuess);
      let i = 4;
    
    while (i > 1) {
        if (numGuess == randomInt) {
            alert("You guessed correctly!")
            endOfGame();
            break;
        }
        else if (numGuess < randomInt) {
            if (i == 0) {
                alert("You ran out of tries! Game over.");
                break;
            }
            i--;
            numGuess = prompt("Wrong! You are low. Try again. You mow have " + i + " guesses.")
            parseInt(numGuess);

            console.log("You guessed " + numGuess);
            console.log("You have " + i + " guesses left.");
            
        }
        else {
            if (i == 0) {
                alert("You ran out of tries! Game over.");
                break;
            }
            i--;
            numGuess = prompt("Wrong! You are high. Try again. You now have " + i + " guesses.")
            parseInt(numGuess);
           
            console.log("You guessed " + numGuess);
            console.log("You have " + i + " guesses left.");
        }
    }

  

}

// Random Number Generator taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
/* let min = 0;
let max = 100;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  } */

    
        function endOfGame() {
            alert('Thank you for playing ' + name1 + ' I hope you learned a little about me.' );
    }