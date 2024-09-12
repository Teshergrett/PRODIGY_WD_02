let startTime;
let timerInterval;
let lapCounter = 1;

function startTimer() {
  if (!timerInterval) {
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);
  }
}

function pauseTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  document.getElementById('display').textContent = '00:00:00';
  lapCounter = 1;
  document.getElementById('lap-times').innerHTML = '';
}

function recordLapTime() {
  if (timerInterval) {
    const currentTime = getTimeElapsed();
    const lapTimeItem = document.createElement('li');
    lapTimeItem.textContent = `Lap ${lapCounter}: ${currentTime}`;
    if (lapCounter === 1) {
      lapTimeItem.style.backgroundColor = '#4CAF50';
      lapTimeItem.style.color = 'white';
    }
    document.getElementById('lap-times').prepend(lapTimeItem);
    lapCounter++;
  }
}

function updateTimer() {
  const currentTime = getTimeElapsed();
  document.getElementById('display').textContent = currentTime;
}

function getTimeElapsed() {
  const elapsedTime = Date.now() - startTime;
  const seconds = Math.floor(elapsedTime / 1000) % 60;
  const minutes = Math.floor(elapsedTime / 1000 / 60) % 60;
  const hours = Math.floor(elapsedTime / 1000 / 60 / 60);
  return `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
