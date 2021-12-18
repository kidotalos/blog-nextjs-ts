import Link from "next/link";
import { FC } from "react";
import {BlogDetails} from "../lib/blogs-interface";

export const Blog: FC<{ blogDetails: BlogDetails }> = (blog) => {
  return (
    <div>
      <span>{blog.blogDetails.blogId}</span>
      <Link href={`/blogs/${blog.blogDetails.blogId}`} passHref>
        <a>
          {" : "}
          <span className="cursor-pointer text-blue-500 border-b border-blue-500 hover:bg-gray-200">
            {blog.blogDetails.blogTitle}
          </span>
        </a>
      </Link>
    </div>
  );
};

export default Blog;
