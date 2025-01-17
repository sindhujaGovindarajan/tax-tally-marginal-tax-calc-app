import React from "react";
import "./Layout.css";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="layout">
      <header className="layout-header"></header>
      <main className="layout-main">{children}</main>
    </div>
  );
};
export default Layout;
