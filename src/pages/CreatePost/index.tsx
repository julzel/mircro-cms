import React, { FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IPost } from "../../types";
import "./CreatePost.scss";
import InputField from "../../components/InputField";
import TextArea from "../../components/TextArea";
import Button from "../../components/Button";

const initialPost: IPost = {
  id: 0,
  title: "",
  content: "",
  media: {
    images: ["", ""],
    videos: ["", ""],
  },
};

interface CreatePostProps {
  isEdit?: boolean;
  updatePosts: (post: IPost) => void;
}

const CreatePost: React.FC<CreatePostProps> = ({
  isEdit = false,
  updatePosts,
}) => {
  const { id = "" } = useParams<{ id: string }>();
  const [post, setPost] = useState<IPost>(initialPost);
  const navigate = useNavigate();

  const handleTitleChange = (e: FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setPost((prevPost) => ({
      ...prevPost,
      title: value,
    }));
  };

  const handleContentChange = (e: FormEvent<HTMLTextAreaElement>) => {
    const { value } = e.currentTarget;
    setPost((prevPost) => ({
      ...prevPost,
      content: value,
    }));
  };

  const handleImageChange = (e: FormEvent<HTMLInputElement>, index: number) => {
    const { value } = e.currentTarget;
    setPost((prevPost) => {
      let images = prevPost.media?.images || [];
      images[index] = value;
      return {
        ...prevPost,
        media: {
          ...prevPost.media,
          images,
        },
      };
    });
  };

  const handleVideoChange = (e: FormEvent<HTMLInputElement>, index: number) => {
    const { value } = e.currentTarget;
    setPost((prevPost) => {
      let videos = prevPost.media?.videos || [];
      videos[index] = value;
      return {
        ...prevPost,
        media: {
          ...prevPost.media,
          videos,
        },
      };
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isEdit) {
      updatePosts(post);
    } else {
      const newPost = {
        ...post,
        id: Date.now(), // generate a new unique id for the new post
      };
      updatePosts(newPost);
    }
    navigate("/blog");
  };

  useEffect(() => {
    if (isEdit && id) {
      const storedPosts = localStorage.getItem("posts");
      if (storedPosts) {
        const parsedPosts = JSON.parse(storedPosts);
        const foundPost = parsedPosts.find((p: IPost) => p.id === parseInt(id));
        if (foundPost) {
          setPost(foundPost);
        }
      }
    }
  }, [id, isEdit]);

  return (
    <div className="page create-post">
      <form onSubmit={handleSubmit}>
        <div className="post-sections">
          <div className="post-content">
            <div className="input-group">
              <label>
                <span>Title:</span>
                <InputField
                  name="title"
                  value={post ? post.title : ""}
                  onChange={handleTitleChange}
                />
              </label>
            </div>
            <div className="input-group">
              <label>
                <span>Content:</span>
                <TextArea
                  name="content"
                  value={post ? post.content : ""}
                  onChange={handleContentChange}
                />
              </label>
            </div>
          </div>
          <div className="post-media">
            <div className="input-group">
              <label>
                <span>Images:</span>
                <InputField
                  name="image1"
                  value={post.media?.images ? post.media.images[0] : ""}
                  onChange={(e) => handleImageChange(e, 0)}
                />
                <InputField
                  name="image2"
                  value={post.media?.images ? post.media.images[1] : ""}
                  onChange={(e) => handleImageChange(e, 1)}
                />
              </label>
            </div>
            <div className="input-group">
              <label>
                <span>Videos:</span>
                <InputField
                  name="video1"
                  value={post.media?.videos ? post.media.videos[0] : ""}
                  onChange={(e) => handleVideoChange(e, 0)}
                />
                <InputField
                  name="video2"
                  value={post.media?.videos ? post.media.videos[1] : ""}
                  onChange={(e) => handleVideoChange(e, 1)}
                />
              </label>
            </div>
          </div>
        </div>
        <Button type="submit">{isEdit ? "Update Post" : "Create Post"}</Button>
      </form>
    </div>
  );
};

export default CreatePost;
