var running = 0;
var time = 0;
var tenths = 0;
var seconds = 0;
var minutes = 0;
var hours = 0;

function startWatch() {
  if(running == 0) {
    running = 1;
    increment();
  }
}

function stopWatch() {
  running = 0;
}

function clearWatch() {
  time = 0;
  document.getElementById('display').innerHTML = "00:00:00";
}

function increment() {
  if(running == 1) {
    setTimeout(function() {
      time++;
      tenths = time % 10;
      seconds = Math.floor(time/10 % 60);
      minutes = Math.floor(time/10/60);
      hours = Math.floor(time/10/60/60);
      if(seconds < 10) {
        seconds = "0" + seconds;
      }
      if(minutes < 10) {
        minutes = "0" + minutes;
      }
      document.getElementById('display').innerHTML = hours + ":" + minutes + ":" + seconds + ":" + tenths;
      increment();
    }, 100)
  }
}
