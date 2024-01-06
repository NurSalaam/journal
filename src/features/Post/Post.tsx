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

// import debounce from 'lodash.debounce';

// const [isSaving, setIsSaving] = useState(false);

// const savePost = debounce(() => {
//   setIsSaving(true);
//   // Call your API here to save the post.
//   // If the post already exists, call the "edit" route.
//   // If the post is new, call the "add" route.
//   setIsSaving(false);
// }, 1000); // Wait for 1 second of inactivity before saving.

// useEffect(() => {
//   if (!isSaving) {
//     savePost();
//   }
// }, [postState]); // Save whenever postState changes.

export default Post;
