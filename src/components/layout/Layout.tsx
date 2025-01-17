import React from "react";
import "./Layout.css";

type Props = {
  headerContent?: React.ReactNode;
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ headerContent, children }) => {
  return (
    <div className="layout">
      {headerContent ? (
        <header className="layout-header">{headerContent}</header>
      ) : null}
      <main className="layout-main">{children}</main>
    </div>
  );
};
export default Layout;
