import React from "react";
import { startTask, markAsComplete } from "../redux/TaskSlice";
import { useAppDispatch } from "../redux/hook";

interface Props {
  task: Task;
  toggleTask: any;
}

const Task: React.FC<Props> = ({ task, toggleTask }) => {
  const dispatch = useAppDispatch();

  return (
    <div
      className="task"
      style={{
        textDecoration: task.completed ? "line-through" : undefined,
        backgroundColor: task.completed ? "#f3f3f3" : "#fff",
      }}
    >
      <div className="task__inner">
        <p className="task__title">
          <b>{task.title}</b>
        </p>
        <p className="task__description">{task.description}</p>
        <p className="task__date">
          Top be complete in {task.expected_duration} days
        </p>
      </div>
      <div>
        {task.started_date === "" ? (
          <button onClick={() => dispatch(startTask({ id: task.id }))}>
            Start on Task
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
  );
};

export default Task;
