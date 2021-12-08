import {FastifyPluginOptions, HookHandlerDoneFunction,  } from "fastify"
import {createPost} from "../controller/index"
import {getPostsOpts, createPostOpts, updatePostOpts, deletePostOpts} from "./options"

function blogRoutes(fastify: any, options: FastifyPluginOptions , done: HookHandlerDoneFunction) {
    fastify.get("/posts", getPostsOpts)
    fastify.post("/create", createPostOpts)
    fastify.put("/update/:id", updatePostOpts)
    fastify.delete("/delete/:id", deletePostOpts)

    done();
}


export default blogRoutes


