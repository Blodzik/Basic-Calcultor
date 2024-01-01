const input = document.getElementById('password-display');
const button = document.getElementById('generate-button');
const copy = document.getElementById('copy');

const lettersB = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '_-]/.;!@#$%^&*()=,';

button.addEventListener('click', () => {
    let randomLetters = '';
    let randomNumbers = '';

    for (let i = 0; i < 8; i++) {
        let randomIndex = Math.floor(Math.random() * letters.length);
        randomIndex = letters[randomIndex];
        randomLetters += randomIndex;       
    }

    for (let i = 0; i < 2; i++) {
        let randomIndex = Math.floor(Math.random() * numbers.length);
        randomIndex = numbers[randomIndex];
        randomNumbers += randomIndex;
    }
    
    let randomSymbol = Math.floor(Math.random() * symbols.length);
    randomSymbol = symbols[randomSymbol];

    let randomLetter = Math.floor(Math.random() * lettersB.length);
    randomLetter = lettersB[randomLetter];

    let password = randomNumbers + randomLetters + randomSymbol + randomLetter;
    password = shuffleString(password);

    input.value = password;
})

function shuffleString (string) {
    const array = string.split('');
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array.join('');
}

function copyPassword () {
    input.select();
    document.execCommand('copy');
}

copy.addEventListener('click', copyPassword);