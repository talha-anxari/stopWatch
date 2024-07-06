let [milliseconds, seconds, minutes, hours ] = [ 0, 0, 0, 0 ];
let timerRef = document.querySelector('.timer_display');
let int = null;

let startTimer = document.getElementById('start_timer');
let stopTimer = document.getElementById('pause_timer');
let resetTimer = document.getElementById('reset_timer');

startTimer.addEventListener('click', () => {
    if (int === null) {
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10);
});

stopTimer.addEventListener('click', () => {
    clearInterval(int);
});

resetTimer.addEventListener('click', () => {
    clearInterval(int);
    [milliseconds, seconds, minutes, hours ] = [ 0, 0, 0, 0 ];
    timerRef.innerHTML = '00 : 00 : 00 : 000'
});

function displayTimer () {
    milliseconds += 10;
    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds += 1;
        }
        if (seconds === 60) {
            seconds = 0;
            minutes += 1;
            }
            if (minutes === 60) {
                minutes = 0;
                hours += 1;
                }
                if (hours === 24) {
                    hours = 0;
                }

                let h = hours < 10 ? '0' + hours : hours;
                let m = minutes < 10 ? '0' + minutes : minutes;
                let s = seconds < 10 ? '0' + seconds : seconds;
                let ms = milliseconds < 10 
                ? '00' + milliseconds 
                : milliseconds < 100 
                ? '0' + milliseconds 
                : milliseconds;
                timerRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
                


}


