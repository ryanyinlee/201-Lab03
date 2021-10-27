'use strict';

let name1 = prompt('What is your name?');
name1 = name1.toUpperCase();

if (name1 === 'RYAN') {
    alert('Hey, that\'s my name!');
}
let response1 = prompt("Hello there " + name1 + " welcome to my bio page. Do you wish to learn about me? Yes or No?");

response1 = response1.toUpperCase();

var response2, response3, response4, response5;

 // let someData = prompt("Pick a number");
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
            endOfGame();
            break;
        case 'NO':
            alert('Wrong! I\'ve seen it twice now. If you haven\'t seen it, you should go. It\'s good.');
            // console.log('Wrong! I\'ve seen it twice now. If you haven\'t seen it, you should go. It\'s good.');
            endOfGame();
            break;
        default:
            alert('Please enter \"yes\" or \"no\"');
            // console.log('Please enter \"yes\" or \"no\"');
            question4();
        
        }
    
        function endOfGame() {
            alert('Thank you for playing ' + name1 + ' I hope you learned a little about me.' );
    }