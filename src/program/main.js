import "../style/default.css";
import {
  categories,
  makeCategory,
  printCategories,
  getTasksForToday,
  moveCategory,
  printTasks,
  findTask,
} from "./to-do.js";
import { format, parseISO } from "date-fns";
import { initiateSetup } from "./initiation-setup.js";
import "./task-events.js";
import { appendTaskElements } from "./task-element-generator.js";
import {
  setTemplateTitle,
  setTemplateNoteTexts,
} from "./set-task-template-text";

initiateSetup();
setTemplateTitle();
setTemplateNoteTexts();

let leftPanel = document.getElementById("left-panel");
let openLeftPanelBtn = document.getElementById("open-left-panel-btn");
let closeLeftPanelBtn = document.getElementById("close-left-panel-btn");

openLeftPanelBtn.addEventListener("click", () => {
  leftPanel.classList.remove("-translate-x-full");
});

closeLeftPanelBtn.addEventListener("click", () => {
  leftPanel.classList.add("-translate-x-full");
});

let projectOptionsBtn = document.getElementById("project-options-btn");
let projectOptionsContainer = document.getElementById(
  "project-options-container"
);

projectOptionsBtn.addEventListener("click", () => {
  let buttons = projectOptionsContainer.children;
  for (const button of buttons) {
    button.classList.toggle("max-h-0");
    button.classList.toggle("max-h-32");
    button.classList.toggle("py-3");
    button.classList.toggle("border-b-4");
    button.classList.toggle("opacity-0");
  }
});

let projectDetails = document.getElementById("project-details");
let projectTitleContainer = document.getElementById("project-title-container");
projectTitleContainer.addEventListener("click", () => {
  projectDetails.children[1].classList.toggle("max-h-0");
  projectDetails.children[1].classList.toggle("max-h-32");
  projectDetails.children[1].classList.toggle("pb-4");
  projectDetails.children[1].classList.toggle("opacity-0");
});

let dropdownArrow = document.getElementById("dropdown-arrow");

let categoryElements = Array.from(
  document.getElementById("categories-container").children
);

categoryElements.forEach((element) => {
  element.addEventListener("click", () => {
    let projects = element.children[1].children;
    for (const container of projects) {
      container.classList.toggle("max-h-0");
      container.classList.toggle("max-h-32");
      container.classList.toggle("opacity-0");
    }
    dropdownArrow.classList.toggle("rotate-90");
  });
});

let projectTaskContainer = document.getElementById("project-task-container");

let currentProject = categories[0].projects[0];
appendTaskElements(projectTaskContainer, currentProject);

export { currentProject };
