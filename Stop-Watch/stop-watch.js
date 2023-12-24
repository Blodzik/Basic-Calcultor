let seconds = 0; 
let tens = 0; 

let appendTens = document.getElementById('tens');
let appendSeconds = document.getElementById('seconds');

const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const resetButton = document.getElementById('reset-button');

let interval;

startButton.addEventListener('click', startTimer)
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

window.addEventListener('beforeunload', function () {
    clearInterval(interval); // Clear the interval before the window is unloaded
});

function stopTimer () {
    clearInterval(interval);
}

function resetTimer () {
    clearInterval(interval);
    tens = 0;
    seconds = 0;
    appendTens.innerHTML = '00';
    appendSeconds.innerHTML = '00';
}

function startTimer () {
    clearInterval(interval);
    interval = setInterval(updateTimer, 10);
}

function updateTimer () {
    tens++;
    if(tens <= 9){
    appendTens.innerHTML = "0" + tens;
    }
    
    if (tens > 9){
    appendTens.innerHTML = tens;
    
    } 
    
    if (tens > 99) {
    seconds++;
    appendSeconds.innerHTML = "0" + seconds;
    tens = 0;
    appendTens.innerHTML = "0" + 0;
    }
    
    if (seconds > 9){
    appendSeconds.innerHTML = seconds;
    }
}
