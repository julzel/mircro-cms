import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import CreatePost from "../CreatePost";

// Create a mock function for the updatePosts prop
const mockUpdatePosts = jest.fn();

test("CreatePost form works correctly", () => {
  // Render the CreatePost component with a MemoryRouter because it uses react-router hooks
  render(
    <MemoryRouter>
      <Routes>
        <Route
          path="/"
          element={<CreatePost updatePosts={mockUpdatePosts} />}
        />
        <Route path="/blog" element={<div>Blog</div>} />
      </Routes>
    </MemoryRouter>
  );

  // Get the title input field and change its value
  const titleInput = screen.getByLabelText("Title:") as HTMLInputElement;
  fireEvent.change(titleInput, { target: { value: "Test Title" } });
  expect(titleInput.value).toBe("Test Title");

  // Get the content input field and change its value
  const contentInput = screen.getByLabelText("Content:") as HTMLInputElement;
  fireEvent.change(contentInput, { target: { value: "Test Content" } });
  expect(contentInput.value).toBe("Test Content");

  // Get the images input field and change its value
  const imageInput = screen.getByLabelText("Images:") as HTMLInputElement;
  fireEvent.change(imageInput, { target: { value: "Test Image URL" } });
  expect(imageInput.value).toBe("Test Image URL");

  // Get the videos input field and change its value
  const videoInput = screen.getByLabelText("Videos:") as HTMLInputElement;
  fireEvent.change(videoInput, { target: { value: "Test Video URL" } });
  expect(videoInput.value).toBe("Test Video URL");

  // Get the submit button and click it
  const submitButton = screen.getByRole("button", { name: /Create Post/i });
  fireEvent.click(submitButton);

  // Verify that the mockUpdatePosts function was called
  expect(mockUpdatePosts).toHaveBeenCalled();
});
