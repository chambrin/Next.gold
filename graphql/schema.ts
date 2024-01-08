import { createSchema } from 'graphql-yoga';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const schema = createSchema({
 typeDefs: /* GraphQL */ `
  type Query {
   hello: String
   users: [User]
  }
  type User {
   id: ID!
   name: String!
   email: String!
  }
 `,
 resolvers: {
  Query: {
   hello: () => 'world',
   users: async (_, args, context) => await prisma.user.findMany(),
  },
 },
});
