let [seconds, minutes, hours] = [0, 0, 0];
let display = document.getElementById("display");
let interval = null;
let lapsList = document.getElementById("laps");

function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  display.innerText = `${h}:${m}:${s}`;
}

function stopwatch() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }
  updateDisplay();
}

function start() {
  if (interval) return;
  interval = setInterval(stopwatch, 1000);
}

function pause() {
  clearInterval(interval);
  interval = null;
}

function reset() {
  pause();
  [seconds, minutes, hours] = [0, 0, 0];
  updateDisplay();
  lapsList.innerHTML = "";
}

function lap() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let li = document.createElement("li");
  li.innerText = `Lap - ${h}:${m}:${s}`;
  lapsList.appendChild(li);
}
