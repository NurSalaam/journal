import React, { FC } from "react";
import PostComponent from "../features/Post";
import { convertToPost } from "../utils/convert-to-post";
import { mockPosts } from "../mocks/mock-posts";
import { useLoaderData } from "react-router-dom";
import PostType from "../types/Post";

export async function loader({ params }: { params: any }) {
  //TODO: Replace with real implementation
  const post = convertToPost(mockPosts).find(
    (post) => post.id === params.postId
  );
  if (!post) {
    throw new Error("Post not found");
  }
  return post;
}

const Post: FC = () => {
  const post = useLoaderData() as PostType;
  return <PostComponent post={post} />;
};

export default Post;
