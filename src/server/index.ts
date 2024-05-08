import YogaServer from "./config/yoga";

YogaServer.listen(4000);


console.log(
    `🦊 Elysia is running at ${YogaServer.server?.hostname}:${YogaServer.server?.port}`
);

