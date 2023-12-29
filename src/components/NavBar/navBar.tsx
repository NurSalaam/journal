import React, { FC } from "react";
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
          <button>Draft</button>
          <button>Posted</button>
        </div>
        <button id="btn-options">...</button>
      </div>
    </div>
  );
};

export default NavBar;
