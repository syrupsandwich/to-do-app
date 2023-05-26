import "../style/default.css";
import {
  categories,
  makeCategory,
  printCategories,
  getTasksForToday,
  moveCategory,
  printTasks,
} from "./to-do.js";
import { initiateSetup } from "./initiation-setup.js";

initiateSetup();

let leftPanel = document.getElementById("left-panel");
let openLeftPanelBtn = document.getElementById("open-left-panel-btn");
let closeLeftPanelBtn = document.getElementById("close-left-panel-btn");

openLeftPanelBtn.addEventListener("click", () => {
  leftPanel.classList.remove("-translate-x-full");
});

closeLeftPanelBtn.addEventListener("click", () => {
  leftPanel.classList.add("-translate-x-full");
});

const categoryDraggables = document.querySelectorAll(".draggable-category");
const categoryListContainer = document.querySelector(
  "#category-list-container"
);

categoryDraggables.forEach((draggable) => {
  draggable.addEventListener("dragstart", () => {
    draggable.classList.add("dragging");
    draggable.classList.add("opacity-50", "bg-blue-400");
  });

  draggable.addEventListener("dragend", () => {
    draggable.classList.remove("dragging");
    draggable.classList.remove("opacity-50", "bg-blue-400");
  });
});

categoryListContainer.addEventListener("dragover", (e) => {
  e.preventDefault();
  let nextElement = getNextElement(categoryListContainer, e.clientY);
  const draggable = document.querySelector(".dragging");

  if (nextElement === undefined) {
    categoryListContainer.appendChild(draggable);
  } else {
    categoryListContainer.insertBefore(draggable, nextElement);
  }
});

const getNextElement = (container, y) => {
  const draggableElements = [
    ...container.querySelectorAll(".draggable-category:not(.dragging)"),
  ];

  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = box.top - y + box.height / 2;
      if (offset > 0 && offset < closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: Number.POSITIVE_INFINITY }
  ).element;
};

let completionBtn = document.getElementById("completion-btn");

completionBtn.addEventListener("click", () => {
  completionBtn.children[0].classList.toggle("hidden");
  completionBtn.children[1].classList.toggle("hidden");
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

let categoryDetails = document.getElementById("project-list-container-header");
let projectList = document.getElementById("project-list");
let dropdownArrow = document.getElementById("dropdown-arrow");

categoryDetails.addEventListener("click", () => {
  let projectBtnContainers = projectList.children;
  for (const container of projectBtnContainers) {
    container.classList.toggle("max-h-0");
    container.classList.toggle("max-h-32");
    container.classList.toggle("opacity-0");
  }
  dropdownArrow.classList.toggle("rotate-90");
});
