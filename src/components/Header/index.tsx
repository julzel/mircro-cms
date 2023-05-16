import React, { useEffect, useState } from "react";
import { IPost } from "../../types";
import "./Header.scss";
import Logo from "../Logo";
import MainMenu from "../MainMenu";
import SearchBar from "../SearchBar";

const Header: React.FC = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    const storedPosts = localStorage.getItem("posts");
    if (storedPosts) {
      const parsedPosts: IPost[] = JSON.parse(storedPosts);
      setPosts(parsedPosts);
    }
  }, []);

  return (
    <header className="header">
      <div className="header-nav">
        <Logo />
        <MainMenu />
      </div>
      <div className="header-search">
        <SearchBar posts={posts} />
      </div>
    </header>
  );
};

export default Header;
