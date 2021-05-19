import React from "react";
import useToggle from "../hooks/useToggle";
// import "../style.css";

const Layout = ({ children }) => {
  const [isLight, toggle] = useToggle();
  return (
    <div className={isLight ? "body" : "body dark"}>
      <header>
        <h1 className="logo">Rumit Rout</h1>
        <nav>
          <button className="toggle" onClick={toggle}>
            switch theme
          </button>
          <a
            href="https://www.geektrust.in/coding-problem/frontend/adminui"
            target="_blank"
            rel="noreferrer"
          >
            Admin UI
          </a>
        </nav>
      </header>
      <main className="layout ">{children}</main>
    </div>
  );
};

export default Layout;
