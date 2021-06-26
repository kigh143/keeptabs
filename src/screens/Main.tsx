import React, { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import {
  addProject,
  deletedProject,
  setAsSelectedProject,
} from "../redux/ProjectSlice";
import { useHistory } from "react-router-dom";
import { gsap, Power3 } from "gsap";
import Project from "../Components/Project";
import Sidebar from "../Components/Sidebar";

const Main: React.FC = () => {
  const {
    project: { projects },
  } = useAppSelector((state) => state.persistedReducer);
  const dispatch = useAppDispatch();
  const history = useHistory();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [goals, setGoals] = useState("");
  const [color, setColor] = useState("");
  const formRef = useRef(null);

  const add = (e: any) => {
    e.preventDefault();
    const newProject = {
      name,
      goals,
      description,
      created_at: moment().format(),
      id: uuidv4(),
      color,
    };
    dispatch(addProject(newProject));
  };

  const handleDelete = (id: string) => {
    let result = window.confirm(
      "Are you sure you want to delete this project?"
    );
    if (result) {
      dispatch(deletedProject({ id }));
    }
  };

  const select = (project: Project) => {
    dispatch(setAsSelectedProject(project));
    history.push("/project");
  };

  const closeModal = (e: any) => {
    e.preventDefault();
    gsap
      .from(formRef.current, {
        width: "0%",
        opacity: 0,
        duration: 20,
        ease: Power3.easeOut,
      })
      .pause();
  };

  const openModal = () => {
    gsap
      .from(formRef.current, {
        width: "40%",
        opacity: 1,
        duration: 20,
        ease: Power3.easeOut,
      })
      .pause();
  };

  return (
    <main>
      <section className="glass">
        <div className="open">
          <Sidebar color="" />
          <div className="content">
            <div className="projects">
              <div className="greetings shadow-lg">
                <div>
                  <p>26 June 2021</p>
                  <h1>Good morning katende</h1>
                  <p>motivational quote Lorem ipsum dolor sit amet.</p>
                </div>
                <div>
                  <button>Create project button</button>
                </div>
              </div>

              <div className="list">
                <h4 className="list-title">Projects list</h4>

                <div className="projectRow">
                  {projects.map((project, index) => (
                    <Project
                      project={project}
                      handleDelete={handleDelete}
                      select={select}
                      key={index}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="circle1"></div>
      <div className="circle2"></div>
      <div>
        <form className="form">
          <div className="field">
            <label htmlFor="">Project name</label>
            <input type="text" onChange={(e) => setName(e.target.value)} />
          </div>

          <div className="field">
            <label htmlFor="">Project Color</label>
            <input type="color" onChange={(e) => setColor(e.target.value)} />
            <small className="exp">project name </small>
          </div>

          <div className="field">
            <label htmlFor="">Project description</label>
            <textarea
              cols={3}
              rows={5}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <small className="exp">project name </small>
          </div>

          <div className="field">
            <label htmlFor="">Project description</label>
            <textarea
              cols={3}
              rows={5}
              onChange={(e) => setGoals(e.target.value)}
            ></textarea>
            <small className="exp">project name </small>
          </div>

          <button className="form-btn" onClick={(e) => add(e)}>
            Create Project
          </button>
        </form>
      </div>
    </main>
  );
};

export default Main;
