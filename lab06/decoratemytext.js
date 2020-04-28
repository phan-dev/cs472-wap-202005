window.onload = function(){
    "use strict";
    // put all of your code here
    let txt = document.getElementById("txt");
    let btn = document.getElementById("btn-bigger");
    let chk = document.getElementById("chk-bling");
    let btnConvert = document.getElementById("btn-convert");
    let btnReplace = document.getElementById("btn-replace");

    btn.addEventListener("click", time);
    chk.addEventListener("change", bling);
    btnConvert.addEventListener("click", convert);
    btnReplace.addEventListener("click", replace);

    function time() {
        setInterval(bigger, 500);
    }

    function bigger() {
        let size = parseInt(getComputedStyle(txt).fontSize); //return unit is px, 1px = 0.75pt
        //txt.style.fontSize //return empty
        txt.style.fontSize = parseInt(size * 0.75) + 2  + "pt";
    }

    function bling() {
        if(chk.checked) {
            txt.style.fontWeight = "bold";
            txt.style.color = "green";
            txt.style.textDecoration = "underline";
            document.body.style.backgroundImage = "url('https://courses.cs.washington.edu/courses/cse190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
        } else {
            txt.style.fontWeight = "normal";
            txt.style.color = "black";
            txt.style.textDecoration = "none";
        }
    }

    function convert() {
        let words = txt.value.split(" ");
        let vowels = ["e", "a", "i", "u", "o"];
        words.map((w,i) => {
            if(vowels.indexOf(w.charAt(0)) > -1){
                words[i] = w + "ay";
            } else {
                words[i] = w.substr(1) + w.charAt(0) + "ay";
            }
        });
        txt.value = words.join(" ");
    }

    function replace() {
        let words = txt.value.split(" ");
        words.forEach((w,i) => {
            if(w.length>=5){
                words[i] = "Malkovitch";
            }
        });
        txt.value = words.join(" ");
    }
};