import React from "react";

const Lock: React.FC = () => {
  return (
    <main>
      <section className="glass">
        <div>
          <div className="open">
            <div className="locked">
              <img src="./logo192.png" alt="" />
              <small>locked</small>
              <h2>keepTabs</h2>
              <p>A place to be more productive and accountable</p>
              <a href="/home"> Get Back In</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Lock;
