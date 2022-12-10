// variables

const startStopBtn = document.querySelector("#play-pause-btn");
const resetBtn = document.querySelector("#reset-btn");
let seconds = 0;
let minutes = 0;
let hours = 0;
let leadingseconds = 0;
let leadingminutes = 0;
let leadinghours = 0;
let timerInterval = null;
let timerStatus = "stopped";
// a function to make the watch work
function watch() {
  seconds++;
  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;
  }
  if (minutes / 60 === 1) {
    minutes = 0;
    hours++;
  }
  if (seconds < 10) {
    leadingseconds = "0" + seconds.toString();
  } else {
    leadingseconds = seconds;
  }

  if (minutes < 10) {
    leadingminutes = "0" + minutes.toString();
  } else {
    leadingminutes = minutes;
  }

  if (hours < 10) {
    leadinghours = "0" + hours.toString();
  } else {
    leadinghours = hours;
  }
  let timer = (document.querySelector("#timer").innerText =
    leadinghours + ":" + leadingminutes + ":" + leadingseconds);
}
// start / pause watch
startStopBtn.addEventListener("click", function () {
  if (timerStatus === "stopped") {
    timerInterval = window.setInterval(watch, 1000);
    document.querySelector("#play-pause-btn").innerHTML =
      '<i class="fa-solid fa-pause" id="pause"></i>';
    timerStatus = "started";
  } else {
    window.clearInterval(timerInterval);
    document.querySelector("#play-pause-btn").innerHTML =
      '<i class="fa-solid fa-caret-right" id="play"></i>';
    timerStatus = "stopped";
  }
});
// reset  watch
resetBtn.addEventListener("click", function () {
  window.clearInterval(timerInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.querySelector("#timer").innerHTML = "00:00:00";
  document.querySelector("#play-pause-btn").innerHTML =
    '<i class="fa-solid fa-caret-right" id="play"></i>';
  timerStatus = "stopped";
});
