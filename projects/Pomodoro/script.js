const timerDisplay = document.getElementById("timer");
const pomodoroBtn = document.getElementById("pomodoro");
const shortBreakBtn = document.getElementById("shrt-break");
const longBreakBtn = document.getElementById("long-break");


let currentMode = "pomodoro";
let timerDuration = 25 * 60; // Default to 25 minutes for Pomodoro
let timerInterval;

function formatTime(seconds) {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
}


function setMode(mode) {
    clearInterval(timerInterval); // stop if running
    currentMode = mode;

    if (mode === 'pomodoro') timeLeft = 25 * 60;
    if (mode === 'short-break') timeLeft = 5 * 60;
    if (mode === 'long-break') timeLeft = 15 * 60;

    updateTimerDisplay();
    updateActiveButton(mode);


}

function updateTimerDisplay() {
    timerDisplay.textContent = formatTime(timerLeft);
}

function updateActiveButton(mode) {
    document.querySelectorAll('.mode-buttons button').forEach(button => {
        button.classList.remove('active');
    })
    document.getElementById(mode).classList.add('active');

}

pomodoroBtn.addEventListener("click", () => setMode('pomodoro'));
shortBreakBtn.addEventListener("click", () => setMode('short-break'));
longBreakBtn.addEventListener("click", () => setMode('long-break'));

