const input = document.getElementById('input');
const word = document.getElementById('word');
const type = document.getElementById('type');
const meaning = document.getElementById('meaning');
const example = document.getElementById('example');
const synonyms = document.getElementById('synonyms');
const resultContainer = document.querySelector('.result-container');
const synonymsCont = document.querySelector('.synonyms-cont');
const exampleCont = document.querySelector('.example-cont');
const disp = document.getElementById('disp');
let examp;

async function getValue () {
    resultContainer.style.display = 'none';
    const inputV = input.value;
    const inputValue = inputV.trim();
    console.log(inputValue);

    if (inputValue) {

        try {
            disp.innerText = `Searching for the meaning of ${inputValue}`;
            const results = await searchWord(inputValue);
            console.log(results);
            word.innerText = results[0].word;
            type.innerText = results[0].meanings[0].partOfSpeech + '' + results[0].phonetics[0].text;
            meaning.innerText = results[0].meanings[0].definitions[0].definition;
            examp = results[0].meanings[0].definitions[0].example;
            exampleCont.style.display = examp ? 'block' : 'none';
            if (examp) {
                example.innerText = examp;
            }
            disp.innerText = '';
            resultContainer.style.display = 'block';
            resultContainer.style.transition = '0.5s';


            synonyms.innerHTML = '';

            for (let i = 0; i < 5; i++) {
                let tag = results[0].meanings[0].definitions[0].synonyms[i];
                if (tag === undefined) {
                    synonymsCont.style.display = 'none';
                } else {
                    let synonymSpan = document.createElement('span');
                    synonymSpan.innerText = tag;
                    synonyms.appendChild(synonymSpan);
                }      
            }
            input.value = '';
            
        } catch (error) {
            console.log(error);
            disp.innerText = `Can't find the meaning of "${inputValue}". Please, try to search for another word.`;

    }
    }
}

async function searchWord (word) {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json();
        console.log(json);
        return json;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        getValue();
    }
})