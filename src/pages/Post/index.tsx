import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IPost } from "../../types";
import "./Post.scss";
import TextBlock from "../../components/TextBlock";

const Post = () => {
  const { id = "" } = useParams<{ id: string }>();
  const [post, setPost] = useState<IPost | null>(null);

  useEffect(() => {
    const storedPosts = localStorage.getItem("posts");
    if (storedPosts) {
      const parsedPosts = JSON.parse(storedPosts);
      const foundPost = parsedPosts.find((p: IPost) => p.id === parseInt(id));
      if (foundPost) {
        setPost(foundPost);
      }
    }
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="page post">
      <h1>{post.title}</h1>
      <div className="post-images">
        {post && post.media && (
          <div>
            {post.media.images &&
              post.media.images.map((image, index) => (
                <img key={index} src={image} alt={`article ${index + 1}`} />
              ))}
          </div>
        )}
      </div>
      <TextBlock>{post.content}</TextBlock>
      <div className="post-videos">
        {post && post.media && (
          <div>
            {post.media.videos &&
              post.media.videos.map((video, index) => (
                <iframe
                  key={index}
                  src={video}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              ))}
          </div>
        )}
      </div>

      <div className="post-actions">
        <Link to={`/blog/edit/${post.id}`} className="link-button">
          Edit Post
        </Link>
      </div>
    </div>
  );
};

export default Post;
