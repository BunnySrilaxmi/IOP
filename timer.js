function startTimer() {
    const durationInput = document.getElementById("duration");
    const duration = parseFloat(durationInput.value);

    // Check if duration is a valid positive number
    if (isNaN(duration) || duration <= 0) {
        alert("Please enter a valid positive duration in minutes.");
        return;
    }

    const endTime = Date.now() + duration * 60000; // Convert minutes to milliseconds

    const timerInterval = setInterval(function() {
        const currentTime = Date.now();
        const remainingTime = endTime - currentTime;

        if (remainingTime <= 0) {
            clearInterval(timerInterval);
            document.getElementById("timer").textContent = "Time's up!";
            document.getElementById("progress-bar").style.width = "100%";
        } else {
            const progress = (duration * 60000 - remainingTime) / (duration * 60000) * 100;
            document.getElementById("progress-bar").style.width = progress + "%";

            const minutes = Math.floor(remainingTime / (1000 * 60));
            const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
            document.getElementById("timer").textContent = "Remaining time: " + minutes + "m " + seconds + "s";
        }
    }, 1000); // Update every second
}
