import React, { useState, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { v4 as uuidv4 } from "uuid";
import { addTask } from "../redux/TaskSlice";
import { gsap, Power3 } from "gsap";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import Task from "../Components/Task";

const Project: React.FC = () => {
  const {
    project: { selectedProject },
    task: { tasks },
  } = useAppSelector((state) => state.persistedReducer);
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [level_of_difficulty, setLevel_of_difficulty] = useState("");
  const [expected_duration, setExpected_duration] = useState("");
  const formRef = useRef(null);

  const createNewTask = (e: any) => {
    e.preventDefault();
    let newTask = {
      id: uuidv4(),
      project_id: selectedProject.id,
      title,
      level_of_difficulty: parseInt(level_of_difficulty, 10),
      expected_duration: parseInt(expected_duration, 10),
      description,
      started_date: "",
      end_date: "",
      completed: false,
    };
    dispatch(addTask(newTask));
    gsap
      .from(formRef.current, {
        width: "0%",
        opacity: 0,
        duration: 20,
        ease: Power3.easeOut,
      })
      .pause();
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
        width: "70%",
        opacity: 1,
        duration: 20,
        ease: Power3.easeOut,
      })
      .pause();
  };

  const toggleTask = (task: Task) => {};

  return (
    <div className="main">
      <Header color={selectedProject.color} />
      <section className="wrapper">
        <section className="project">
          <div className="hero">
            <section>
              <h2>{selectedProject.name}</h2>
              <p>{selectedProject.description}</p>
              <button onClick={() => openModal()}>Add Task</button>
            </section>
          </div>
          {tasks.filter((tsk) => tsk.project_id === selectedProject.id)
            .length === 0 && (
            <div className="no_projects">
              <h2 className="title">No Tasks</h2>
              <p className="summary">
                Get start try with a sample task. For example: Create all
                required assets
              </p>
              <button onClick={() => openModal()}>Add Task</button>
            </div>
          )}
          {tasks.filter((tsk) => tsk.project_id === selectedProject.id).length >
            0 && (
            <div className="projects">
              <h2 className="title">All Tasks</h2>
              <div className="projectList">
                {tasks
                  .filter((tsk) => tsk.project_id === selectedProject.id)
                  .map((task, index) => (
                    <Task task={task} key={index} toggleTask={toggleTask} />
                  ))}
              </div>
            </div>
          )}
        </section>
        <Sidebar color={selectedProject.color} />
      </section>

      <div className="project-form" ref={formRef}>
        <div className="modal-header">
          <span>Create Task</span>
          <a onClick={(e) => closeModal(e)}>Close</a>
        </div>
        <p className="summary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
          aliquid!
        </p>

        <form className="form">
          <div className="field">
            <label htmlFor="">Task</label>
            <input type="text" onChange={(e) => setTitle(e.target.value)} />
          </div>

          <div className="field">
            <label htmlFor="">Level of difficulty</label>
            <select onChange={(e) => setLevel_of_difficulty(e.target.value)}>
              <option></option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          <div className="field">
            <label htmlFor="">Estimated duration (in days)</label>
            <input
              type="number"
              onChange={(e) => setExpected_duration(e.target.value)}
            />
          </div>

          <div className="field">
            <label htmlFor="">Task description</label>
            <textarea
              cols={3}
              rows={5}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <small className="exp">project name </small>
          </div>

          <button className="form-btn" onClick={(e) => createNewTask(e)}>
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default Project;
