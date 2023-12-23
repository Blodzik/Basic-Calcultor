let inputAge = document.getElementById('inputAge');
let button = document.getElementById('button');
let result = document.getElementById('result');

function countAge () {
    let today = new Date();
    let y1 = today.getFullYear();
    let m1 = today.getMonth() + 1;
    let d1 = today.getDate();

    console.log(today);

    let birthDate = new Date(inputAge.value);

    let y2 = birthDate.getFullYear();
    let m2 = birthDate.getMonth() + 1;
    let d2 = birthDate.getDate();

    let y3, m3, d3;
    y3 = y1 - y2;
    
    if (m1 >= m2) {
        m3 = m1 - m2;
    } else {
        y3--;
        m3 = m1 + 12 - m2;
    }

    if (d1 >= d2) {
        d3 = d1 - d2;
    } else {
        m3--;
        d3 = d1 + 30 - d2;
    }

    console.log(birthDate);

    result.innerHTML = `You are ${y3} years ${m3} month ${d3} days old`;
}

button.addEventListener('click', countAge);
inputAge.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        countAge();
    }
})
