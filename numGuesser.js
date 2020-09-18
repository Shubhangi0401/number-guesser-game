//define all UI
const guess = document.querySelector('#num');
const submit = document.querySelector('#btn');
const form = document.querySelector('#form-area');
const resultLine = document.querySelector('.resultLine');

let tries = 2;
let randomNum = Math.ceil(Math.random() * 10);

//load event listeners
loadEventListeners();

function loadEventListeners() {
    form.addEventListener('submit', guessNumber);
}

//guess number
function guessNumber(e) {
    const userNum = parseInt(guess.value);
    resultLine.textContent = '';
    if (userNum === randomNum) {
        resultLine.className = 'alert-right';
        guess.className = 'border-green';
        resultLine.appendChild(document.createTextNode(`${userNum} is the correct answer!`));
    } else if (userNum !== randomNum && tries !== 0) {
        resultLine.className = 'alert-wrong';
        guess.className = 'border-red';
        resultLine.appendChild(document.createTextNode(`${userNum} is the wrong answer! Now, you have ${tries} guesses left !!`));
        tries--;
    } else if (userNum !== randomNum && tries === 0) {
        resultLine.className = 'alert-wrong';
        guess.className = 'border-red';
        resultLine.appendChild(document.createTextNode(`Sorry, Game Over! The correct answer was ${randomNum}`));
    }
    e.preventDefault();
}
console.log(randomNum);