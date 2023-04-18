import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import "./index.scss";

import React from "react";

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />

      <div className="page">
        <span className="tags top-tags">
          <span> &lt;html&gt;</span>
          <br />
          <span> &lt;body&gt;</span>
        </span>
        <Outlet />
        <span className="tags bottom-tags">
          <span>&lt;body&gt;</span>
          <br />
          <span> &lt;/html&gt;</span>
        </span>
      </div>
    </div>
  );
};

export default Layout;
