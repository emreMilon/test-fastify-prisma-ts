import {PrismaClient, Prisma} from "@prisma/client";

const prisma = new PrismaClient();

const blogData : Prisma.BlogCreateInput[] = [
    {
        id: "1",
        title: "Getting started with Prisma, the best TypeScript ORM",
        content: "Getting started with Prisma, the best TypeScript ORM",
        category: "programming"
    },
    {
        id: "2",
        title: "Validating Stripe Webhooks using Fastify, Passport and NestJS",
        content: "Validating Stripe Webhooks using Fastify, Passport and NestJS",
        category: "programming"
    },
    {
        id: "3",
        title: "Validating Stripe Webhooks using Fastify, Passport and NestJS",
        content: "In this lesson, we are going to learn how TypeScript came into existence and what problem it solves. We are also going to take a glance at the TypeScript compilation process.",
        category: "web-development"
    }
]

async function main() {
    console.log("Start seeding...")
    for (const b of blogData) {
        const blog = await prisma.blog.create({
            data: b
        })
        console.log(`Created blog with id: ${blog.id}`)
    }
    console.log("Seeding finished.")
}


main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })