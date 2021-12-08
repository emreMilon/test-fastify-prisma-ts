import {Prisma, PrismaClient} from "@prisma/client"
import  {FastifyRequest, FastifyReply} from "fastify"
import { IPost, ICreatePostBody } from "../types/typescript";

const prisma = new PrismaClient()

export type BlogWhereUniqueInput = {
    title?: string
  }

export const getPosts = async (req: FastifyRequest, reply: FastifyReply) => {
    try {
        const posts : IPost[] = await prisma.blog.findMany()

        return reply.send({
            status: 200,
            data: posts,
            message:"All posts are found"
        })

    } catch (error) {
        console.error(error)
    }
} 

export const createPost = async (req: FastifyRequest | any, reply: FastifyReply) => {

    

    const existingId = await prisma.blog.findUnique({
        where: {id:  req.body.id }
    })

    if (existingId)
      return reply
        .send({ message: "This post Id is already used" });

    const {id, title, content, category} = req.body

    try {
        const post : IPost = await prisma.blog.create({
            data: {
                id,
                title,
                content,
                category
            }
        })
        reply.send({ 
            status: "OK",
            msg: "Post created successfully",
            data: <IPost>post
        })
    }
    catch (err: any) {
        reply.send(err.message)
    }
}

export const updatePost = async (req: FastifyRequest | any, reply: FastifyReply) => {

    const {id, title, content, category} = req.body

   

    try {
        const post : IPost = await prisma.blog.update({
            where: { id : req.params.id },
            data: {
                id,
                title,
                content,
                category
            }
        })
        reply.send({ 
            status: "OK",
            msg: "Post updated successfully",
            data: <IPost>post
        })
    }
    catch (err: any) {
        reply.send(err.message)
    }

}


export const deletePost = async (req:FastifyRequest | any , reply: FastifyReply) => {
    try {
        const post: IPost = await prisma.blog.delete({
            where: {id: req.params.id}
        })

        reply.send({
            status: '200',
            message: `${post?.id} deleted successfully!`,
        })
    } catch (error: any) {
        reply.send(error.message)
    }
}