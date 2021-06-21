import React, { Component } from "react";

interface Props {
  project: Project;
  handleDelete: any;
  select: any;
}

const Project: React.FC<Props> = ({ project, handleDelete, select }) => {
  return (
    <div className="pro">
      <div className="color" style={{ backgroundColor: project.color }}>
        <h3 className="title">{project.name}</h3>
      </div>
      <div className="inner">
        <p className="description">{project.description}</p>
        <div className="actions">
          <a
            onClick={(e) => {
              e.preventDefault();
              select(project);
            }}
          >
            View Project
          </a>
          <a href="#">Edit Project</a>
          <a
            onClick={(e) => {
              e.preventDefault();
              handleDelete(project.id);
            }}
          >
            Delete Project
          </a>
        </div>
        <div className="pro-footer">
          <p className="date">{project.created_at}</p>
          <p className="date">Done</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
