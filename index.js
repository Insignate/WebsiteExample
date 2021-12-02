'use strict'

const labelDateTime = document.getElementById('datetime-display');
const formCountdown = document.getElementById('countdown-manager');
const dtCountdown = document.getElementById('datetime-countdown');

let timeNow = 0;
let countdownTo = 0;
let countdownInterval = null;

setDate();
setInterval(() => setDate(), 1000);

formCountdown.addEventListener('submit', e => setCountdown(e));

function setCountdown(e){
  clearInterval(countdownInterval);
  e.preventDefault();
  countdownTo = new Date(dtCountdown.value);
  countdownTo = Math.floor(countdownTo.getTime()/1000);
  timeNow = new Date();
  timeNow = Math.floor(timeNow.getTime()/1000);

  if (countdownTo > timeNow){
    countdownInterval = setInterval(() => startCountdown(), 1000);
    alert("Countdown Set!");
  }
  else alert("Please set the count down to the future!");
}

function startCountdown(){
  timeNow++;
  if (countdownTo < timeNow){
    alert("Countdown Reached!")
    clearInterval(countdownInterval);
  }
}



function setDate(){
  const datetime = new Date();
  labelDateTime.innerText = (`${datetime.getMonth()+1}/${datetime.getDate()}/${datetime.getFullYear()} - ${datetime.getHours().toString().padStart(2, '0')}:${datetime.getMinutes().toString().padStart(2, '0')}:${datetime.getSeconds().toString().padStart(2, '0')}`);
}

