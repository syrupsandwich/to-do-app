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
