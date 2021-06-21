import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import {
  addProject,
  deletedProject,
  setAsSelectedProject,
} from "../redux/ProjectSlice";
import { useHistory } from "react-router-dom";

const Main: React.FC = () => {
  const {
    project: { projects },
  } = useAppSelector((state) => state.persistedReducer);
  const dispatch = useAppDispatch();
  const history = useHistory();
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [goals, setGoals] = useState("");

  const add = () => {
    const newProject = {
      name,
      goals,
      description,
      created_at: moment().format(),
      id: uuidv4(),
    };
    dispatch(addProject(newProject));
    toggle();
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

  return <>main page</>;
};

export default Main;
