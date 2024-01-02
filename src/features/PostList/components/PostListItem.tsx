import React from "react";
import Post, { POST_STATUS } from "../../../types/Post";

type PostItemProps = {
  post: Post;
};

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  return (
    <>
      <h1>{post.title}</h1>
      <div>
        <p>{post.created_at.toString()}</p>
        {post.updated_at && <p>{post.updated_at.toString()}</p>}
        {post.status === POST_STATUS.DRAFT && <p>Draft</p>}
      </div>
    </>
  );
};

export default PostItem;
