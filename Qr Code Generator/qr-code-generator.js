let imgBox = document.getElementById('imgBox');
let qrImage = document.getElementById('qrImage');
let qrText = document.getElementById('qrText');
const generateButton = document.getElementById('generateButton');

function generateQr () {
    if(qrText.value.length > 0) {
        qrImage.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + qrText.value;
        imgBox.classList.add('show-img')
    } else {
        qrText.classList.add('error');
        setTimeout(() => {
            qrText.classList.remove('error');
        },1000)
    }
}

generateButton.addEventListener('click', generateQr);
qrText.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        generateQr();
    }
})

