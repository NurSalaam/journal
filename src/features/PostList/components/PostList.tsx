import React from "react";
import Post from "../../../types/Post";
import PostListItem from "./PostListItem";
import "../PostList.css";

type PostListProps = {
  posts: Post[];
};

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div className="post-list">
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <PostListItem post={post} />
            <hr></hr>
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
