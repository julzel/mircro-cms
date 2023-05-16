import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./MainMenu.scss";

const isWindowWide = () => window.innerWidth >= 576;

const links = [
  { path: "/", label: "Home" },
  { path: "/blog", label: "Blog" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

const MainMenu: React.FC = () => {
  const location = useLocation();

  const windowIsWide = useMemo(isWindowWide, [window.innerWidth]);
  const [toggleMenu, setToggleMenu] = useState(windowIsWide);

  const onWindowResize = useCallback(() => {
    setToggleMenu(isWindowWide());
  }, []);

  useEffect(() => {
    window.addEventListener("resize", onWindowResize);

    return () => {
      window.removeEventListener("resize", onWindowResize);
    };
  }, [onWindowResize]);

  return (
    <div className="main-menu">
      {toggleMenu && (
        <nav className="nav-menu">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-menu_link ${
                location.pathname === link.path ? "active" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
      <button className="toggle-btn" onClick={() => setToggleMenu(!toggleMenu)}>
        Menu
      </button>
    </div>
  );
};

export default MainMenu;
