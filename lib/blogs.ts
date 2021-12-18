// import fetch from "node-fetch";
// const fetch = require("node-fetch");

import {BlogDetails} from "./blogs-interface";

const apiUrl = "https://blog-details-api.herokuapp.com/blogs";

// ここでnestjs(API)のブログ一覧をfetch(取得)している
export async function getAllBlogsData() {
  const res = await fetch(apiUrl);
  const blogs = await res.json();
  return blogs;
}

//nestjs(API)からblogのidの一覧をfetch(取得)している
export async function getAllBlogIds() {
  const res = await fetch(apiUrl);
  const blogs = await res.json();
  let blogIdString: string = "";
  return blogs.map((blog: BlogDetails) => {
    blogIdString = blog.blogId.toString();
    return {
      params: {
        blogId: blogIdString,
      },
    };
  });
}

export async function getBlogData(blogId: number) {
  const res = await fetch(`${apiUrl}/${blogId}/`);
  const blog = await res.json();
  return {
    blog,
  };
}
