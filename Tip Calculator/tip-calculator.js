const rangeInput = document.getElementById('range');
const rangeSpan = document.getElementById('range-span');
const priceInput = document.querySelector('.enter-price');
const tipAmount = document.querySelector('.tip-amount-input');
const totalInput = document.querySelector('.total-input');

rangeSpan.innerHTML = '0%';
tipAmount.innerHTML = '0.00'
totalInput.innerHTML = '0.00'

rangeInput.addEventListener('input', () => {
    displayPercentage();
    displayTotal();
    displayTips();
});

function displayPercentage() {
    const range = rangeInput.value;
    rangeSpan.innerHTML = `${range}%`;
}

function displayTips() {
    const range = rangeInput.value;
    const price = priceInput.value;
    tipAmount.innerHTML = (price * range) / 100 + '$';
}

function displayTotal() {
    const range = rangeInput.value;
    const price = priceInput.value;
    totalInput.innerHTML = parseFloat(price) + parseFloat((price * range) / 100) + '$';
}