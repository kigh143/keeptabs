import React from "react";

const Sidebar: React.FC = () => {
  return (
    <section className="motivation">
      <div className="quote">
        <h2 className="title">Quote of the day</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium,
          dolor?
        </p>
      </div>

      <div className="learn">
        <p>Learn new things below</p>
      </div>
    </section>
  );
};

export default Sidebar;
