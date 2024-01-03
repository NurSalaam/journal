import React, { FC } from "react";
import { useLocation } from "react-router-dom";
import "./navBar.css";

const NavBar: FC = () => {
  return (
    <div id="nav-bar">
      <button id="preview" className="btn-secondary">
        Preview
      </button>
      <p id="nav-title">Nur's Notebook</p>
      <div id="post-actions">
        <div className="multi-btn-container">
          <button className="btn-primary">Add Post</button>
          <button>Draft</button>
          <button>Posted</button>
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
