#!/usr/bin/env node

var CryptoJS = require('crypto-js');
const readline = require('readline');
const yargs = require('yargs')
.command(
'*',
  'Crack the iOS restrictions Password')
  .option('hash', {
      alias: 'H',
      describe: 'The Base64 hash'
    })
  .option('salt', {
      alias: 's',
      describe: 'The Base64 salt'
  })
  .option('start', {
    alias: 'S',
    describe: 'The starting point of the bruteforce',
    default: 0
  })
  .option('end', {
    alias: 'e',
    describe: 'The ending point of the bruteforce',
    default: 100
  })
  .option('interval', {
    alias: 'i',
    describe: 'The interval of passwords to check (separated by a dash - )',
    default: "0-100"
  })
  .demandOption(['hash','salt'], 'Please provide the necessary arguments to start the crack')
.help()
.argv


var argStart = yargs.start
var argEnd = yargs.end;


// Example hash +ap25dpiS4wC53vl0iouBQ9hNo0=
// Example salt 8qs/Eg==

var ENCODED_KEY = yargs.hash;
var ENCODED_SALT = yargs.salt;

var parsedKey = CryptoJS.enc.Base64.parse(ENCODED_KEY);
var parsedSalt = CryptoJS.enc.Base64.parse(ENCODED_SALT);

function decode(key, salt, start, end){
  for(var i=start; i<=end; i++){
        var pass = "0000";
        pass = pass.slice(i.toString().length) + i;
        console.log("Trying iteration: ", pass);
        var cipher = CryptoJS.PBKDF2(pass, salt, {keySize: 5, iterations: 1000}).toString();
        if(cipher == key){
          console.log("Key found! ",i);
          return true;
        }
  }
  console.log("Reached the end and no key was found", "\007");
}

console.log('Trying from ',argStart, 'to', argEnd);
decode(parsedKey, parsedSalt,argStart, argEnd );
