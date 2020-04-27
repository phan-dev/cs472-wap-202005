"use strict";

//Login Form
document.getElementById("btn-submit").addEventListener("click", () => {
    console.log(document.getElementById("input-email").value);
    console.log(document.getElementById("input-password").value);
    console.log(document.getElementById("input-url").value);
    console.log(document.getElementById("check-me-out").checked);
});