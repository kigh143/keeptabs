import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import moment from "moment";

interface TaskState {
  tasks: Task[];
  selectedTask: any;
}

const initialState: TaskState = {
  tasks: [],
  selectedTask: {},
};

const TaskSlice = createSlice({
  name: "Task",
  initialState,
  reducers: {
    addTask(state, actions: PayloadAction<Task>) {
      state.tasks.push(actions.payload);
    },
    setAsSelectedTask(state, actions: PayloadAction<Task>) {
      state.selectedTask = actions.payload;
    },
    editTask(state, actions) {
      state.tasks = state.tasks.map((Task: Task) => {
        if (Task.id === actions.payload.id) {
          return { ...Task, ...actions.payload };
        }
        return Task;
      });
    },
    markAsComplete(state, actions) {
      state.tasks = state.tasks.map((Task: Task) => {
        if (Task.id === actions.payload.id) {
          return { ...Task, completed: true, end_date: moment().format() };
        }
        return Task;
      });
    },
    startTask(state, actions) {
      state.tasks = state.tasks.map((task: Task) => {
        if (task.id === actions.payload.id) {
          return { ...task, started_date: moment().format() };
        }
        return task;
      });
    },
    deletedTask(state, actions) {
      state.tasks = state.tasks.filter((Task: Task) => {
        if (Task.id !== actions.payload.id) {
          return { ...Task, ...actions.payload };
        }
      });
    },

    deletedProjectTasks(state, actions) {
      state.tasks = state.tasks.filter((Task: Task) => {
        if (Task.project_id !== actions.payload.id) {
          return { ...Task, ...actions.payload };
        }
      });
    },
  },
});

export const {
  addTask,
  setAsSelectedTask,
  editTask,
  deletedTask,
  markAsComplete,
  startTask,
  deletedProjectTasks,
} = TaskSlice.actions;
export default TaskSlice.reducer;
