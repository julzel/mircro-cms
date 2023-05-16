import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./SearchBar.scss";
import InputField from "../InputField";
import Button from "../Button";
import { IPost } from "../../types";

interface SearchBarProps {
  posts: IPost[];
}

const SearchBar: React.FC<SearchBarProps> = ({ posts }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState<IPost[]>([]);
  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    if (value === "") {
      setFilteredPosts([]);
    } else {
      const filtered = posts.filter((post) =>
        post.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredPosts(filtered);
    }
  };

  const handleSearch = () => {
    if (filteredPosts.length === 1) {
      navigate(`/blog/${filteredPosts[0].id}`);
    }
  };

  const handleClick = (id: number) => {
    setSearchTerm("");
    setFilteredPosts([]);
    navigate(`/blog/${id}`);
  };

  return (
    <div className="search-bar">
      <InputField
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      <Button onClick={handleSearch}>Search</Button>
      {searchTerm !== "" && filteredPosts.length > 0 && (
        <div className="search-bar_results">
          {filteredPosts.map((post) => (
            <div key={post.id} onClick={() => handleClick(post.id)}>
              {post.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
