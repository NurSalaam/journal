import React from "react";
import Post from "../../../types/Post";
import PostListItem from "./PostListItem";

type PostListProps = {
  posts: Post[];
};

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <PostListItem post={post} />
            <hr></hr>
          </div>
        );
      })}
    </>
  );
};

export default PostList;
