"use strict";

function time() {
    let now = new Date();
    let day = now.getDate();
    let month = now.getMonth()+1;
    let year = now.getFullYear();
    let hour = now.getHours();
    let minute = formatTime(now.getMinutes());
    let second = formatTime(now.getSeconds());
    document.getElementById("clock").innerHTML = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
    let t = setTimeout(time, 500);
}

function formatTime(i) {
    if (i < 10) {
        i = "0" + i
    };
    return i;
}

time();