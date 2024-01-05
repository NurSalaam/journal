import React, { useContext, useReducer } from "react";
import PostType, { POST_STATUS } from "../../types/Post";
import { ViewingModeContext } from "../../contexts/viewingMode";
import InputField from "./components/InputField";
import {
  postFormReducer,
  postFormActionTypes,
  PostFormState,
} from "./PostFormReducer";
import "./Post.css";
type PostProps = {
  post: PostType;
};

const Post: React.FC<PostProps> = ({ post }) => {
  const { state: viewModeState, dispatch: viewModeDispatch } =
    useContext(ViewingModeContext);
  const initialState: PostFormState = {
    title: post.title,
    lead: post.lead,
    body: post.body,
  };
  const [postState, dispatch] = useReducer(postFormReducer, initialState);
  return (
    <div className="post">
      <InputField
        id="title"
        value={postState.title}
        label="Title"
        onChange={(e) =>
          dispatch({ type: postFormActionTypes.TITLE, payload: e.target.value })
        }
        hideLabel={viewModeState.isPreview}
      />
      <InputField
        id="lead"
        value={postState.lead}
        label="Lead"
        onChange={(e) =>
          dispatch({ type: postFormActionTypes.LEAD, payload: e.target.value })
        }
        hideLabel={viewModeState.isPreview}
      />
      <InputField
        id="body"
        value={postState.body}
        label="Body"
        onChange={(e) =>
          dispatch({ type: postFormActionTypes.BODY, payload: e.target.value })
        }
        hideLabel={viewModeState.isPreview}
      />
    </div>
  );
};

export default Post;
