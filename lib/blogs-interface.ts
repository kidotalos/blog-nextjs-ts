import Blog from "../components/Blog";

export interface BlogDetails {
  _id: string;
  blogId: number;
  blogTitle: string;
  blogContent: string;
  __v: number;
}



export interface Blogs {
  blogs: BlogDetails[];
}


