import React from "react";
import Post, { POST_STATUS } from "../../../types/Post";
import PostItem from "./PostListItem";

type PostListProps = {
  posts: Post[];
};

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <>
      {posts.map((post) => {
        return (
          <>
            <PostItem key={post.id} post={post} />
            <hr></hr>
          </>
        );
      })}
    </>
  );
};

export default PostList;
