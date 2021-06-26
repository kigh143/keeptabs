import React, { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import {
  addProject,
  deletedProject,
  setAsSelectedProject,
} from "../redux/ProjectSlice";
import { deletedProjectTasks } from "../redux/TaskSlice";
import { useHistory } from "react-router-dom";
import Project from "../Components/Project";
import Sidebar from "../Components/Sidebar";

const Main: React.FC = () => {
  const {
    project: { projects },
  } = useAppSelector((state) => state.persistedReducer);
  const dispatch = useAppDispatch();
  const history = useHistory();
  const [greeting, setGreeting] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [goals, setGoals] = useState("");
  const [color, setColor] = useState("#eee");
  const [showModal, setShowModal] = useState(false);
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
    closeModal();
    reset();
  };

  const handleDelete = (id: string) => {
    let result = window.confirm(
      "Are you sure you want to delete this project?"
    );
    if (result) {
      dispatch(deletedProject({ id }));
      dispatch(deletedProjectTasks({ id }));
    }
  };

  const reset = () => {
    setDescription("");
    setName("");
    setColor("");
    setGoals("");
    setName("");
  };

  const select = (project: Project) => {
    dispatch(setAsSelectedProject(project));
    history.push("/project");
  };

  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);

  const getGreetingTime = () => {
    var split_afternoon = 12;
    var split_evening = 17;
    var currentHour = parseFloat(moment(new Date()).format("HH"));
    if (currentHour >= split_afternoon && currentHour <= split_evening) {
      setGreeting("afternoon");
    } else if (currentHour >= split_evening) {
      setGreeting("evening");
    } else {
      setGreeting("morning");
    }
  };

  useEffect(() => {
    getGreetingTime();
  }, []);

  return (
    <main>
      <section className="glass">
        <div className="open">
          <Sidebar color="" />
          <div className="content">
            <div className="projects">
              <div className="greetings shadow-lg">
                <div>
                  <p style={{ textTransform: "uppercase" }}>
                    <small>
                      <b>{moment().format("h:mm a | dddd MMM D YYYY")}</b>
                    </small>
                  </p>
                  <br />
                  <h2 className="text-gray-600">
                    <b>Good {greeting} katende</b>
                  </h2>
                  <p>motivational quote Lorem ipsum dolor sit amet.</p>
                </div>
                <a
                  className="topBarBtn"
                  onClick={(e) => {
                    e.preventDefault();
                    openModal();
                  }}
                >
                  Create Project
                </a>
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
      {showModal && (
        <div className="projectForm">
          <form className="form shadow-lg">
            <div className="flex justify-between bg-gray-100 p-4 text-center br-5">
              <h3>Create Project</h3>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  closeModal();
                }}
              >
                Close
              </a>
            </div>

            <div className="field">
              <label htmlFor="">Project Name</label>
              <input type="text" onChange={(e) => setName(e.target.value)} />
            </div>

            <div className="field">
              <label htmlFor="">Project theme Color</label>
              <div className="colorBox">
                <input
                  type="color"
                  onChange={(e) => setColor(e.target.value)}
                  className="colorPIcker"
                  value={color}
                />
                <div
                  style={{
                    color: "#fff",
                    backgroundColor: color,
                    fontWeight: "bold",
                  }}
                >
                  {name}
                </div>
              </div>
            </div>

            <div className="field">
              <label htmlFor="">Project Description</label>
              <textarea
                cols={3}
                rows={3}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="field">
              <label htmlFor="">Project Goals</label>
              <textarea
                cols={3}
                rows={3}
                onChange={(e) => setGoals(e.target.value)}
              ></textarea>
            </div>

            <button className="form-btn mt-8" onClick={(e) => add(e)}>
              Create Project
            </button>
          </form>
        </div>
      )}
    </main>
  );
};

export default Main;
