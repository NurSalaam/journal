import React from "react";
import PostType, { POST_STATUS } from "../../types/Post";
import { convertToPost } from "../../utils/convert-to-post";
import { mockPosts } from "../../mocks/mock-posts";

const Post: React.FC = () => {
  const post: PostType = convertToPost(mockPosts)[0];
  return (
    <div>
      <h1>{post.title}</h1>
      <h3>{post.lead}</h3>
      <div>
        <p>{post.created_at.toString()}</p>
        {post.updated_at && <p>{post.updated_at.toString()}</p>}
        {post.status === POST_STATUS.DRAFT && <p>Draft</p>}
      </div>
      <div>
        <p>{post.body}</p>
      </div>
    </div>
  );
};

export default Post;
