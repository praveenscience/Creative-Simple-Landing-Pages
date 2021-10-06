const timer = document.getElementById("stopwatch");
var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;
// function to start time
function startTimer() {
  if (stoptime == true) {
    stoptime = false;
    timerCycle();
  }
}
// function to stop/pause the time
function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}
// function to run the cycle of the time
function timerCycle() {
  if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);
    sec = sec + 1;
    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }
    if (sec < 10 || sec == 0) {
      sec = "0" + sec;
    }
    if (min < 10 || min == 0) {
      min = "0" + min;
    }
    if (hr < 10 || hr == 0) {
      hr = "0" + hr;
    }
    timer.innerHTML = hr + ":" + min + ":" + sec;
    setTimeout("timerCycle()", 1000);
  }
}
// function to reset the timer
function resetTimer() {
  timer.innerHTML = "00:00:00";
  hr = 0;
  min = 0;
  sec = 0;
  stoptime = true;
}
