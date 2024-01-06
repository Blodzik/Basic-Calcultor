const button = document.getElementById('btn');
const inputV = document.getElementById('input');
const nameI = document.querySelector('.name');
const gender = document.querySelector('.gender');
const probability = document.querySelector('.probability');
const genderPic = document.querySelector('.gender-pic');
const resultCont = document.querySelector('.result');
const url = 'https://api.genderize.io/?name=';

button.addEventListener('click', checkGender);
inputV.addEventListener('keypress', (ev) => {
    if (ev.key === 'Enter') {
        checkGender();
    }
})

async function checkGender () {
    nameI.innerHTML = '';
    gender.innerHTML = '';
    probability.innerHTML = '';

    const input = inputV.value;
    const response = await fetch(url + input);

    if (!response) {
        throw new Error('Network response was not ok');
    }

    let data = await response.json();

    nameI.innerHTML = data.name;
    gender.innerHTML = data.gender;
    probability.innerHTML = 'Probability: ' + data.probability;

    if (data.gender === 'male') {
        resultCont.style.backgroundColor = '#7e5eff';

        const image = document.createElement('img');
        image.src = 'images/male.png';
        image.style.width = '100px';

        genderPic.innerHTML = '';
        genderPic.appendChild(image);
    } else if (data.gender === 'female') {
        resultCont.style.backgroundColor = '#FF69B4';

        const image = document.createElement('img');
        image.src = 'images/female.png';
        image.style.width = '100px';

        genderPic.innerHTML = '';
        genderPic.appendChild(image);
    }

    inputV.value = '';
}