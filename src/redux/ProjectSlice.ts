import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProjectState {
  projects: Project[];
  selectedProject: any;
}

const initialState: ProjectState = {
  projects: [],
  selectedProject: {},
};

const ProjectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    addProject(state, actions: PayloadAction<Project>) {
      state.projects.push(actions.payload);
    },
    setAsSelectedProject(state, actions: PayloadAction<Project>) {
      state.selectedProject = actions.payload;
    },
    editProject(state, actions) {
      state.projects = state.projects.map((project: Project) => {
        if (project.id === actions.payload.id) {
          return { ...project, ...actions.payload };
        }
        return project;
      });
    },
    deletedProject(state, actions) {
      state.projects = state.projects.filter((project: Project) => {
        if (project.id !== actions.payload.id) {
          return { ...project, ...actions.payload };
        }
      });
    },
  },
});

export const { addProject, setAsSelectedProject, editProject, deletedProject } =
  ProjectSlice.actions;
export default ProjectSlice.reducer;
