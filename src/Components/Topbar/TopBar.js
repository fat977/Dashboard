import { useContext } from "react";
import { Menu } from "../../Context/MenuContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBell,
  faClock,
  faEnvelope,
  faFile,
  faMessage,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import Dropdown from "react-bootstrap/Dropdown";

import "./TopBar.scss";
import useLocalStorage from "use-local-storage";

export default function TopBar() {
  const menu = useContext(Menu);
  const setIsOpen = menu.setIsOpen;
  const [isDark, setIsDark] = useLocalStorage("isDark", "false");

  return (
    <div
      className="top-bar d-flex align-items-center justify-content-between px-3"
      data-theme={isDark ? "dark" : "light"}
    >
      <div className="d-flex align-items-center">
        <h3 className="pe-3 pe-lg-5 mb-0">Dashboard</h3>
        <FontAwesomeIcon
          icon={faBars}
          cursor={"pointer"}
          onClick={() => setIsOpen((prev) => !prev)}
        />
      </div>

      <div className="d-flex align-items-center">
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic" className="mt-2">
            <FontAwesomeIcon
              fontSize={"18px"}
              className="position-relative"
              icon={faBell}
            />

            <span className="position-absolute translate-middle badge rounded-pill bg-danger">
              3
            </span>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">
              <div className="d-flex align-items-center justify-content-between px-2">
                <div>
                  <FontAwesomeIcon icon={faUsers} className="me-2" />8 friend
                  requests
                </div>
                <span className="text-muted ms-5">3 mins</span>
              </div>
            </Dropdown.Item>
            <hr />
            <Dropdown.Item href="#/action-1">
              <div className="d-flex align-items-center justify-content-between px-2">
                <div>
                  <FontAwesomeIcon icon={faEnvelope} className="me-2" />4 new
                  messages
                </div>
                <span className="text-muted">3 hours</span>
              </div>
            </Dropdown.Item>
            <hr />
            <Dropdown.Item href="#/action-1">
              <div className="d-flex align-items-center justify-content-between px-2">
                <div>
                  <FontAwesomeIcon icon={faFile} className="me-2" />2 new
                  reports
                </div>
                <span className="text-muted">4 days</span>
              </div>
            </Dropdown.Item>
            <hr />
            <Dropdown.Item className="text-center" href="#/action-1">
              See all notifications
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic" className="mt-2">
            <FontAwesomeIcon
              fontSize={"18px"}
              className="position-relative"
              icon={faMessage}
            />

            <span className="position-absolute translate-middle badge rounded-pill bg-warning">
              3
            </span>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">
              <div className="d-flex align-items-start justify-content-start px-2 pb-0">
                <div>
                  <img
                    src={require("../../Assets/user/profile-icon-png-898.png")}
                    width="60px"
                    alt="user"
                  />
                </div>
                <div className="pb-0">
                  <h6 className="mb-0">Fatma Ahmad</h6>
                  <div className="mt-1">
                    <p className="small mb-0">Call me whenever you can...</p>
                    <p className="mb-0">
                      <span className="text-muted small">
                        <FontAwesomeIcon icon={faClock} className="me-2" />1 min
                        ago
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </Dropdown.Item>
            <hr />
            <Dropdown.Item href="#/action-1">
              <div className="d-flex align-items-start justify-content-start px-2 pb-0">
                <div>
                  <img
                    src={require("../../Assets/user/profile-icon-png-898.png")}
                    width="60px"
                    alt="user"
                  />
                </div>
                <div className="pb-0">
                  <h6 className="mb-0">Fatma Ahmad</h6>
                  <div className="mt-1">
                    <p className="small mb-0">Call me whenever you can...</p>
                    <p className="mb-0">
                      <span className="text-muted small">
                        <FontAwesomeIcon icon={faClock} className="me-2" />1 min
                        ago
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </Dropdown.Item>
            <hr />
            <Dropdown.Item href="#/action-1">
              <div className="d-flex align-items-start justify-content-start px-2 pb-0">
                <div>
                  <img
                    src={require("../../Assets/user/profile-icon-png-898.png")}
                    width="60px"
                    alt="user"
                  />
                </div>
                <div className="pb-0">
                  <h6 className="mb-0">Fatma Ahmad</h6>
                  <div className="mt-1">
                    <p className="small mb-0">Call me whenever you can...</p>
                    <p className="mb-0">
                      <span className="text-muted small">
                        <FontAwesomeIcon icon={faClock} className="me-2" />1 min
                        ago
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </Dropdown.Item>
            <hr />
            <Dropdown.Item className="text-center" href="#/action-1">
              See all messages
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic">
            <img
              src={require("../../Assets/admin/—Pngtree—user vector icon_3788518.png")}
              width="50px"
              alt="admin"
            />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Logout</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Profile</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}
