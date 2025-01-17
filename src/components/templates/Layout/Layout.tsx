import React, { useState } from "react";
import "./Layout.module.css";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  const [language, setLanguage] = useState("en");

  return (
    <div className="layout">
      <header className="layout__header"></header>
      <main className="layout__main">{children}</main>
    </div>
  );
};
export default Layout;
