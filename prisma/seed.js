const db = require('../lib/db.js');
const bcrypt = require('bcrypt');

const saltRounds = 10;

const users = [
 { name: 'Admin', email: 'admin10@example.com', password: bcrypt.hashSync('adminPassword', saltRounds), role: 'ADMIN' },
 { name: 'User', email: 'user10@example.com', password: bcrypt.hashSync('userPassword', saltRounds), role: 'USER' },
];

const posts = [
 { title: 'Post 1', content: 'Content 1', published: true, author: { connect: { email: 'admin@example.com' } } },
 { title: 'Post 2', content: 'Content 2', published: true, author: { connect: { email: 'admin@example.com' } } },
 { title: 'Post 3', content: 'Content 3', published: true, author: { connect: { email: 'user@example.com' } } },
];

async function seed() {
 for (const user of users) {
  await db.user.create({ data: user });
 }

 for (const post of posts) {
  const { author, ...postData } = post;
  await db.post.create({
   data: {
    ...postData,
    author: {
     connect: {
      email: author.connect.email,
     },
    },
   },
  });
 }

 console.log('Seed completed successfully!');
}

seed().catch(console.error);
