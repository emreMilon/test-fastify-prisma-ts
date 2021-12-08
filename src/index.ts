import {fastify} from "fastify"
const Port = process.env.PORT || 7000

const server = fastify({
    logger: true
})

server.register(import("./routes/index"))


const start = async () => {
    try {
        await server.listen(Port);
        console.log("Server started successfully on Port", Port);
    } catch (err) {
        server.log.error(err)
        process.exit(1)
    }
};

start();

