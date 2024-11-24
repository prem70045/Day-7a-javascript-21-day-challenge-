// Function to update the time
function updateTime() {
    const clock = document.getElementById('clock');
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Pad single digit minutes and seconds with leading zeros
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Set the clock text to the current time
    clock.textContent = `${hours}:${minutes}:${seconds}`;
}

// Update the clock every second
setInterval(updateTime, 1000);

// Initialize the clock immediately
updateTime();
