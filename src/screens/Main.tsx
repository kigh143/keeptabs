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

const Main: React.FC = () => {
  const {
    project: { projects },
  } = useAppSelector((state) => state.persistedReducer);
  const dispatch = useAppDispatch();
  const history = useHistory();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [goals, setGoals] = useState("");
  const [isvisible, setIsVisible] = useState(false);
  const formRef = useRef(null);

  const add = () => {
    const newProject = {
      name,
      goals,
      description,
      created_at: moment().format(),
      id: uuidv4(),
      color: "red",
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
    setIsVisible(false);
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
        width: "70%",
        opacity: 1,
        duration: 20,
        ease: Power3.easeOut,
      })
      .pause();
    setIsVisible(true);
  };

  return (
    <div className="main">
      <Header />

      <section className="wrapper">
        <section className="project">
          <div className="hero">
            <h2>Good morning, Katende</h2>
            <p>
              Manage your project and productivity, Get started by creating a
              new project
            </p>
            <button onClick={() => openModal()}>Create Project</button>
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

          <div className="projects">
            <h2 className="title">Projects</h2>
            <div className="projectList">
              {projects.map((pro, index) => (
                <div className="pro" key={index}>
                  <div className="color">
                    <h3 className="title">{pro.name}</h3>
                  </div>
                  <div className="inner">
                    <p className="description">{pro.description}</p>
                    <div className="actions">
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                          select(pro);
                        }}
                      >
                        View Project
                      </a>
                      <a href="#">Edit Project</a>
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                          handleDelete(pro.id);
                        }}
                      >
                        Delete Project
                      </a>
                    </div>
                    <div className="pro-footer">
                      <p className="date">{pro.created_at}</p>
                      <p className="date">Done</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Sidebar />
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
            <input type="text" />
          </div>

          <div className="field">
            <label htmlFor="">Project Color</label>
            <input type="text" />
            <small className="exp">project name </small>
          </div>

          <div className="field">
            <label htmlFor="">Project description</label>
            <textarea cols={3} rows={5}></textarea>
            <small className="exp">project name </small>
          </div>

          <div className="field">
            <label htmlFor="">Project description</label>
            <textarea cols={3} rows={5}></textarea>
            <small className="exp">project name </small>
          </div>

          <button className="form-btn">Create Project</button>
        </form>
      </div>
    </div>
  );
};

export default Main;
