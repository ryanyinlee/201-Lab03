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
var instrumentGuess;
var guessCount;


// Random Number Generator taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
let min = 0;
let max = 10;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  } 

  let randomInt = getRandomInt(min, max);

switch (response1) {
    case 'YES':
        alert('Excellent!');
      
        question2();
        break;
    case 'NO':
        alert('Well that\'s too bad. You\'re here anyway.');
        
        question2();
        break;
    default:
        alert('Please enter \"yes\" or \"no\"');
        
        question2();

}

function question2() {
    response2 = prompt("We are going to play a guessing game. Am I married?");
    response2 = response2.toUpperCase();
}

switch (response2) {
    case 'YES':
        alert('You\'re correct!');
        
        question3();
        break;
    case 'NO':
        alert('Wrong! I am in fact married.');
        
        question3();
        break;
    default:
        alert('Please enter \"yes\" or \"no\"');
        
        question2();
}

function question3() {
    response3 = prompt("Okay, now have I ever been on TV?");
    response3 = response3.toUpperCase();
}

switch (response3) {
    case 'YES':
        alert('You\'re correct!');
        
        question4();
        break;
    case 'NO':
        alert('Wrong! I was on TV for being a victim of a crime.');
        
        question4();
        break;
    default:
        alert('Please enter \"yes\" or \"no\"');
        
        question3();

}

function question4() {
    response4 = prompt("Do I like cilantro?");
    response4 = response4.toUpperCase();
}

switch (response4) {
    case 'YES':
        alert('You\'re correct!');
        
        question5();
        break;
    case 'NO':
        alert('Wrong! I need it on tacos to feel alive.');
        
        question5();
        break;
    default:
        alert('Please enter \"yes\" or \"no\"');
        
        question4();

}

function question5() {
    response5 = prompt("Have I seen the new 2021 Dune movie directed by Denis Villeneuve?");
    response5 = response5.toUpperCase();
}

switch (response5) {
    case 'YES':
        alert('You\'re correct! If you haven\'t seen it, you should go. It\'s good.');
        
        question6();
        break;
    case 'NO':
        alert('Wrong! I\'ve seen it twice now. If you haven\'t seen it, you should go. It\'s good.');
       
        question6();
        break;
    default:
        alert('Please enter \"yes\" or \"no\"');
        
        question5();

}


function question6() {
    alert("Alright, let's play a NUMBER guessing game now.");
    guessingGame()

}



function guessingGame() {
    numGuess = prompt("Guess an integer between 0 and 10. You have 4 guesses! Don't worry I'll tell you if it's low or high.")
    parseInt(numGuess);
    console.log("You guessed " + numGuess);
    console.log("Random int is: " + randomInt);
    alert("You guessed " + numGuess);
    
    let i = 4;

    while (i > 1) {

        if (numGuess === randomInt) {
            alert("You guessed correctly! The number was " + randomInt);
            break;
        }
        else if (numGuess < randomInt) {
            i--;
            numGuess = prompt("Wrong! You are low. Try again. You now have " + i + " guesses.")
            parseInt(numGuess);

            console.log("You guessed " + numGuess);
            console.log("You have " + i + " guesses left.");
            continue;
        }
        else {

            i--;
            numGuess = prompt("Wrong! You are high. Try again. You now have " + i + " guesses.")
            parseInt(numGuess);

            console.log("You guessed " + numGuess);
            console.log("You have " + i + " guesses left.");
            continue;
        }
        
     }
    
     if (i == 1) {
         alert("Game over! The number was " + randomInt);
     }

     arrayGuess();
}



function arrayGuess() {    

    let instruments = ['BANJO', 'UKELELE', 'GUITAR', 'PIANO', 'VIOLIN', 'HARMONICA', 'LUTE', 'DRUMS']
    var f = 6;
    let real = 0;
    let guessCount = 0;
    alert("Alright, you have a chance to guess what musical instrument I am trying to learn.");
    alert("Which of the following am I trying to learn? You have 6 guesses now.");
    instrumentGuess = prompt("Banjo, Ukelele, Guitar, Piano, Violin, Harmonica, Lute, or Drums");
    instrumentGuess = instrumentGuess.toUpperCase();
    console.log("You guessed " + instrumentGuess);
    
    while (f > 1) {
        
        if ((instruments[1] == instrumentGuess) || (instruments[2] == instrumentGuess)) {
            f--;
            alert("You guessed " + instrumentGuess + " correctly with " + f + " guesses left.");
            
            real++;
            guessCount++;
            
            if (real == 2) {
                break;
            }
            instrumentGuess = prompt("Keep going! You now have " + f + " guesses. And there are " + real + " correct answers left.");
            instrumentGuess = instrumentGuess.toUpperCase();
           
            
            
        }
        else {
            f--;
            guessCount++;
            instrumentGuess = prompt("Try again. You now have " + f + " guesses.");
            instrumentGuess = instrumentGuess.toUpperCase();
            continue;
        }
       
     }
    
     if (f == 1) {
         alert("Game over! I'm trying to learn " + instruments[1] + " and " + instruments[2]);
     }
     else {
         alert("Good job! You won with a score of " + real + " correct answers with just " + guessCount + " guesses!");
     }




    }





  endOfGame();

function endOfGame() {
    alert('Thank you for playing ' + name1 + ' I hope you learned a little about me.');
}

