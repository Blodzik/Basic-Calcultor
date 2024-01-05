let speech = new SpeechSynthesisUtterance();

const button = document.getElementById('btn');
const select = document.getElementById('sel');
const input = document.getElementById('input');

let voices = [];

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i ) => (select.options[i] = new Option(voice.name, i)));
}

select.addEventListener('change', () => {
    speech.voice = voices[select.value];
})

button.addEventListener('click', () => {
    speech.text = input.value;
    window.speechSynthesis.speak(speech);
});