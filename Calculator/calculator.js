let calculation = localStorage.getItem('calculation') || '';

function updateCalculation(value) {
    calculation += value;
    displayCalculation();
    localStorage.setItem('calculation', calculation);
}

function displayCalculation() {
    document.querySelector('.js-calculation').innerHTML = calculation
}

function calculateResult() {
    try {
        const result = eval(calculation);
        calculation = result.toString();
        displayCalculation();
        localStorage.setItem('calculation', calculation);
    } catch (error) {
        console.error('Error during calculation', error.message);
    }
}

function clearCalculation() {
    calculation = '';
    displayCalculation();
}

function negativeCalculation() {
    calculation = -calculation;
    displayCalculation()
}

function percentegeCalculation() {
    calculation = (parseFloat(calculation) / 100).toString();
    displayCalculation();
}