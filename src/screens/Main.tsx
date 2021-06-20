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
  Card,
  CardTitle,
  CardText,
  ButtonGroup,
} from "reactstrap";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import {
  addProject,
  deletedProject,
  setAsSelectedProject,
} from "../redux/ProjectSlice";
import { useHistory } from "react-router-dom";
import { Row, Col } from "reactstrap";
import Right from "../Components/Right";

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
              {projects.length === 0 && <div className="no_project"></div>}
              {projects.length > 0 && (
                <div className="projects">
                  <br />
                  <h3>All Projects</h3>
                  <br />
                  <Row xs="2">
                    {projects.map((proj) => (
                      <Col sm="6" style={{ marginBottom: 20 }}>
                        <Card body>
                          <CardTitle tag="h5">{proj.name}</CardTitle>
                          <CardText>{proj.description}</CardText>
                          <CardText>
                            <small className="text-muted">
                              {moment(proj.created_at, "YYYYMMDD").fromNow()}
                            </small>
                          </CardText>

                          <ButtonGroup>
                            <Button
                              color="primary"
                              onClick={() => select(proj)}
                            >
                              View
                            </Button>
                            <Button
                              color="danger"
                              onClick={() => handleDelete(proj.id)}
                            >
                              Delete
                            </Button>
                          </ButtonGroup>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </div>
              )}
            </div>
            <Right />
          </div>
        </div>
      </section>
      <Modal isOpen={modal} toggle={toggle}>
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
          <Button color="primary" onClick={add}>
            Add Project
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default Main;
