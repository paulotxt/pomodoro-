let timer;
let minutes = 25;
let seconds = 0;
let isPaused = false;

function startTimer() {
  if (!timer) {
    timer = setInterval(updateTimer, 1000);
  }
}

function updateTimer() {
  if (!isPaused) {
    if (seconds === 0) {
      if (minutes === 0) {
        clearInterval(timer);
        timer = null;
        alert('Pomodoro concluído!');
        resetTimer();
        return;
      }
      minutes--;
      seconds = 59;
    } else {
      seconds--;
    }
    displayTime();
  }
}

function pauseTimer() {
  isPaused = !isPaused;
}

function resetTimer() {
  clearInterval(timer);
  timer = null;
  minutes = 25;
  seconds = 0;
  isPaused = false;
  displayTime();
}

function displayTime() {
  const minutesStr = minutes < 10 ? '0' + minutes : minutes;
  const secondsStr = seconds < 10 ? '0' + seconds : seconds;
  document.getElementById('timer').innerText = `${minutesStr}:${secondsStr}`;
}
