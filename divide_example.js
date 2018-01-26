#!/usr/bin/env node

var argv = require('yargs')
    .usage('Usage: $0 -x [num] -y [num]')
    .demand(['s','e'])
    .argv;

console.log('Start pass is: ', argv.s, 'End pass is: ', argv.e);
