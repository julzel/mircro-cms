import React, { ReactNode } from "react";
import Header from "../Header";

import "./Layout.scss";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="main">{children}</main>
    </div>
  );
};

export default Layout;
