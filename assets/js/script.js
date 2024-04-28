const displayTime = document.querySelector(".time");

let timeText = document.createElement("h2");
displayTime.appendChild(timeText);
function updateTime() {
  let currentTime = new Date();
  currentTime = currentTime.toLocaleTimeString();
  timeText.innerText = currentTime;
}

function startUpdatingTime() {
  updateTime();
  setInterval(updateTime, 1000);
}

startUpdatingTime();
