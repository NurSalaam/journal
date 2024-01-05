import React, { FC, useContext } from "react";
import { useLocation } from "react-router-dom";
import "./navBar.css";
import { paths } from "../..";
import { ViewingModeContext, actionTypes } from "../../contexts/viewingMode";

const NavBar: FC = () => {
  const location = useLocation();
  const currentRoute = location.pathname;
  const isHome = currentRoute === paths.root.home.path;
  const isPost = currentRoute.startsWith(paths.root.post.path.split("/:")[0]);

  const { state, dispatch } = useContext(ViewingModeContext);

  const handleTogglePreview = () => {
    dispatch({ type: actionTypes.TOGGLE_PREVIEW });
  };
  const handleToggleDraft = () => {
    dispatch({ type: actionTypes.TOGGLE_DRAFT });
  };

  return (
    <div id="nav-bar">
      {isPost && (
        <button
          id="preview"
          className="btn-secondary"
          onClick={handleTogglePreview}
        >
          {state.isPreview ? "Preview" : "Not Preview"}
        </button>
      )}
      <p id="nav-title">Nur's Notebook</p>
      <div id="post-actions">
        <div className="multi-btn-container">
          {isHome && <button className="btn-primary">Add Post</button>}
          {isPost && (
            <>
              <button onClick={handleToggleDraft}>
                {state.isDraft ? "Draft" : "Not Draft"}
              </button>
              <button>Post</button>
            </>
          )}
        </div>
        <button id="btn-options">...</button>
      </div>
    </div>
  );
};

export default NavBar;

//! IF YOU WANT TO WORK ON NAVBAR, CREATE A NEW BRANCH AND WORK ON IT THERE
//! the branch feat/router should JUST be for that
//! branch early, branch frequently

// home -> /posts
// /posts/:id
// /posts/:id/edit
// /posts/new -> create new post -> /posts/:id -> /posts/:id/edit
