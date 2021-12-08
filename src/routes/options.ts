import { createPost, deletePost, getPosts, updatePost } from "../controller/index"

const Post = {
    type: "object",
    properties : {
        id: { type: "string" },
        title: {type: "string"},
        content: {type: "string"},
        category: {type: "string"},        
    }
}


export const getPostsOpts = {
    schema: {
        respone: { 
            200: {
                items: Post
            }
        }
    },
    handler: getPosts
}


export const createPostOpts = {
    schema: {
        body: Post,
        respone: {
            200: {
                item: Post
            }
        }
    },
    handler: createPost
}


export const updatePostOpts = {
    schema: {
        body: Post,
        respone: {
            200: {
                item: Post
            }
        }
    },
    handler: updatePost
}

export const deletePostOpts = {
    schema: {
      response: {
        200 :{
          type: 'object',
          properties: {
            message: { type: 'string' },
          },
        },
      },
    },
    handler: deletePost,
  }