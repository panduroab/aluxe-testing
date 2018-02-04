#!/usr/bin/env node
const yargs = require('yargs')
const path = require('path');
const usage = `
# Aluxe Testing #
Create testing environments for your Node.js projects.
Usage:

$ aluxe-testing [command]

Help:

$ aluxe-testing --help
`;
let argv = yargs
    .usage(usage)
    .argv;

const cmd = argv._.shift() || 'usage';
try {
    switch (cmd) {
        case 'usage':
            console.log(usage);
            break;
        case 'init':
            console.log('Generating aluxe.testing.js file in your project...');
            break;
        default:
            console.log(`Command ${cmd} not found.`);
            console.log(`Try using: $ aluxe-testing --help`);
            break;
    }
} catch (err) {
    throw err;
}