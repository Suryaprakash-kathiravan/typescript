
export interface Comment {
    id: string;
    author: string;
    content: string;
    createdAt: Date;
}
  

export interface Blog {
    id: string;
    title: string;
    author: string;
    content: string;
    comments: Comment[];
    createdAt: Date;
}
  

export interface Blogs {
    blogs: Blog[];
}
  