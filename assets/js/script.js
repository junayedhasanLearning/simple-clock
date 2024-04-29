const timeText = document.querySelector(".time h2");
const displayDate = document.querySelector(".date p");

function updateTimeAndDate() {
  const now = new Date();
  timeText.textContent = now.toLocaleTimeString();
  displayDate.textContent = now.toDateString();
}

document.addEventListener("DOMContentLoaded", () => {
  updateTimeAndDate();
  setInterval(updateTimeAndDate, 1000);
});
