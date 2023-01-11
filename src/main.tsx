import { Link, Outlet } from "react-router-dom";
import "./main.css";

const Main = () => {
  return (
    <div className="main">
      <div className="main_header" id="header">
        Sample Web Page
      </div>
      <div className="main_menu">
        <div className="sidebar">
          <div className="menu">Sample List</div>
          <div>
            <Link to="/textbox" className="menu">
              sample1
            </Link>
          </div>
          <div>
            <Link to="/date" className="menu">
              sample2
            </Link>
          </div>
          <div>
            <Link to="/password" className="menu">
              sample3
            </Link>
          </div>
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Main;
