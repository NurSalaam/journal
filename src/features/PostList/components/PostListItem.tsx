import React from "react";
import Post, { POST_STATUS } from "../../../types/Post";
import { Link } from "react-router-dom";

type PostItemProps = {
  post: Post;
};

const PostListItem: React.FC<PostItemProps> = ({ post }) => {
  return (
    <div>
      <Link to={`/post/${post.id}`}>
        <h1>{post.title}</h1>
        <div>
          <p>{post.created_at.toString()}</p>
          {post.updated_at && <p>{post.updated_at.toString()}</p>}
          {post.status === POST_STATUS.DRAFT && <p>Draft</p>}
        </div>
      </Link>
    </div>
  );
};

export default PostListItem;
