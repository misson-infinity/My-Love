// Set your target date and time
const targetDate = new Date("2025-01-07T02:10:00").getTime();

// Countdown function
const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update the countdown timer
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // Show hidden content when countdown ends
    if (distance < 0) {
        clearInterval(countdown);
        document.querySelector(".countdown-container").style.display = "none";
        document.getElementById("hiddenContent").classList.remove("hidden");
    }
}, 1000);