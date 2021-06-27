import React from "react";
import { Link } from "react-router-dom";

const Lock: React.FC = () => {
  return (
    <main>
      <section className="glass">
        <div className="closed">
          <div className="open">
            <div className="locked">
              <img src="./logo192.png" alt="" />
              <small>locked</small>
              <h2>keepTabs</h2>
              <p>A place to be more productive and accountable</p>
              <Link to="/keeptabs/home"> Get Back In</Link>
            </div>
          </div>
        </div>
      </section>
      <div className="circle1"></div>
      <div className="circle2"></div>
    </main>
  );
};

export default Lock;
