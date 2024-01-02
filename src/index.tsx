import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import DefaultErrorPage from "./components/Error/default-error-page";
import PostList from "./features/PostList";
import { convertToPost } from "./utils/convert-to-post";
import { mockPosts } from "./mocks/mock-posts";
import Post from "./features/Post";

const posts = convertToPost(mockPosts);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <DefaultErrorPage />,
    children: [
      {
        path: "home",
        element: <PostList posts={posts} />,
      },
      {
        path: "post/:postId",
        element: <Post />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
