import React from "react";
import moment from "moment";

interface Props {
  project: Project;
  handleDelete: any;
  select: any;
}

const Project: React.FC<Props> = ({ project, handleDelete, select }) => {
  return (
    <>
      <div className="project__card shadow-md">
        <div
          className="project__header"
          style={{ backgroundColor: project.color }}
        >
          <h2>{project.name}</h2>
          <p>{moment(project.created_at, "YYYYMMDD").fromNow()}</p>
        </div>
        <div className="project__details">
          <p>{project.description}</p>
        </div>
        <div className="project__action">
          <div>
            <a
              onClick={(e) => {
                e.preventDefault();
                select(project);
              }}
            >
              <i className="fa fa-eye" aria-hidden="true"></i> view project
            </a>
          </div>
          <div>
            <a href="#">
              <i className="fa fa-check-square-o" aria-hidden="true"></i>
              Mark as complete
            </a>
          </div>
          <div>
            <a
              onClick={(e) => {
                e.preventDefault();
                handleDelete(project.id);
              }}
            >
              <i className="fa fa-trash" aria-hidden="true"></i> Delete Project
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
