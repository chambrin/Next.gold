import db from '../lib/db.js';

const users = [
 { name: 'John Doe', email: 'john.doe@example.com' },
 { name: 'Jane Doe', email: 'jane.doe@example.com' },
];

async function seed() {
 for (const user of users) {
  await db.user.create({ data: user });
 }
}

seed().catch(console.error);
