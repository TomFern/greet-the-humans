#!/usr/bin/env node

let os = require('os');

// greet the humans
let user = os.userInfo().username;
console.log("hey " + user);