import { Elysia } from 'elysia';
import { yoga } from '@elysiajs/graphql-yoga';

const YogaServer = new Elysia()
.use(
    yoga({
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
    })
)

export default YogaServer;