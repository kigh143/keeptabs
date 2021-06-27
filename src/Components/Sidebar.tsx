import React from "react";
import Calendar from "react-calendar";
import moment from "moment";
import { Link } from "react-router-dom";
import "react-calendar/dist/Calendar.css";

interface Props {
  color: string;
}

const Sidebar: React.FC<Props> = ({ color }) => {
  return (
    <div className="menu">
      <div className="companyLogo shadow-sm">
        <img src="./logo192.png" alt="" />
        <h2>KeepTabs</h2>
      </div>
      <div className="links">
        <p>
          <Link to="/keeptabs/home">
            <i className="fa fa-square" aria-hidden="true"></i>Projects
          </Link>
        </p>
        <p>
          <Link to="/keeptabs/statistics">
            <i className="fa fa-pie-chart" aria-hidden="true"></i>Statistics
          </Link>
        </p>
        <p>
          <Link to="/keeptabs/settings">
            <i className="fa fa-cogs" aria-hidden="true"></i>Settings
          </Link>
        </p>
        <p>
          <Link to="/keeptabs">
            <i className="fa fa-lock" aria-hidden="true"></i>Lock App
          </Link>
        </p>
      </div>
      <div className="version">
        <small>KeepTabs V 1.0.0</small>
        <a href="#">maintained by ghkatende</a>
      </div>
    </div>
  );
};

export default Sidebar;
