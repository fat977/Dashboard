import { Outlet } from "react-router-dom";
import SideBar from "../Components/Sidebar/SideBar";
import TopBar from "../Components/Topbar/TopBar";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Theme from "../Components/Themes/Theme";
import "../Pages/Dashboard/Dashboard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useLocalStorage from "use-local-storage";
import { Toggle } from "../Components/Toggle/Toggle";

export default function Home() {
  const [isDark, setIsDark] = useLocalStorage("isDark", "false");

  const [showColors, setShowColors] = useState(false);
  const colors = [
    "#2d3436",
    "#4834d4",
    "#be2eda",
    "#f9ca24",
    "#6ab04c",
    "#30336b",
  ];

  useEffect(() => {
    const currentColor = localStorage.getItem("color");
    setTheme(currentColor);
  }, []);

  const setTheme = (color) => {
    document
      .querySelector(".side-bar")
      .style.setProperty("background-color", color);
    document
      .querySelector(".top-bar")
      .style.setProperty("background-color", color);
  };

  const setColor = (event) => {
    const currentColor = event.target.style.getPropertyValue("--bg-color");
    setTheme(currentColor);
    localStorage.setItem("color", currentColor);
  };

  
  return (
    <div className="dashboard">
      <TopBar />
      <div className="d-flex" style={{ marginTop: "70px" }}>
        <SideBar />
        <Outlet />
        <div
          className={`color-switcher ${showColors && "color-switcher--open"}`}
        >
          <button
            onClick={() => setShowColors((showColors) => !showColors)}
            className="setting"
          >
            <FontAwesomeIcon className="ss" icon={faGear} fontSize={"30px"} />
          </button>
          <h1 className="heading">Skins</h1>

          <div className="mode">
            <Toggle
              isChecked={isDark}
              handleChange={() => setIsDark(!isDark)}
            />
          </div>

          <div className="color-list">
            {colors.map((color, id) => (
              <Theme key={id} color={color} setColor={setColor} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
