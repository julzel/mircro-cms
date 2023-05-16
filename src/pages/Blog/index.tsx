import React from "react";
import { Link } from "react-router-dom";
import { IPost } from "../../types";
import "./Blog.scss";

interface BlogProps {
  posts: IPost[];
}

const Blog: React.FC<BlogProps> = ({ posts }) => (
  <div className="page blog">
    <h1>Blog</h1>
    <h2>My Posts</h2>
    <div className="blog-posts">
      {posts.map((post) => (
        <div key={post.id}>
          <Link to={`/blog/${post.id}`}>{post.title}</Link>
        </div>
      ))}
    </div>
    <div className="blog-actions">
      <Link to="/blog/create" className="link-button">
        Add Post
      </Link>
    </div>
  </div>
);

export default Blog;
