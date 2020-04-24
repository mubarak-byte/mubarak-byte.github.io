const countdown = new Date("may 29,2020,00:00:00").getTime();
const x = setInterval(function () {
    const nowdate = new Date().getTime();
    const d = countdown - nowdate;
    const weeks = Math.floor(d / (1000 * 60 * 60 * 24));
    const days = Math.floor((d % (1000 * 60 * 60 * 24)) / (1000 * 60))
    const hours = Math.floor((d % (1000 * 60 * 60)) / (1000 * 60));
    const mints = Math.floor((d % (1000 * 60)) / 1000);
    document.getElementById("weeks").innerHTML = weeks;
    document.getElementById("days").innerHTML = days;
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("mint").innerHTML = mints;

    if (d <= 0) {
        clearInterval(x);
    }

}, 1000);