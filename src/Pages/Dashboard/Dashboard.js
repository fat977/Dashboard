import SideBar from "../../Components/Sidebar/SideBar";
import TopBar from "../../Components/Topbar/TopBar";

import Index from "../Index/Index";


export default function Dashboard() {

  return (
    <div className="dashboard">
      <TopBar />
      <div className="d-flex" style={{ paddingTop: "70px",marginLeft :'200px' }}>
        <SideBar />
        <Index />
      </div>
    </div>
  );
}
