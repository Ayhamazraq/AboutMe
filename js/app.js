'use strict';

var score = 0;
var namee = prompt('What is your name?');
console.log('User name: ' + namee);

alert('Hi ' + namee + ', Welcome to my page!');
alert('let\'s play a guessing game about me. please answer Yes or No answers are valid.');

 function yCorrect(question) {
     if (question.toUpperCase() === 'YES') {
         score++;
         alert("Yes!, you are right.");
     }
     else if (question.toUpperCase() === 'NO'){
         alert("Sorry, wrong answer.");
     }
     else {
         alert("This answer is not valid");
     }
 }

 function nCorrect(question) {
     if (question.toUpperCase() === 'YES' || question.toUpperCase() === "y") {
         alert("Yes! you are right.");
    }
    else if (question.toUpperCase() === 'NO'|| question.toUpperCase() ==="n"){
         score++;
       
         alert("Sorry, wrong answer.");
     }
     else {
         alert("This answer is not valid");
     }
 }



  var favColor = prompt(namee + " Is my favorite color Red? Yes or No:");
  console.log('my favorite color: ' + favColor);

 nCorrect(favColor);



  var coffee = prompt(namee + ' Do I like coffee? Yes or No:');
  console.log('coffee: ' + coffee);

  nCorrect(coffee);



  var eat = prompt(namee + ' Do I like italian food? Yes or No');
  console.log('eat: ' + eat);

  nCorrect(eat);


  var favmus = prompt(namee + ' Do I prefer classic music? Yes or No');
  console.log('favmus: ' + favmus);

  yCorrect(favmus);


 var cat = prompt(namee + ' Do I love cats? Yes or No');
  console.log('cat: ' + cat);

  nCorrect(cat);


// Guess Question  6
   function guessNumber() {
     var counter = 1;
      if (counter === 5) {
          alert('Sorry you run out of guesses');
     }
     while (counter < 5 && number !==26) {
         var number = parseInt(prompt('Guess my favorite number'));
        if (number >26) {
             alert('You guessed too high! Guess again');
              counter++;
          } else if (number < 26) {
             alert('You guessed too low! Guess again');
              counter++;
          }
      }
     if (number === 26) {
          alert('That is correct! My favorite number is 26!');
       
      }
  }

 guessNumber();


// Guess Question 7

function guessTeam() {
    var FavTeam =['juventus', 'Bayern', 'city', 'Barcelona', 'paris']

    for (var i = 0; i < 6; i++) {
        var userAnsw = prompt('Can you guess my favorite team?');
        var guess = userAnsw.toLowerCase();

        for (var j = 0; j < FavTeam.length; j++){
            if (guess === FavTeam[j]) {
                alert('Congrats you got it right!!!');
                score++;
                i = 6;
                break;
            }
        }
        if (i !==6){
            alert('Sorry wrong answer, try again');
        }
    }
}

guessTeam();

alert('My favorite team are: Barcelona, Bayern Munich and manchester city, ');

alert('Good Job man!... You are right ' + score + ' correct answers!');



