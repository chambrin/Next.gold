import { yoga } from '@elysiajs/graphql-yoga';

export const setupGraphQLServer = () => {
    return yoga({
        typeDefs: /* GraphQL */`
            type Query {
                hi: String
            }
        `,
        resolvers: {
            Query: {
                hi: () => 'Hello from Elysia'
            }
        }
    });
}