let min = 0;
let sec = 0;
let timer = false;

function start() {
    timer = true;
    stopwatch();
}
function stop() {
    timer = false;
}
function reset() {
    timer = false;
    min = 0;
    sec = 0;

    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";

}

function stopwatch() {
    if (timer == true) {
        sec = sec + 1;
        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }
        var secstr = sec;
        var minstr = min;
        if (sec < 10) {
            secstr = "0" + sec;
        }
        if (min < 10) {
            minstr = "0" + min;
        }
        document.getElementById("sec").innerHTML = secstr;
        document.getElementById("min").innerHTML = minstr;
        setTimeout("stopwatch()", 1000)
    }
}
