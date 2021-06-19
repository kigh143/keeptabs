import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
    deletedTask(state, actions) {
      state.tasks = state.tasks.filter((Task: Task) => {
        if (Task.id !== actions.payload.id) {
          return { ...Task, ...actions.payload };
        }
      });
    },
  },
});

export const { addTask, setAsSelectedTask, editTask, deletedTask } =
  TaskSlice.actions;
export default TaskSlice.reducer;
