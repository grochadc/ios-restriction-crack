#!/usr/bin/env node

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
    default: 1
  })
  .option('end', {
    alias: 'e',
    describe: 'The ending point of the bruteforce',
    default: 100
  })
  .demandOption(['hash','salt'], 'Please provide the necessary arguments to crack')
.help()
.argv


console.log('Cracking hash', yargs.hash, 'with salt',yargs.salt, 'starting from', yargs.start, 'and ending in', yargs.end);
