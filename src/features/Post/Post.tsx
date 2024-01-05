import React, { useContext } from "react";
import PostType, { POST_STATUS } from "../../types/Post";
import { ViewingModeContext } from "../../contexts/viewingMode";

type PostProps = {
  post: PostType;
};

const Post: React.FC<PostProps> = ({ post }) => {
  const { state, dispatch } = useContext(ViewingModeContext);
  return (
    <div>
      <p>{state.isPreview ? "Preview" : "Not Preview"}</p>
      <p>{state.isDraft ? "Draft" : "Not Draft"}</p>
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
