import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import DefaultErrorPage from "./components/Error/default-error-page";
import Post, { loader as postLoader } from "./routes/post";
import Home, { loader as homeLoader } from "./routes/posts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <DefaultErrorPage />,
    children: [
      {
        path: "home",
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: "post/:postId",
        element: <Post />,
        loader: postLoader,
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
