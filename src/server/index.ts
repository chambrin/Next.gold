import { Elysia } from 'elysia';
import { setupGraphQLServer } from './config/yoga';

const app = new Elysia();

app.use(setupGraphQLServer());

app.get('/hi', () => 'hello')

app.listen(4000);

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);