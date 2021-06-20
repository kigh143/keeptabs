import React, { useState } from "react";
import Header from "../Components/Header";
import {
  Jumbotron,
  Container,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Button,
} from "reactstrap";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
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

  return (
    <>
      <section className="page">
        <Header />
        <div className="container content">
          <div className="row">
            <div className="col-md-8">
              <div className="intro">
                <Jumbotron fluid>
                  <Container fluid>
                    <h1 className="display-3">{selectedProject.name}</h1>
                    <p className="lead">{selectedProject.description}</p>
                    <p className="lead">
                      <Button color="primary" onClick={toggle}>
                        Add New Task
                      </Button>
                    </p>
                  </Container>
                </Jumbotron>
              </div>
              Tasks
              <hr />
              <ListGroup>
                {tasks
                  .filter((task) => task.project_id === selectedProject.id)
                  .map((task) => (
                    <ListGroupItem active>
                      <ListGroupItemHeading>{task.title}</ListGroupItemHeading>
                      <ListGroupItemText>{task.description}</ListGroupItemText>
                    </ListGroupItem>
                  ))}
              </ListGroup>
            </div>
            <Right />
          </div>
        </div>
      </section>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add Task</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="exampleEmail">Task title</Label>
            <Input
              type="text"
              name="name"
              id="exampleEmail"
              defaultValue={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormGroup>
          <br />
          <FormGroup>
            <Label for="exampleText">Task Description</Label>
            <Input
              type="textarea"
              name="description"
              id="exampleText"
              defaultValue={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </FormGroup>
          <br />

          <FormGroup>
            <Label for="exampleSelect">Level of difficulty</Label>
            <Input
              type="select"
              name="select"
              id="exampleSelect"
              onChange={(e) => setLevel_of_difficulty(e.target.value)}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Input>
          </FormGroup>
          <br />
          <FormGroup>
            <Label for="exampleEmail">Expected Duration (In days)</Label>
            <Input
              type="number"
              name="name"
              id="exampleEmail"
              defaultValue={expected_duration}
              onChange={(e) => setExpected_duration(e.target.value)}
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
          <Button color="primary" onClick={addNewTask}>
            Add Project
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default Project;
