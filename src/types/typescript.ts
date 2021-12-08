export interface IPost {
    id: string;
    title: string;
    content: string;
    category: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface ICreatePostBody {
    id: string;
    title: string;
    content: string;
    category: string;
  }