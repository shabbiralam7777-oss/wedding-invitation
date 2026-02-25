// 1. Set the wedding date
const weddingDate = new Date("April 12, 2026 00:00:00").getTime();

// 2. Update the countdown every 1 second
const countdownFunction = setInterval(function() {

    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the wedding date
    const distance = weddingDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // 3. Display the result in the element with id="timer"
    document.getElementById("timer").innerHTML = `
        <div style="display: flex; justify-content: space-around; margin-top: 10px;">
            <div><span style="display: block; font-size: 1.5rem; font-weight: bold; color: #800000;">${days}</span> Days</div>
            <div><span style="display: block; font-size: 1.5rem; font-weight: bold; color: #800000;">${hours}</span> Hrs</div>
            <div><span style="display: block; font-size: 1.5rem; font-weight: bold; color: #800000;">${minutes}</span> Min</div>
            <div><span style="display: block; font-size: 1.5rem; font-weight: bold; color: #800000;">${seconds}</span> Sec</div>
        </div>
    `;

    // 4. If the countdown is finished, display a message
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("timer").innerHTML = "Hooray! The Wedding Day is Here!";
    }
}, 1000);