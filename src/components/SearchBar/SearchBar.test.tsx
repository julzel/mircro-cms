import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import SearchBar from "../SearchBar";
import { IPost } from "../../types";

const mockPosts: IPost[] = [
  {
    id: 1,
    title: "Test Post 1",
    content: "",
    media: { images: [], videos: [] },
  },
  {
    id: 2,
    title: "Test Post 2",
    content: "",
    media: { images: [], videos: [] },
  },
];

test("SearchBar works correctly", () => {
  render(
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<SearchBar posts={mockPosts} />} />
        <Route path="/blog/:id" element={<div>Blog Post</div>} />
      </Routes>
    </MemoryRouter>
  );

  // Test that the SearchBar is rendered
  const searchBar = screen.getByPlaceholderText("Search...");
  expect(searchBar).toBeInTheDocument();

  // Simulate typing "Test Post 1" into the SearchBar
  fireEvent.change(searchBar, { target: { value: "Test Post 1" } });

  // Test that the corresponding post appears in the search results
  const searchResult = screen.getByText("Test Post 1");
  expect(searchResult).toBeInTheDocument();

  // Simulate clicking on the search result
  fireEvent.click(searchResult);

  // Test that the page navigates to the correct blog post
  const blogPost = screen.getByText("Blog Post");
  expect(blogPost).toBeInTheDocument();
});
