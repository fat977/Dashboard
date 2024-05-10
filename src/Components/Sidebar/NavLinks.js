import {
  faBug,
  faFilePen,
  faGauge,
  faRightToBracket,
  faTable,
} from "@fortawesome/free-solid-svg-icons";

export const links = [
  {
    name: "Dashboard",
    path: "/",
    icon: faGauge,
  },
  {
    name: "Forms",
    path: "/forms",
    icon: faFilePen,
  },
  {
    name: "Tables",
    path: "/tables",
    icon: faTable,
  },
  {
    name: "Register",
    path: "/register",
    icon: faRightToBracket,
  },
  {
    name: "Login",
    path: "/login",
    icon: faRightToBracket,
  },

  {
    name: "404",
    path: "/404",
    icon: faBug,
  },
  {
    name: "403",
    path: "/403",
    icon: faBug,
  },
];
