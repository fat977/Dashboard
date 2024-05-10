import { useContext} from "react";
import { Menu } from "../../Context/MenuContext";
import { WindowSize } from "../../Context/WindowContext";
import { links } from "./NavLinks";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useLocalStorage from "use-local-storage";

import "./SideBar.scss";
export default function SideBar() {
  const [isDark, setIsDark] = useLocalStorage("isDark", "false");
  const menu = useContext(Menu);
  const WindowContext = useContext(WindowSize);
  const isOpen = menu.isOpen;
  const windowSize = WindowContext.windowSize;



  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          top: "65px",
          left: "0",
          position: "fixed",
          backgroundColor: "rgba(0,0,0,0.1)",
          display: windowSize < "768" && isOpen ? "block" : "none",
        }}
      ></div>
      <div
        className="side-bar pt-3"
        data-theme={isDark ? "dark" : "light"}
        style={{
          left: windowSize < "768" ? (isOpen ? 0 : "-100%") : 0,
          width: isOpen ? "240px" : "fit-content",
          position: windowSize < "768" ? "fixed" : "sticky",
        }}
      >
        {links.map((link, key) => (
          <NavLink
            key={key}
            to={link.path}
            className="d-flex align-items-center gap-2 side-bar-link mt-3"
          >
            <FontAwesomeIcon
              style={{ padding: isOpen ? "10px 8px 10px 15px" : "10px 13px" }}
              icon={link.icon}
            />
            <p className="m-0" style={{ display: isOpen ? "block" : "none" }}>
              {link.name}
            </p>
          </NavLink>
        ))}
      </div>
    </>
  );
}
