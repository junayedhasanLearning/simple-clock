const displayTime = document.querySelector(".time");
const displayDate = document.querySelector(".date p");

let timeText = document.createElement("h2");
displayTime.appendChild(timeText);
function updateTime() {
  let currentTime = new Date();
  currentTime = currentTime.toLocaleTimeString();
  timeText.innerText = currentTime;
}

function updateDate() {
  let currentDate = new Date();
  currentDate = currentDate.toDateString();
  displayDate.innerText = currentDate;
}

function startUpdatingTime() {
  updateTime();
  setInterval(updateTime, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
  updateDate();
  startUpdatingTime();
});
