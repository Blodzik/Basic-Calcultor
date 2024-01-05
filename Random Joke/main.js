const button = document.getElementById('button');
const text = document.getElementById('p');
const textT = document.getElementById('p1');
const url = 'https://official-joke-api.appspot.com/random_joke'

button.addEventListener('click', generateJoke);

async function generateJoke () {
    const response = await fetch(url);

    if (!response) {
        throw new Error('Network response was not ok');
    }

    let data = await response.json();
    console.log(data);
    text.innerHTML = data.setup;
    textT.innerHTML = data.punchline;
}

generateJoke();