import React from "react";
import Blog from "../components/Blog";
import { Layout } from "../components/Layout";
import { getAllBlogsData } from "../lib/blogs";
import { BlogDetails, Blogs } from "../lib/blogs-interface";
// import Blogs from "../lib/blogs-interface";

// getStaticProps()からpropsをもらってそれをマップで展開している
// その後Blogっていう自分で作ったcomponentにそれを渡しているイメージ
const BlogPage = ({ blogs }: Blogs) => {
  return (
    <Layout title="Blog">
      <ul className="m-10">
        {blogs &&
          blogs.map((blog: BlogDetails) => (
            <Blog key={blog.blogId} blogDetails={blog} />
          ))}
      </ul>
    </Layout>
  );
};

export default BlogPage;

// ビルド時(開発環境ではリクエスト毎)にこの関数が実行される
// Pre-renderingしてくれる
export async function getStaticProps() {
  const blogs: Blogs = await getAllBlogsData();
  return {
    props: { blogs },
  };
}
