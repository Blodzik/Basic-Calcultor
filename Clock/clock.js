function showTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let session = 'AM';

    if (hours === 0) {
        hours = 12;
    }

    if (hours > 12) {
        hours = hours - 12;
        session = 'PM'
    }

    seconds = (seconds < 10) ? '0' + seconds : seconds;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    hours = (hours < 10) ? '0' + hours : hours;

    let time = hours + ':' + minutes + ':' + seconds + ' ' + session;

    document.getElementById('myClock').innerText = time;
    document.getElementById('myClock').textContent = time;

    setTimeout(showTime, 1000);
}