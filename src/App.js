import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import BasicForm from "./Pages/Forms/Form";
import Register from "./Pages/Auth/Register";
import Login from "./Pages/Auth/Login";
import { Error404 } from "./Pages/Errors/404";
import { Error403 } from "./Pages/Errors/403";
import Index from "./Pages/Index/Index";
import Home from "./Pages/Home";
import Tables from "./Pages/Tables/Tables";

function App() {
  return (
    <div>
      <Routes>
       {/*  <Route path="/" element={<Dashboard />}>
          <Route path="index" element={<Index />} />
        </Route> */}
        <Route path="/" element={<Home />}>
        <Route path="/" element={<Index />} />
          <Route path="forms" element={<BasicForm />} />
          <Route path="tables" element={<Tables />} />
          <Route path="404" element={<Error404 />} />
          <Route path="403" element={<Error403 />} />
        </Route>

        <Route path="/*" element={<Error404 />} />

        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
