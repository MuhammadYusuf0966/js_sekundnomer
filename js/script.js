const tabsItem = document.querySelectorAll('.tabsItem');
const tabsContent = document.querySelectorAll('.tabsContentItem ');

for (let i = 0; i < tabsItem.length; i++) {
    tabsItem[i].addEventListener('click',function () {
        for (let j = 0; j < tabsItem.length; j++) {
            tabsItem[j].classList.remove('active')
            tabsContent[j].classList.remove('active')
        }
        tabsItem[i].classList.add('active')
        tabsContent[i].classList.add('active')
    })
}

// soat

const s = document.querySelector('.s');
const m = document.querySelector('.m');
const h = document.querySelector('.h');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');

function soat() {
    let time = new Date()
    let sec = time.getSeconds() * 6
    let min = time.getMinutes() * 6
    let hour = time.getHours() * 30

    s.style = `transform:rotate(${sec}deg);`
    m.style = `transform:rotate(${min}deg);`
    h.style = `transform:rotate(${hour}deg);`

    hours.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
    minutes.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()
    setTimeout(()=>{
        soat()
    },1000)

}
soat()

// sekundnomer

document.addEventListener("DOMContentLoaded", function () {
    
    var stopwatchBtn = document.querySelector('.stopwatch__btn');
    var stopwatchClock = document.querySelector('.stopwatch__clock');
    var stopwatchAudio = document.querySelector('.stopwatch__audio');

    var isRunning = false;
    var interval;


    stopwatchBtn.addEventListener('click', function () {
        if (isRunning) {
           
            clearInterval(interval);
            isRunning = false;
        } else {
      
            interval = setInterval(function () {
                updateStopwatch();
            }, 1000);
            isRunning = true;
        }
    });

    
    function updateStopwatch() {
        var secondsElement = document.querySelector('.stopwatch__seconds');
        var minutesElement = document.querySelector('.stopwatch__minutes');
        var hoursElement = document.querySelector('.stopwatch__hours');

        var seconds = parseInt(secondsElement.textContent);
        var minutes = parseInt(minutesElement.textContent);
        var hours = parseInt(hoursElement.textContent);

        seconds++;

        if (seconds === 60) {
            seconds = 0;
            minutes++;

            if (minutes === 60) {
                minutes = 0;
                hours++;

                if (hours === 24) {
                    hours = 0;
                }
            }
        }

      
        secondsElement.textContent = seconds < 10 ? '0' + seconds : seconds;
        minutesElement.textContent = minutes < 10 ? '0' + minutes : minutes;
        hoursElement.textContent = hours < 10 ? '0' + hours : hours;
    }
});


// taymer



document.addEventListener("DOMContentLoaded", function () {
    const timerBtns = document.querySelectorAll('.timer__btn');
    const playBtn = document.querySelector('.timer__set');
    const clearBtn = document.querySelector('.timer__clear');
    const hoursDisplay = document.querySelector('.timer__hours');
    const minutesDisplay = document.querySelector('.timer__minutes');
    const secondsDisplay = document.querySelector('.timer__seconds');
    let timer;

    timerBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const btnValue = btn.textContent;
            if (hoursDisplay.textContent.length < 2) {
                hoursDisplay.textContent += btnValue;
            } else if (minutesDisplay.textContent.length < 2) {
                minutesDisplay.textContent += btnValue;
            } else if (secondsDisplay.textContent.length < 2) {
                secondsDisplay.textContent += btnValue;
            }
        });
    });

    playBtn.addEventListener('click', function () {
        const totalSeconds = parseInt(hoursDisplay.textContent) * 3600 + parseInt(minutesDisplay.textContent) * 60 + parseInt(secondsDisplay.textContent);
        if (totalSeconds > 0) {
            startTimer(totalSeconds);
        }
    });

    clearBtn.addEventListener('click', function () {
        resetTimer();
    });

    function startTimer(totalSeconds) {
        let secondsLeft = totalSeconds;

        timer = setInterval(function () {
            if (secondsLeft <= 0) {
                clearInterval(timer);
                // You can add any additional actions when the timer reaches 0
            } else {
                updateTimerDisplay(secondsLeft);
                secondsLeft--;
            }
        }, 1000);
    }

    function updateTimerDisplay(secondsLeft) {
        const hours = Math.floor(secondsLeft / 3600);
        const minutes = Math.floor((secondsLeft % 3600) / 60);
        const seconds = secondsLeft % 60;

        hoursDisplay.textContent = hours < 10 ? '0' + hours : hours;
        minutesDisplay.textContent = minutes < 10 ? '0' + minutes : minutes;
        secondsDisplay.textContent = seconds < 10 ? '0' + seconds : seconds;
    }

    function resetTimer() {
        clearInterval(timer);
        hoursDisplay.textContent = '00';
        minutesDisplay.textContent = '00';
        secondsDisplay.textContent = '00';
    }
});











// kalkulyator

document.addEventListener('DOMContentLoaded', function () {
    const screen = document.querySelector('.calc__screen-out');
    const buttons = document.querySelectorAll('.calc__btn');

    let currentInput = '';
    let result = '';

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const buttonText = button.innerText;

            if (buttonText === 'ac') {
                currentInput = '';
                result = '';
            } else if (buttonText === 'ce') {
                currentInput = currentInput.slice(0, -1);
            } else if (buttonText === '=') {
                try {
                    result = eval(currentInput);
                } catch (error) {
                    result = 'Error';
                }
            } else {
                currentInput += buttonText;
            }

            screen.innerText = result !== '' ? result : currentInput;
        });
    });
});
