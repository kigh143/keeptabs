import React from "react";

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
              <a href="/keeptabs/home"> Get Back In</a>
            </div>
          </div>
        </div>
        <div className="circle1"></div>
        <div className="circle2"></div>
      </section>
    </main>
  );
};

export default Lock;
