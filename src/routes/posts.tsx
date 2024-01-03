import React, { FC } from "react";
import PostList from "../features/PostList";
import { convertToPost } from "../utils/convert-to-post";
import { mockPosts } from "../mocks/mock-posts";
import { useLoaderData } from "react-router-dom";
import Post from "../types/Post";

export async function loader() {
  const posts = convertToPost(mockPosts);
  return posts;
}

const Home: FC = () => {
  const posts = useLoaderData() as Post[];
  return <PostList posts={posts} />;
};

export default Home;
