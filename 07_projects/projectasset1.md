# Project related to DOM

## project link
[click here](https://stackblitz.com/edit/stackblitz-starters-djsq8r?file=index.html)

# Solution Code

## project 1: Color Changer

```javascript

const body = document.querySelector('body');

const boxes = document.querySelectorAll('.boxes');

boxes.forEach(function(box){
  box.addEventListener('click', function(e){
    body.style.backgroundColor = e.target.id;
  })
})

```

## project 2: BMI Calculator

```javascript

console.log('hiiiiiiiii');
const form = document.querySelector('form');
const result = document.querySelector('#result');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  result.innerText = '';

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);

  if (height === '' || height <= 0 || isNaN(height)) {
    result.innerText = 'Please enter valid height.';
  } else if (weight === '' || weight <= 0 || isNaN(weight)) {
    const textNode = document.createTextNode('  Please enter valid weight.');
    result.appendChild(textNode);
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    result.innerHTML = `<div>Your BMI is = <span>${bmi}</span><div>`;

    const catagory = document.createElement('div');
    let catagoryTextNode;
    if (bmi < 18.6) {
      catagoryTextNode = document.createTextNode('You are Under weight');
    } else if (bmi <= 24.9) {
      catagoryTextNode = document.createTextNode("You'r Normal weight");
    } else {
      catagoryTextNode = document.createTextNode("You'r Over weight");
    }
    catagory.appendChild(catagoryTextNode);
    result.appendChild(catagory);
  }
});

```

## project 3: Digital Clock

```javascript

// const clock = document.getElementById('clock');
const clock = document.querySelector('#clock');

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerText = date.toLocaleTimeString();
}, 1000);

```

##project 4: Number Guessing Game

```javascript

let winningNum = parseInt(Math.random() * 100 + 1);
console.log('winningNum: ', winningNum);
let playGame = true;
let remainingChances = 10;

let page = document.querySelector('#wrapper');
const button = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const result = document.getElementById('result');
const prevGuesses = document.getElementsByClassName('prevGuesses');
const remainingGuesses = document.getElementsByClassName('remainingGuesses');
const guidingMessage = document.getElementById('guidingMessage');

if (playGame) {
  //when clicked on submit button
  button.addEventListener('click', function (e) {
    e.preventDefault();
    let currentInput = userInput.value;

    //testing
    console.log('currentInput: ', currentInput, typeof currentInput);
    console.log(
      'currentInput: ',
      parseInt(currentInput),
      typeof parseInt(currentInput)
    );

    //check if the inputed number is valid
    checkCurrentInput(parseInt(currentInput));
  });
}

//check if the inputed number is valid
function checkCurrentInput(currentInput) {
  //testing
  console.log(
    'I am inside checkCurrentInput()\n',
    'currentInput:',
    currentInput,
    typeof currentInput
  );

  //checking input if it's valid input
  if (currentInput > 100) {
    alert('Enter number 100 or smaller than that.');
  } else if (currentInput < 1) {
    alert('Enter number 1 or greater than 1');
  } else if (isNaN(currentInput)) {
    alert('Enter a valid number between 1 and 100');
  } else {
    //Means, Input-number is in valid
    //Check If Input-number is Matched
    checkIfMatched(currentInput);
  }
}

//Check If Input-number is Matched
function checkIfMatched(currentInput) {
  //if number is MATCHED
  if (currentInput === winningNum) {
    //Make changes in whole page to indicate winning
    congratulation(currentInput);
    //Stop the user from playing the game
    stopGame();
  } else {
    //if number IS NOT MATCHED
    guidingMessageFn(currentInput);
    increasePrevGuesses(currentInput);
    decreaseRemainingChances(currentInput);
  }
}

function guidingMessageFn(currentInput) {
  if (currentInput < winningNum) {
    guidingMessage.innerText = `Target number is bigger than this.`;
  } else if (currentInput > winningNum) {
    guidingMessage.innerText = `Target number is smaller than this.`;
  }
}

function decreaseRemainingChances(currentInput) {
  remainingChances--;
  remainingGuesses[0].innerHTML = `${remainingChances}`;
  if (remainingChances === 0) {
    stopGame();
    betterLuckNextTime(currentInput);
  }
}

function betterLuckNextTime(currentInput) {
  // alert('Oops !!! You Lost. Play Again For Better Luck.');
  page.style.color = 'red';
  result.style.height = '170px';
  result.innerHTML = `<h2> Oops !!!</h2>
        <h2> You Have Lost !!!</h2>
        <h2> Number was ${winningNum} </h2>
        <h2 id="playAgain" class="color1"> Play Again  </h2>`;
  //playAgain Button --> color toggling
  setTimeout(color2, 800);

  //when playAgain Button is clicked
  const playAgain = document.getElementById('playAgain');
  playAgain.addEventListener('click', function (e) {
    //Set everything to play the game from beginning
    playNewGame();
  });
}

//increase the Previous Guesses Section
function increasePrevGuesses(currentInput) {
  const textNode = document.createTextNode(`${currentInput} | `);
  prevGuesses[0].appendChild(textNode);
}

//Stop the user from playing the game
function stopGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  button.setAttribute('disabled', '');
}

//Make changes in whole page to indicate winning
function congratulation(currentInput) {
  // alert('Congratulations !!!!!!!!\nYou have won');
  page.style.color = 'red';
  result.style.height = '170px';
  result.innerHTML = `<h2> Congratulation !!!</h2>
      <h2> You Have Won !!!</h2>
      <h2> Number was ${currentInput} </h2>
      <h2 id="playAgain" class="color1"> Play Again  </h2>`;
  //playAgain Button --> color toggling
  setTimeout(color2, 800);

  //when playAgain Button is clicked
  const playAgain = document.getElementById('playAgain');
  playAgain.addEventListener('click', function (e) {
    //Set everything to play the game from beginning
    playNewGame();
  });
}

function color2() {
  const playAgain = document.getElementById('playAgain');
  playAgain.setAttribute('class', 'color2');
  setTimeout(color1, 800);
}

function color1() {
  const playAgain = document.getElementById('playAgain');
  playAgain.setAttribute('class', 'color1');
  setTimeout(color2, 800);
}

//Set everything to play the game from beginning
function playNewGame() {
  result.innerHTML = ``;
  page.style.color = 'white';
  result.style.height = '0';
  button.removeAttribute('disabled');
  userInput.removeAttribute('disabled');
  remainingChances = 10;
  remainingGuesses[0].innerHTML = `${remainingChances}`;
  prevGuesses[0].innerHTML = ``;
  winningNum = parseInt(Math.random() * 100 + 1);
  console.log('winningNum: ', winningNum);
  guidingMessage.innerText = '';
}

```