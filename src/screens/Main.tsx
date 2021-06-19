import React, { useState } from "react";
import Header from "../Components/Header";
import {
  Jumbotron,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";

const Main: React.FC = () => {
  const state = useSelector((state) => state.persistedReducer);
  console.log(state);
  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [backdrop, setBackdrop] = useState(true);
  const [keyboard, setKeyboard] = useState(true);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [goals, setGoals] = useState("");

  const addProject = () => {
    const project = {
      name,
      goals,
      description,
      created_at: moment().format(),
      id: uuidv4(),
    };

    console.log(project);
  };

  return (
    <>
      <section className="page">
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="intro">
                <Jumbotron>
                  <h1 className="display-3">Hi, Galiwango!</h1>
                  <p className="lead">
                    <b>
                      Don’t limit yourself. Many people limit themselves to what
                      they think they can do. You can go as far as your mind
                      lets you. What you believe, remember, you can achieve
                    </b>
                  </p>
                  <hr className="my-2" />
                  <p>
                    Add and track projects, work efficiency anf velocity. get
                    started here
                  </p>
                  <p className="lead">
                    <Button color="primary" onClick={toggle}>
                      Add Project
                    </Button>
                  </p>
                </Jumbotron>
              </div>
              <div className="no_project"></div>
              <div className="projects"></div>
            </div>
            <div className="col-md-4">
              <div className="calendar"></div>

              <hr />
            </div>
          </div>
        </div>
      </section>
      <Modal
        isOpen={modal}
        toggle={toggle}
        // className={className}
        backdrop={backdrop}
        keyboard={keyboard}
      >
        <ModalHeader toggle={toggle}>Add Project</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="exampleEmail">Project Name</Label>
            <Input
              type="text"
              name="name"
              id="exampleEmail"
              defaultValue={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormGroup>
          <br />
          <FormGroup>
            <Label for="exampleText">Project Description</Label>
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
            <Label for="exampleText">Project Goals</Label>
            <Input
              type="textarea"
              name="goals"
              id="exampleText"
              defaultValue={goals}
              onChange={(e) => setGoals(e.target.value)}
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
          <Button color="primary" onClick={addProject}>
            Add Project
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default Main;
