var timer
var curr

var diff
setInterval(time, 1000)

function time() {
    curr = new Date();
    diff = Math.floor((curr - timer) / 1000)
    console.log(diff);
    if (diff <= 30) {
        document.getElementById("t1").innerHTML = 30 - diff
        document.getElementById("t2").innerHTML = 30 - diff
        document.getElementById("t3").innerHTML = 60 - diff
        document.getElementById("t4").innerHTML = 90 - diff
    }
    else if (diff <= 60) {
        document.getElementById("t1").innerHTML = 120 - diff
        document.getElementById("t2").innerHTML = 60 - diff
        document.getElementById("t3").innerHTML = 60 - diff
        document.getElementById("t4").innerHTML = 90 - diff
    }
    else if (diff <= 90) {
        document.getElementById("t1").innerHTML = 120 - diff
        document.getElementById("t2").innerHTML = 150 - diff
        document.getElementById("t3").innerHTML = 90 - diff
        document.getElementById("t4").innerHTML = 90 - diff
    }
    else if (diff <= 120) {
        document.getElementById("t1").innerHTML = 120 - diff
        document.getElementById("t2").innerHTML = 150 - diff
        document.getElementById("t3").innerHTML = 180 - diff
        document.getElementById("t4").innerHTML = 120 - diff
    }
}

function start() {
    timer = new Date();
    setTimeout(g1, 0);
    setTimeout(o1, 25000);
    setTimeout(g2, 30000);
    setTimeout(o2, 55000);
    setTimeout(g3, 60000);
    setTimeout(o3, 85000);
    setTimeout(g4, 90000);
    setTimeout(o4, 115000);
    setTimeout(restart, 120000);
}


function g1() {
    console.log("g1");

    document.getElementById("g1").style.background = "green"
    document.getElementById("o1").style.background = "white"
    document.getElementById("r1").style.background = "white"

    document.getElementById("g2").style.background = "white"
    document.getElementById("o2").style.background = "white"
    document.getElementById("r2").style.background = "red"

    document.getElementById("g3").style.background = "white"
    document.getElementById("o3").style.background = "white"
    document.getElementById("r3").style.background = "red"

    document.getElementById("g4").style.background = "white"
    document.getElementById("o4").style.background = "white"
    document.getElementById("r4").style.background = "red"
}
function o1() {
    console.log("o1");

    document.getElementById("g1").style.background = "white"
    document.getElementById("o1").style.background = "orange"
    document.getElementById("r1").style.background = "white"

    document.getElementById("g2").style.background = "white"
    document.getElementById("o2").style.background = "white"
    document.getElementById("r2").style.background = "red"

    document.getElementById("g3").style.background = "white"
    document.getElementById("o3").style.background = "white"
    document.getElementById("r3").style.background = "red"

    document.getElementById("g4").style.background = "white"
    document.getElementById("o4").style.background = "white"
    document.getElementById("r4").style.background = "red"
}
function g2() {
    console.log("g2");

    document.getElementById("g1").style.background = "white"
    document.getElementById("o1").style.background = "white"
    document.getElementById("r1").style.background = "red"

    document.getElementById("g2").style.background = "green"
    document.getElementById("o2").style.background = "white"
    document.getElementById("r2").style.background = "white"

    document.getElementById("g3").style.background = "white"
    document.getElementById("o3").style.background = "white"
    document.getElementById("r3").style.background = "red"

    document.getElementById("g4").style.background = "white"
    document.getElementById("o4").style.background = "white"
    document.getElementById("r4").style.background = "red"
}
function o2() {
    console.log("o2");

    document.getElementById("g1").style.background = "white"
    document.getElementById("o1").style.background = "white"
    document.getElementById("r1").style.background = "red"

    document.getElementById("g2").style.background = "white"
    document.getElementById("o2").style.background = "orange"
    document.getElementById("r2").style.background = "white"

    document.getElementById("g3").style.background = "white"
    document.getElementById("o3").style.background = "white"
    document.getElementById("r3").style.background = "red"

    document.getElementById("g4").style.background = "white"
    document.getElementById("o4").style.background = "white"
    document.getElementById("r4").style.background = "red"
}

function g3() {
    console.log("g3");

    document.getElementById("g1").style.background = "white"
    document.getElementById("o1").style.background = "white"
    document.getElementById("r1").style.background = "red"

    document.getElementById("g2").style.background = "white"
    document.getElementById("o2").style.background = "white"
    document.getElementById("r2").style.background = "red"

    document.getElementById("g3").style.background = "green"
    document.getElementById("o3").style.background = "white"
    document.getElementById("r3").style.background = "white"

    document.getElementById("g4").style.background = "white"
    document.getElementById("o4").style.background = "white"
    document.getElementById("r4").style.background = "red"
}

function o3() {
    console.log("o3");


    document.getElementById("g1").style.background = "white"
    document.getElementById("o1").style.background = "white"
    document.getElementById("r1").style.background = "red"

    document.getElementById("g2").style.background = "white"
    document.getElementById("o2").style.background = "white"
    document.getElementById("r2").style.background = "red"

    document.getElementById("g3").style.background = "white"
    document.getElementById("o3").style.background = "orange"
    document.getElementById("r3").style.background = "white"

    document.getElementById("g4").style.background = "white"
    document.getElementById("o4").style.background = "white"
    document.getElementById("r4").style.background = "red"
}

function g4() {

    console.log("g4");


    document.getElementById("g1").style.background = "white"
    document.getElementById("o1").style.background = "white"
    document.getElementById("r1").style.background = "red"

    document.getElementById("g2").style.background = "white"
    document.getElementById("o2").style.background = "white"
    document.getElementById("r2").style.background = "red"

    document.getElementById("g3").style.background = "white"
    document.getElementById("o3").style.background = "white"
    document.getElementById("r3").style.background = "red"

    document.getElementById("g4").style.background = "green"
    document.getElementById("o4").style.background = "white"
    document.getElementById("r4").style.background = "white"
}
function o4() {

    console.log("o4");


    document.getElementById("g1").style.background = "white"
    document.getElementById("o1").style.background = "white"
    document.getElementById("r1").style.background = "red"

    document.getElementById("g2").style.background = "white"
    document.getElementById("o2").style.background = "white"
    document.getElementById("r2").style.background = "red"

    document.getElementById("g3").style.background = "white"
    document.getElementById("o3").style.background = "white"
    document.getElementById("r3").style.background = "red"

    document.getElementById("g4").style.background = "white"
    document.getElementById("o4").style.background = "orange"
    document.getElementById("r4").style.background = "white"
}
function restart() {
    clearTimeout()
    start()
} 