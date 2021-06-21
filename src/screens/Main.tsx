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
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import Project from "../Components/Project";

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
    <div className="main">
      <Header color="#46b280" />

      <section className="wrapper">
        <section className="project">
          <div className="hero">
            <div className="imgBox">
              <div>
                <img src="../logo512.png" />
              </div>
            </div>
            <div>
              <h1>Good morning, Katende</h1>
              <p>
                Manage your project and productivity, Get started by creating a
                new project
              </p>
              <button onClick={() => openModal()}>Create Project</button>
            </div>
          </div>
          {projects.length === 0 && (
            <div className="no_projects">
              <h2 className="title">No Projects</h2>
              <p className="summary">
                Get start try with a sample project, it could be learning
                something new
              </p>
              <button>Create Project</button>
            </div>
          )}

          {projects.length > 0 && (
            <div className="projects">
              <h2 className="title">Projects</h2>
              <div className="projectList">
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
          )}
        </section>
        <Sidebar color="#46b280" />
      </section>

      <div className="project-form" ref={formRef}>
        <div className="modal-header">
          <span>Create New Project</span>
          <a onClick={(e) => closeModal(e)}>Close</a>
        </div>
        <p className="summary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
          aliquid!
        </p>

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
    </div>
  );
};

export default Main;
