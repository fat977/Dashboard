import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import MenuContext from "./Context/MenuContext";
import WindowContext from "./Context/WindowContext";
import { BrowserRouter } from "react-router-dom";

//bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
// scss
import './Assets/style/_base.scss';
import './Pages/Dashboard/Dashboard.scss'
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WindowContext>
      <MenuContext>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MenuContext>
    </WindowContext>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
