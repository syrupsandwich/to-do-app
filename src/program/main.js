import "../style/default.css";
import {
  projects,
  printProjects,
  moveProject,
  removeProject,
  makeProject,
  printTasks,
  addTask,
  updateProject,
  updateTask,
  removeTask,
  transferTask,
  moveTask,
} from "./to-do.js";

printProjects();
makeProject({
  title: "to-to yapp",
  description: "i wish i new how to test features automatically...",
});
addTask(0, { title: "make tasks", description: "lorem..." });
addTask(0, { title: "makee another" });
addTask(0, { title: "make a project" });
makeProject({ title: "second project", desctiption: "descriptione" });
addTask(1, { title: "the only one" });
printProjects();
