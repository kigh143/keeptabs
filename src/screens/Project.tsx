import React, { useState, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import { addTask } from "../redux/TaskSlice";
import { gsap, Power3 } from "gsap";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";

const Project: React.FC = () => {
  const {
    project: { selectedProject },
    task: { tasks },
  } = useAppSelector((state) => state.persistedReducer);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [level_of_difficulty, setLevel_of_difficulty] = useState("");
  const [expected_duration, setExpected_duration] = useState("");
  const [isvisible, setIsVisible] = useState(false);
  const formRef = useRef(null);

  const dispatch = useAppDispatch();

  const addNewTask = () => {
    let newTask = {
      id: uuidv4(),
      project_id: selectedProject.id,
      title,
      level_of_difficulty: parseInt(level_of_difficulty, 10),
      expected_duration: parseInt(expected_duration, 10),
      description,
      started_date: moment().format(),
      end_date: "",
      completed: false,
    };
    dispatch(addTask(newTask));
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
          {tasks.length === 0 && (
            <div className="no_projects">
              <h2 className="title">No Projects</h2>
              <p className="summary">
                Get start try with a sample project, it could be learning
                something new
              </p>
              <button>Add Task</button>
            </div>
          )}

          <div className="projects">
            <h2 className="title">Projects</h2>
            <div className="projectList">
              {tasks.map((pro, index) => (
                <div className="pro" key={index}>
                  <div className="color">
                    <h3 className="title">{pro.title}</h3>
                  </div>
                  <div className="inner">
                    <p className="description">{pro.description}</p>
                    <div className="actions">
                      <a href="#">View Project</a>
                      <a href="#">Edit Project</a>
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                      >
                        Delete Project
                      </a>
                    </div>
                    <div className="pro-footer">
                      <p className="date"></p>
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

export default Project;
