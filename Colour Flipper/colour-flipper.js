const button = document.getElementById('button');
const body = document.querySelector('body');

function getRandomColour () {
    let letters = '0123456789ABCDEF'
    let colour =  '#';
    for (let i = 0; i < 6; i++) {
        colour += letters[Math.floor(Math.random() * 16)];
        
    }
    console.log(colour);
    return colour;
}

button.addEventListener('click', () => {
    body.style.backgroundColor = getRandomColour()
});

