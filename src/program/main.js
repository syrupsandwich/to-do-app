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
import { displayEverything } from "./display-everything.js";

initiateSetup();
displayEverything();
