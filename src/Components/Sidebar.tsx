import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

interface Props {
  color: string;
}

const Sidebar: React.FC<Props> = ({ color }) => {
  return (
    <div className="menu">
      <div className="companyLogo">
        <img src="./logo192.png" alt="" />
        <h2>KeepTaps</h2>
      </div>
      <div className="links">
        <p>
          <a href="/home">
            <i className="fa fa-square" aria-hidden="true"></i> Projects
          </a>
        </p>
        <p>
          <a href="/stats">
            <i className="fa fa-pie-chart" aria-hidden="true"></i>Stats
          </a>
        </p>
        <p>
          <a href="/settings">
            <i className="fa fa-cogs" aria-hidden="true"></i> Settings
          </a>
        </p>
        <p>
          <a href="/">
            <i className="fa fa-lock" aria-hidden="true"></i>Lock App
          </a>
        </p>

        {/* <div className="selectedProjectMenu">
          <p>Select project name</p>
          <ul>
            <li className="completed">
              <a href=""> Completed</a>
            </li>
            <li className="running">
              <a href=""> Running</a>
            </li>
            <li className="pending">
              <a href=""> Pending</a>
            </li>
          </ul>
        </div> */}
      </div>
      <div className="version">
        <small>KeepTabs V 1.0.0</small>
        <a href="#">maintained by devsgwa</a>
      </div>
    </div>
  );
};

export default Sidebar;
