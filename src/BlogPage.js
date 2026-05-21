import React from "react";
import { Link, Outlet } from "react-router-dom";
import { blogdata } from "./blogdata";

function BlogPage() {
  return (
    <div className="page-container">
      <h1>Blog</h1>

      <Outlet />

      <ul className="blog-list">
        {blogdata.map(post => (
          <BlogLink key={post.slug} post={post}/>
        ))}
      </ul>
    </div>
  );
}

function BlogLink({ post }) {
  return (
    <li>
      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
    </li>
  );
}

export { BlogPage };