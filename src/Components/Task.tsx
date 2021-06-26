import React from "react";
import { startTask, markAsComplete } from "../redux/TaskSlice";
import { useAppDispatch } from "../redux/hook";

interface Props {
  task: Task;
}

const Task: React.FC<Props> = ({ task }) => {
  const dispatch = useAppDispatch();
  return (
    <>
      <div
        className="project__task shadow-md"
        style={{
          textDecoration: task.completed ? "line-through" : undefined,
          backgroundColor: task.completed ? "#f3f3f3" : "#fff",
        }}
      >
        <div className="project__taskInfo">
          <p className="font-semibold">{task.title}</p>
          <small>{task.description}</small>
        </div>
        <div className="project__taskActions">
          {task.started_date === "" ? (
            <button onClick={() => dispatch(startTask({ id: task.id }))}>
              Start
            </button>
          ) : (
            <input
              type="checkbox"
              checked={task.completed}
              onClick={() => dispatch(markAsComplete({ id: task.id }))}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Task;
