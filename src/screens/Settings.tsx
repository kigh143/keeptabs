import React, { useState, useRef, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import Sidebar from "../Components/Sidebar";

const Settings: React.FC = () => {
  const {
    project: { projects },
  } = useAppSelector((state) => state.persistedReducer);

  return (
    <main>
      <section className="glass">
        <div className="open">
          <Sidebar color="" />
          <div className="content">
            <div className="projects">
              <div className="greetings shadow-lg">
                <div>
                  <p>
                    <b>Settings</b>
                  </p>
                </div>
              </div>
              <div className="list"></div>
            </div>
          </div>
        </div>
      </section>
      <div className="circle1"></div>
      <div className="circle2"></div>
    </main>
  );
};

export default Settings;
