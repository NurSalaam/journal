import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import DefaultErrorPage from "./components/Error/default-error-page";
import Post, { loader as postLoader } from "./routes/post";
import Home, { loader as homeLoader } from "./routes/posts";
import { ViewingModeProvider } from "./contexts/viewingMode";

export const paths = {
  root: {
    path: "/",
    home: {
      path: "/home",
    },
    post: {
      path: "/post/:postId",
    },
  },
};

const router = createBrowserRouter([
  {
    path: paths.root.path,
    element: <Root />,
    errorElement: <DefaultErrorPage />,
    children: [
      {
        path: paths.root.home.path,
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: paths.root.post.path,
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
    <ViewingModeProvider>
      <RouterProvider router={router} />
    </ViewingModeProvider>
  </React.StrictMode>
);
