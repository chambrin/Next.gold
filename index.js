#!/usr/bin/env node

const degit = require('degit');
const path = require('path');

const emitter = degit('https://github.com/chambrin/next.gold', {
 progress: true
});

let targetDirectory = process.argv[2];
if (!targetDirectory) {
 console.error('Veuillez fournir un nom de dossier pour votre nouveau projet.');
 process.exit(1);
}

targetDirectory = path.resolve(process.cwd(), targetDirectory);

emitter.clone(targetDirectory).then(() => {
 console.log('Votre projet NextJs Gold a été cloné avec succès !');
}).catch(err => {
 console.error('Impossible de cloner le projet :', err);
 process.exit(1);
});
