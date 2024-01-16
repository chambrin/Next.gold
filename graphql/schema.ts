import { createSchema } from 'graphql-yoga';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export const schema = createSchema({
 typeDefs: /* GraphQL */ `
     type Query {
         hello: String
         users: [User]
         posts: [Post]
     }

     type Mutation {
         login(email: String!, password: String!): User
     }

     type User {
         id: ID!
         name: String!
         email: String!
         role: String!
     }

     type Post {
         id: ID!
         title: String!
         content: String!
         published: Boolean!
         author: User!
     }
 `,
 resolvers: {
  Query: {
   hello: () => 'world',
   users: async (_, args, context) => await prisma.user.findMany(),
   posts: async (_, args, context) => {
    return prisma.post.findMany({
     include: {
      author: true, // Récupère les informations de l'auteur du post
     },
    });
   },
  },
  Mutation: {
   login: async (_, { email, password }, context) => {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
     throw new Error('No such user found');
    }

    const valid = await bcrypt .compare(password, user.password);
    if (!valid) {
     throw new Error('Invalid password');
    }
    return user;
   },
  },
 },
});
