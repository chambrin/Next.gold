import { Elysia } from "elysia";
import next, { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev, dir: path.resolve(__dirname, '../') });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
    const app = new Elysia();

    app.get('*', (req: NextApiRequest, res: NextApiResponse) => {
        return handle(req, res);
    });

    app.listen(4000, () => {
        console.log(`🦊 Elysia is running at http://localhost:4000`);
    });
});