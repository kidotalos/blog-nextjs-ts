import Link from "next/link";
import { FC } from "react";
import { Layout } from "../../components/Layout";
import { getAllBlogIds, getBlogData } from "../../lib/blogs";
import {BlogDetails} from "../../lib/blogs-interface";

const BlogDetailPage = ({ blog }: { blog: BlogDetails }) => {
  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <Layout title={blog.blogTitle}>
      <p className="m-4">
        {"ID : "}
        {blog.blogId}
      </p>
      <p className="mb-8 text-xl font-bold">{blog.blogTitle}</p>
      <p className="px-10">{blog.blogContent}</p>
      <Link href="/blog-page" passHref>
        <div className="flex cursor-pointer mt-12">
          <svg
            className="w-6 h-6 mr-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span>Back to blog-page</span>
        </div>
      </Link>
    </Layout>
  );
};

export default BlogDetailPage;

export async function getStaticPaths() {
  const paths: string[] = await getAllBlogIds();

  console.log(paths);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: BlogDetails }) {
  // ここでjsonがネストしてたから上手く取り出した

  const blogBef = await getBlogData(params.blogId);
  const blog = blogBef.blog;
  return {
    props: { blog },
  };
}