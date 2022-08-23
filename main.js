#!/usr/bin/env node

let os = require('os');

function greeting() {
    let hours = new Date().getHours();
    if(hours < 12) return "good morning";
    if(hours < 18) return "good afternoon";
    return "good night";

}

// greet the humans
let user = os.userInfo().username;
console.log(greeting() + " " + user);