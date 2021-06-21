import React, { useState } from "react";
import Header from "../Components/Header";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import Right from "../Components/Right";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import { addTask } from "../redux/TaskSlice";

const Project: React.FC = () => {
  const {
    project: { selectedProject },
    task: { tasks },
  } = useAppSelector((state) => state.persistedReducer);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [level_of_difficulty, setLevel_of_difficulty] = useState("");
  const [expected_duration, setExpected_duration] = useState("");

  const dispatch = useAppDispatch();
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

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
    toggle();
  };

  return <>project</>;
};

export default Project;
