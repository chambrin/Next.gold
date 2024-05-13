#!/usr/bin/env node

const degit = require('degit');
const path = require('path');

const emitter = degit('https://github.com/chambrin/next.gold', {
    progress: true
});

let targetDirectory = process.argv[2];
if (!targetDirectory) {
    console.error('Please provide a folder name for your new project.');
    process.exit(1);
}

targetDirectory = path.resolve(process.cwd(), targetDirectory);

emitter.clone(targetDirectory).then(() => {
    console.log('Your NextJs Gold project has been successfully cloned!');
}).catch(err => {
    console.error('Unable to clone the project:', err);
    process.exit(1);
});