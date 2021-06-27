import React, { useState, useRef, useEffect } from "react";
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
  const [totals, setTotals] = useState({ totalTasks: 1, totalDays: 1 });
  const project_tasks = tasks.filter(
    (tsk) => tsk.project_id === selectedProject.id
  );

  const completed_tasks = project_tasks.filter((tsk) => tsk.completed === true);
  const daysFinished = completed_tasks
    .map((tsk) => tsk.expected_duration)
    .reduce((number, sum) => sum + number, 0);

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
    reset();
  };

  const reset = () => {
    setDescription("");
    setDescription("");
    setExpected_duration("");
    setTitle("");
    setLevel_of_difficulty("");
  };

  useEffect(() => {
    const totalDays = project_tasks
      .map((tsk) => tsk.expected_duration)
      .reduce((number, sum) => sum + number, 0);
    setTotals({ totalTasks: project_tasks.length, totalDays });
  }, [tasks]);

  return (
    <main>
      <section className="glass">
        <div className="open">
          <Sidebar color="" />
          <div className="content">
            <div className="project">
              <div
                className="project__detailsHeader shadow-lg"
                style={{
                  backgroundColor: selectedProject.color,
                  color: "#fff",
                }}
              >
                <div className="project__detail">
                  <h1>{selectedProject.name}</h1>
                  <p>{selectedProject.description}</p>
                </div>
                <div className="project__stats">
                  <div className="project_statBox">
                    <div className="project_stat">
                      <small>
                        <b>Tasks</b>
                      </small>
                      <p>{totals.totalTasks}</p>
                    </div>
                    <div className="project_stat">
                      <small>
                        <b>Expected Speed</b>
                      </small>
                      <p>
                        {(totals.totalTasks / totals.totalDays).toFixed(2)}{" "}
                        <span>t/d</span>
                      </p>
                    </div>
                    <div className="project_stat">
                      <small>
                        <b>Your Speed</b>
                      </small>
                      <p>
                        {(completed_tasks.length / daysFinished).toFixed(2)}{" "}
                        <span>t/d</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="project__taskList">
                <div className="tasks">
                  <h4>Project tasks</h4>
                  {project_tasks.map((task, index) => (
                    <Task
                      key={index}
                      task={task}
                      btnColor={selectedProject.color}
                    />
                  ))}
                </div>

                <div className="task_form">
                  <form className="form shadow-lg">
                    <h4>Add New Tasks</h4>
                    <div className="field">
                      <label htmlFor="">Task</label>
                      <input
                        type="text"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                      />
                    </div>

                    <div className="field">
                      <label htmlFor="">Level of difficulty</label>
                      <select
                        onChange={(e) => setLevel_of_difficulty(e.target.value)}
                      >
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
                        value={expected_duration}
                      />
                    </div>

                    <div className="field">
                      <label htmlFor="">Task description</label>
                      <textarea
                        cols={3}
                        rows={3}
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                      ></textarea>
                      <small className="exp">project name </small>
                    </div>

                    <button
                      className="form-btn"
                      onClick={(e) => createNewTask(e)}
                      style={{ backgroundColor: selectedProject.color }}
                    >
                      Add Task
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="closed">
          <div className="locked">
            <img src="./logo.png" alt="" />
            <small>locked</small>
            <h2>keepTabs</h2>
            <p>A place to be more productive and accountable</p>
            <a href="#"> Get Back In</a>
          </div>
        </div>
      </section>
      <div className="circle1"></div>
      <div className="circle2"></div>
    </main>
  );
};

export default Project;
