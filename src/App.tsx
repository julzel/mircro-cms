import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// local imports
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Post from "./pages/Post";
import CreatePost from "./pages/CreatePost";
import Contact from "./pages/Contact";
import { IPost } from "./types";
import { initialPosts } from "./data";

function App() {
  const [posts, setPosts] = useState<IPost[]>(initialPosts);

  useEffect(() => {
    // Get posts from local storage
    const storedPosts = localStorage.getItem("posts");

    // If no posts are stored, save the initial posts in the local storage
    if (!storedPosts) {
      localStorage.setItem("posts", JSON.stringify(initialPosts));
    }
  }, []);

  const updatePosts = (post: IPost) => {
    let updatedPosts: IPost[] = [];

    // Check if the post already exists
    const postIndex = posts.findIndex((p) => p.id === post.id);

    if (postIndex !== -1) {
      // Update the post if it already exists
      updatedPosts = [...posts];
      updatedPosts[postIndex] = post;
    } else {
      // Add the post to the array if it doesn't exist
      updatedPosts = [...posts, post];
    }

    // Save the updated array in the local storage
    localStorage.setItem("posts", JSON.stringify(updatedPosts));

    // Update the state
    setPosts(updatedPosts);
  };

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog posts={posts} />} />
          <Route path="/blog/:id" element={<Post />} />
          <Route
            path="/blog/edit/:id"
            element={<CreatePost updatePosts={updatePosts} isEdit={true} />}
          />
          <Route
            path="/blog/create"
            element={<CreatePost updatePosts={updatePosts} />}
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
