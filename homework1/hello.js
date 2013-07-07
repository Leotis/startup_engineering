#!/usr/bin/env node
var fs = require('fs');
var output_file = "output.txt";
var z = "A startup is a business built to grow rapidly.\n"
fs.writeFileSync(output_file, z);
//console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);
