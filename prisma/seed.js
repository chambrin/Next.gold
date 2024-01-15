const db = require('../lib/db.js');
const bcrypt = require('bcrypt');

const saltRounds = 10;

const users = [
 { name: 'Admin', email: 'admin@example.com', password: bcrypt.hashSync('adminPassword', saltRounds), role: 'ADMIN' },
 { name: 'User', email: 'user@example.com', password: bcrypt.hashSync('userPassword', saltRounds), role: 'USER' },
];

async function seed() {
 for (const user of users) {
  await db.user.create({ data: user });
 }
}

seed().catch(console.error);
