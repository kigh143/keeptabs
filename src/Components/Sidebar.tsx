import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

interface Props {
  color: string;
}

const Sidebar: React.FC<Props> = ({ color }) => {
  return (
    <section className="motivation" style={{ backgroundColor: color }}>
      <div className="calendar">
        <Calendar className="cal" />
      </div>

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
