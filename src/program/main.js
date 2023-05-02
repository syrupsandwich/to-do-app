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
