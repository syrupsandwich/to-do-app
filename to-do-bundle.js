/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style/default.css":
/*!*******************************!*\
  !*** ./src/style/default.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/program/to-do.js":
/*!******************************!*\
  !*** ./src/program/to-do.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTask": () => (/* binding */ addTask),
/* harmony export */   "makeProject": () => (/* binding */ makeProject),
/* harmony export */   "moveProject": () => (/* binding */ moveProject),
/* harmony export */   "moveTask": () => (/* binding */ moveTask),
/* harmony export */   "printProjects": () => (/* binding */ printProjects),
/* harmony export */   "printTasks": () => (/* binding */ printTasks),
/* harmony export */   "projects": () => (/* binding */ projects),
/* harmony export */   "removeProject": () => (/* binding */ removeProject),
/* harmony export */   "removeTask": () => (/* binding */ removeTask),
/* harmony export */   "transferTask": () => (/* binding */ transferTask),
/* harmony export */   "updateProject": () => (/* binding */ updateProject),
/* harmony export */   "updateTask": () => (/* binding */ updateTask)
/* harmony export */ });
const projects = [];

const printProjects = (message = "A list of all Projects:") => {
  if (projects.length === 0) {
    return console.log(Error("There are no projects."));
  }
  console.log(`${message}`);
  let index = 0;
  projects.forEach((project) => {
    console.log(index, JSON.parse(JSON.stringify(project)));
    index++;
  });
};

const moveProject = (positionA, positionB) => {
  if (!projects[positionA]) {
    return console.log(Error("The project does not exist."));
  }
  if (!projects[positionB]) {
    return console.log(Error("The destination out of range."));
  }
  let objectA = projects.splice(positionA, 1)[0];
  projects.splice(positionB, 0, objectA);
  printProjects("The projects have been reordered");
};

const removeProject = (index) => {
  if (!projects[index]) {
    return console.log(Error("The specified index is out of range."));
  }
  let title = projects[index].title;
  projects.splice(index, 1);
  printProjects(`Project "${title}" has been removed.`);
};

const makeProject = ({ title = "", description = "" }) => {
  projects.push({ title, description, tasks: [] });
  printProjects("A new project has been made.");
};

const taskFactory = ({
  title = "",
  description = "",
  dueDate = "",
  priority = "",
}) => {
  let taskStatus = false;
  const checkCompletionStatus = () => {
    if (taskStatus) {
      console.log(`Task "${title}" has been completed. :D`);
    }
    if (!taskStatus) {
      console.log(`Task "${title}" has not been completed. :/`);
    }
    return taskStatus;
  };
  const changeCompletionStatus = () => {
    taskStatus = taskStatus ? false : true;
  };
  return {
    title,
    description,
    dueDate,
    priority,
    checkCompletionStatus,
    changeCompletionStatus,
  };
};

const printTasks = (projectIndex, message) => {
  if (!projects[projectIndex]) {
    return console.log(Error("The specified project index is out of range."));
  }
  if (!message) {
    console.log(`Tasks in ${projects[projectIndex].title}.`);
  } else {
    console.log(message);
  }
  let index = 0;
  projects[projectIndex].tasks.forEach((task) => {
    console.log(index, task);
    index++;
  });
};

const addTask = (projectIndex, task = {}) => {
  if (!projects[projectIndex]) {
    return console.log(Error("The specified index is out of range."));
  }
  projects[projectIndex].tasks.push(taskFactory(task));
  printTasks(
    projectIndex,
    `A task has been added to project "${projects[projectIndex].title}".`
  );
};

const updateProject = (index, { title, description }) => {
  if (!projects[index]) {
    return console.log(Error("The specified project index is out of range."));
  }
  if (title) {
    projects[index].title = title;
  }
  if (description) {
    projects[index].description = description;
  }
  printProjects(`The project at ${index} has been updated.`);
};

const updateTask = (
  projectIndex,
  taskIndex,
  { title, description, dueDate, priority }
) => {
  if (!projects[projectIndex]) {
    return console.log(Error("The specified project index is out of range."));
  }
  if (!projects[projectIndex].tasks[taskIndex]) {
    return console.log(Error("The specified task index is out of range."));
  }
  let task = projects[projectIndex].tasks[taskIndex];
  if (title) {
    task.title = title;
  }
  if (description) {
    task.description = description;
  }
  if (dueDate) {
    task.dueDate = dueDate;
  }
  if (priority) {
    task.priority = priority;
  }
  printTasks(projectIndex, `The task at ${taskIndex} has been updated.`);
};

const removeTask = (projectIndex, taskIndex) => {
  if (!projects[projectIndex]) {
    return console.log(Error("The specified project index is out of range."));
  }
  if (!projects[projectIndex].tasks[taskIndex]) {
    return console.log(Error("The specified task index is out of range."));
  }
  let title = projects[projectIndex].tasks[taskIndex].title;
  projects[projectIndex].tasks.splice(taskIndex, 1);
  printTasks(projectIndex, `The task "${title}" has been removed.`);
};

const transferTask = (projectIndexA, projectIndexB, taskIndex) => {
  if (!projects[projectIndexA]) {
    return console.log(Error("The specified project index is out of range."));
  }
  if (!projects[projectIndexB]) {
    return console.log(Error("The specified project index is out of range."));
  }
  if (!projects[projectIndexA].tasks[taskIndex]) {
    return console.log(Error("The specified task index is out of range."));
  }
  let task = projects[projectIndexA].tasks.splice(taskIndex, 1)[0];
  projects[projectIndexB].tasks.push(taskFactory(task));
  printTasks(projectIndexB, `Task ${task.title} has been transfered.`);
};

const moveTask = (projectIndex, positionA, positionB) => {
  if (!projects[projectIndex]) {
    return console.log(Error("The specified project index is out of range."));
  }
  if (!projects[projectIndex].tasks[positionA]) {
    return console.log(Error("The specified task index is out of range."));
  }
  if (!projects[projectIndex].tasks[positionB]) {
    return console.log(Error("The specified task index is out of range."));
  }
  let task = projects[projectIndex].tasks.splice(positionA, 1)[0];
  projects[projectIndex].tasks.splice(positionB, 0, task);
  printTasks(projectIndex, "The task list has been reordered");
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./src/program/main.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_default_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/default.css */ "./src/style/default.css");
/* harmony import */ var _to_do_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./to-do.js */ "./src/program/to-do.js");



(0,_to_do_js__WEBPACK_IMPORTED_MODULE_1__.makeProject)({
  title: "To-do app",
  description: "A place to store all of your tasks",
  tasks: [],
});

(0,_to_do_js__WEBPACK_IMPORTED_MODULE_1__.addTask)(0, { title: "Look around", description: "Get to know the app." });

(0,_to_do_js__WEBPACK_IMPORTED_MODULE_1__.makeProject)({
  title: "Exercise solutions",
  description: "Figure out an optimal setup for each major muscle group.",
  tasks: [],
});

(0,_to_do_js__WEBPACK_IMPORTED_MODULE_1__.addTask)(1, {
  title: "Buy pulleys",
  description: "For exercises that require an upward dirction of resistance.",
});

(0,_to_do_js__WEBPACK_IMPORTED_MODULE_1__.addTask)(1, {
  title: "Get weight plates",
  description: "A minimalistic set that allows increments of 5lb.",
});

(0,_to_do_js__WEBPACK_IMPORTED_MODULE_1__.addTask)(1, {
  title: "Find supplies",
  description: "Things like rope, webbing, caribiners, chains, foam... ",
});

(0,_to_do_js__WEBPACK_IMPORTED_MODULE_1__.addTask)(1, {
  title: "Make some equipment",
  description: "Ask mom to sew together my inventions",
});

(0,_to_do_js__WEBPACK_IMPORTED_MODULE_1__.makeProject)({
  title: "250 box challenge",
  description: '"...draw a box - then do it again another 249 times."',
  tasks: [],
});

(0,_to_do_js__WEBPACK_IMPORTED_MODULE_1__.addTask)(2, {
  title: "Find drawing supplies",
  description: "a large stack of priter paper and a .5 pen.",
});

(0,_to_do_js__WEBPACK_IMPORTED_MODULE_1__.addTask)(2, {
  title: "draw 5 boxes on a page",
  description: "that leaves enough room to check the convergences",
});

(0,_to_do_js__WEBPACK_IMPORTED_MODULE_1__.addTask)(2, {
  title: "50% rule",
  description:
    "Draw whatever you want for the same amount of time spent practicing.",
});

(0,_to_do_js__WEBPACK_IMPORTED_MODULE_1__.printProjects)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d2VicGFjazovLy8uL3NyYy9zdHlsZS9kZWZhdWx0LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvZ3JhbS90by1kby5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvZ3JhbS9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImV4cG9ydCBjb25zdCBwcm9qZWN0cyA9IFtdO1xuXG5leHBvcnQgY29uc3QgcHJpbnRQcm9qZWN0cyA9IChtZXNzYWdlID0gXCJBIGxpc3Qgb2YgYWxsIFByb2plY3RzOlwiKSA9PiB7XG4gIGlmIChwcm9qZWN0cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gY29uc29sZS5sb2coRXJyb3IoXCJUaGVyZSBhcmUgbm8gcHJvamVjdHMuXCIpKTtcbiAgfVxuICBjb25zb2xlLmxvZyhgJHttZXNzYWdlfWApO1xuICBsZXQgaW5kZXggPSAwO1xuICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgY29uc29sZS5sb2coaW5kZXgsIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocHJvamVjdCkpKTtcbiAgICBpbmRleCsrO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBtb3ZlUHJvamVjdCA9IChwb3NpdGlvbkEsIHBvc2l0aW9uQikgPT4ge1xuICBpZiAoIXByb2plY3RzW3Bvc2l0aW9uQV0pIHtcbiAgICByZXR1cm4gY29uc29sZS5sb2coRXJyb3IoXCJUaGUgcHJvamVjdCBkb2VzIG5vdCBleGlzdC5cIikpO1xuICB9XG4gIGlmICghcHJvamVjdHNbcG9zaXRpb25CXSkge1xuICAgIHJldHVybiBjb25zb2xlLmxvZyhFcnJvcihcIlRoZSBkZXN0aW5hdGlvbiBvdXQgb2YgcmFuZ2UuXCIpKTtcbiAgfVxuICBsZXQgb2JqZWN0QSA9IHByb2plY3RzLnNwbGljZShwb3NpdGlvbkEsIDEpWzBdO1xuICBwcm9qZWN0cy5zcGxpY2UocG9zaXRpb25CLCAwLCBvYmplY3RBKTtcbiAgcHJpbnRQcm9qZWN0cyhcIlRoZSBwcm9qZWN0cyBoYXZlIGJlZW4gcmVvcmRlcmVkXCIpO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZVByb2plY3QgPSAoaW5kZXgpID0+IHtcbiAgaWYgKCFwcm9qZWN0c1tpbmRleF0pIHtcbiAgICByZXR1cm4gY29uc29sZS5sb2coRXJyb3IoXCJUaGUgc3BlY2lmaWVkIGluZGV4IGlzIG91dCBvZiByYW5nZS5cIikpO1xuICB9XG4gIGxldCB0aXRsZSA9IHByb2plY3RzW2luZGV4XS50aXRsZTtcbiAgcHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgcHJpbnRQcm9qZWN0cyhgUHJvamVjdCBcIiR7dGl0bGV9XCIgaGFzIGJlZW4gcmVtb3ZlZC5gKTtcbn07XG5cbmV4cG9ydCBjb25zdCBtYWtlUHJvamVjdCA9ICh7IHRpdGxlID0gXCJcIiwgZGVzY3JpcHRpb24gPSBcIlwiIH0pID0+IHtcbiAgcHJvamVjdHMucHVzaCh7IHRpdGxlLCBkZXNjcmlwdGlvbiwgdGFza3M6IFtdIH0pO1xuICBwcmludFByb2plY3RzKFwiQSBuZXcgcHJvamVjdCBoYXMgYmVlbiBtYWRlLlwiKTtcbn07XG5cbmNvbnN0IHRhc2tGYWN0b3J5ID0gKHtcbiAgdGl0bGUgPSBcIlwiLFxuICBkZXNjcmlwdGlvbiA9IFwiXCIsXG4gIGR1ZURhdGUgPSBcIlwiLFxuICBwcmlvcml0eSA9IFwiXCIsXG59KSA9PiB7XG4gIGxldCB0YXNrU3RhdHVzID0gZmFsc2U7XG4gIGNvbnN0IGNoZWNrQ29tcGxldGlvblN0YXR1cyA9ICgpID0+IHtcbiAgICBpZiAodGFza1N0YXR1cykge1xuICAgICAgY29uc29sZS5sb2coYFRhc2sgXCIke3RpdGxlfVwiIGhhcyBiZWVuIGNvbXBsZXRlZC4gOkRgKTtcbiAgICB9XG4gICAgaWYgKCF0YXNrU3RhdHVzKSB7XG4gICAgICBjb25zb2xlLmxvZyhgVGFzayBcIiR7dGl0bGV9XCIgaGFzIG5vdCBiZWVuIGNvbXBsZXRlZC4gOi9gKTtcbiAgICB9XG4gICAgcmV0dXJuIHRhc2tTdGF0dXM7XG4gIH07XG4gIGNvbnN0IGNoYW5nZUNvbXBsZXRpb25TdGF0dXMgPSAoKSA9PiB7XG4gICAgdGFza1N0YXR1cyA9IHRhc2tTdGF0dXMgPyBmYWxzZSA6IHRydWU7XG4gIH07XG4gIHJldHVybiB7XG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZHVlRGF0ZSxcbiAgICBwcmlvcml0eSxcbiAgICBjaGVja0NvbXBsZXRpb25TdGF0dXMsXG4gICAgY2hhbmdlQ29tcGxldGlvblN0YXR1cyxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBwcmludFRhc2tzID0gKHByb2plY3RJbmRleCwgbWVzc2FnZSkgPT4ge1xuICBpZiAoIXByb2plY3RzW3Byb2plY3RJbmRleF0pIHtcbiAgICByZXR1cm4gY29uc29sZS5sb2coRXJyb3IoXCJUaGUgc3BlY2lmaWVkIHByb2plY3QgaW5kZXggaXMgb3V0IG9mIHJhbmdlLlwiKSk7XG4gIH1cbiAgaWYgKCFtZXNzYWdlKSB7XG4gICAgY29uc29sZS5sb2coYFRhc2tzIGluICR7cHJvamVjdHNbcHJvamVjdEluZGV4XS50aXRsZX0uYCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG4gIH1cbiAgbGV0IGluZGV4ID0gMDtcbiAgcHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgY29uc29sZS5sb2coaW5kZXgsIHRhc2spO1xuICAgIGluZGV4Kys7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZFRhc2sgPSAocHJvamVjdEluZGV4LCB0YXNrID0ge30pID0+IHtcbiAgaWYgKCFwcm9qZWN0c1twcm9qZWN0SW5kZXhdKSB7XG4gICAgcmV0dXJuIGNvbnNvbGUubG9nKEVycm9yKFwiVGhlIHNwZWNpZmllZCBpbmRleCBpcyBvdXQgb2YgcmFuZ2UuXCIpKTtcbiAgfVxuICBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRhc2tzLnB1c2godGFza0ZhY3RvcnkodGFzaykpO1xuICBwcmludFRhc2tzKFxuICAgIHByb2plY3RJbmRleCxcbiAgICBgQSB0YXNrIGhhcyBiZWVuIGFkZGVkIHRvIHByb2plY3QgXCIke3Byb2plY3RzW3Byb2plY3RJbmRleF0udGl0bGV9XCIuYFxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVByb2plY3QgPSAoaW5kZXgsIHsgdGl0bGUsIGRlc2NyaXB0aW9uIH0pID0+IHtcbiAgaWYgKCFwcm9qZWN0c1tpbmRleF0pIHtcbiAgICByZXR1cm4gY29uc29sZS5sb2coRXJyb3IoXCJUaGUgc3BlY2lmaWVkIHByb2plY3QgaW5kZXggaXMgb3V0IG9mIHJhbmdlLlwiKSk7XG4gIH1cbiAgaWYgKHRpdGxlKSB7XG4gICAgcHJvamVjdHNbaW5kZXhdLnRpdGxlID0gdGl0bGU7XG4gIH1cbiAgaWYgKGRlc2NyaXB0aW9uKSB7XG4gICAgcHJvamVjdHNbaW5kZXhdLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIH1cbiAgcHJpbnRQcm9qZWN0cyhgVGhlIHByb2plY3QgYXQgJHtpbmRleH0gaGFzIGJlZW4gdXBkYXRlZC5gKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVUYXNrID0gKFxuICBwcm9qZWN0SW5kZXgsXG4gIHRhc2tJbmRleCxcbiAgeyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5IH1cbikgPT4ge1xuICBpZiAoIXByb2plY3RzW3Byb2plY3RJbmRleF0pIHtcbiAgICByZXR1cm4gY29uc29sZS5sb2coRXJyb3IoXCJUaGUgc3BlY2lmaWVkIHByb2plY3QgaW5kZXggaXMgb3V0IG9mIHJhbmdlLlwiKSk7XG4gIH1cbiAgaWYgKCFwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRhc2tzW3Rhc2tJbmRleF0pIHtcbiAgICByZXR1cm4gY29uc29sZS5sb2coRXJyb3IoXCJUaGUgc3BlY2lmaWVkIHRhc2sgaW5kZXggaXMgb3V0IG9mIHJhbmdlLlwiKSk7XG4gIH1cbiAgbGV0IHRhc2sgPSBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRhc2tzW3Rhc2tJbmRleF07XG4gIGlmICh0aXRsZSkge1xuICAgIHRhc2sudGl0bGUgPSB0aXRsZTtcbiAgfVxuICBpZiAoZGVzY3JpcHRpb24pIHtcbiAgICB0YXNrLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIH1cbiAgaWYgKGR1ZURhdGUpIHtcbiAgICB0YXNrLmR1ZURhdGUgPSBkdWVEYXRlO1xuICB9XG4gIGlmIChwcmlvcml0eSkge1xuICAgIHRhc2sucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgfVxuICBwcmludFRhc2tzKHByb2plY3RJbmRleCwgYFRoZSB0YXNrIGF0ICR7dGFza0luZGV4fSBoYXMgYmVlbiB1cGRhdGVkLmApO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZVRhc2sgPSAocHJvamVjdEluZGV4LCB0YXNrSW5kZXgpID0+IHtcbiAgaWYgKCFwcm9qZWN0c1twcm9qZWN0SW5kZXhdKSB7XG4gICAgcmV0dXJuIGNvbnNvbGUubG9nKEVycm9yKFwiVGhlIHNwZWNpZmllZCBwcm9qZWN0IGluZGV4IGlzIG91dCBvZiByYW5nZS5cIikpO1xuICB9XG4gIGlmICghcHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrc1t0YXNrSW5kZXhdKSB7XG4gICAgcmV0dXJuIGNvbnNvbGUubG9nKEVycm9yKFwiVGhlIHNwZWNpZmllZCB0YXNrIGluZGV4IGlzIG91dCBvZiByYW5nZS5cIikpO1xuICB9XG4gIGxldCB0aXRsZSA9IHByb2plY3RzW3Byb2plY3RJbmRleF0udGFza3NbdGFza0luZGV4XS50aXRsZTtcbiAgcHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrcy5zcGxpY2UodGFza0luZGV4LCAxKTtcbiAgcHJpbnRUYXNrcyhwcm9qZWN0SW5kZXgsIGBUaGUgdGFzayBcIiR7dGl0bGV9XCIgaGFzIGJlZW4gcmVtb3ZlZC5gKTtcbn07XG5cbmV4cG9ydCBjb25zdCB0cmFuc2ZlclRhc2sgPSAocHJvamVjdEluZGV4QSwgcHJvamVjdEluZGV4QiwgdGFza0luZGV4KSA9PiB7XG4gIGlmICghcHJvamVjdHNbcHJvamVjdEluZGV4QV0pIHtcbiAgICByZXR1cm4gY29uc29sZS5sb2coRXJyb3IoXCJUaGUgc3BlY2lmaWVkIHByb2plY3QgaW5kZXggaXMgb3V0IG9mIHJhbmdlLlwiKSk7XG4gIH1cbiAgaWYgKCFwcm9qZWN0c1twcm9qZWN0SW5kZXhCXSkge1xuICAgIHJldHVybiBjb25zb2xlLmxvZyhFcnJvcihcIlRoZSBzcGVjaWZpZWQgcHJvamVjdCBpbmRleCBpcyBvdXQgb2YgcmFuZ2UuXCIpKTtcbiAgfVxuICBpZiAoIXByb2plY3RzW3Byb2plY3RJbmRleEFdLnRhc2tzW3Rhc2tJbmRleF0pIHtcbiAgICByZXR1cm4gY29uc29sZS5sb2coRXJyb3IoXCJUaGUgc3BlY2lmaWVkIHRhc2sgaW5kZXggaXMgb3V0IG9mIHJhbmdlLlwiKSk7XG4gIH1cbiAgbGV0IHRhc2sgPSBwcm9qZWN0c1twcm9qZWN0SW5kZXhBXS50YXNrcy5zcGxpY2UodGFza0luZGV4LCAxKVswXTtcbiAgcHJvamVjdHNbcHJvamVjdEluZGV4Ql0udGFza3MucHVzaCh0YXNrRmFjdG9yeSh0YXNrKSk7XG4gIHByaW50VGFza3MocHJvamVjdEluZGV4QiwgYFRhc2sgJHt0YXNrLnRpdGxlfSBoYXMgYmVlbiB0cmFuc2ZlcmVkLmApO1xufTtcblxuZXhwb3J0IGNvbnN0IG1vdmVUYXNrID0gKHByb2plY3RJbmRleCwgcG9zaXRpb25BLCBwb3NpdGlvbkIpID0+IHtcbiAgaWYgKCFwcm9qZWN0c1twcm9qZWN0SW5kZXhdKSB7XG4gICAgcmV0dXJuIGNvbnNvbGUubG9nKEVycm9yKFwiVGhlIHNwZWNpZmllZCBwcm9qZWN0IGluZGV4IGlzIG91dCBvZiByYW5nZS5cIikpO1xuICB9XG4gIGlmICghcHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrc1twb3NpdGlvbkFdKSB7XG4gICAgcmV0dXJuIGNvbnNvbGUubG9nKEVycm9yKFwiVGhlIHNwZWNpZmllZCB0YXNrIGluZGV4IGlzIG91dCBvZiByYW5nZS5cIikpO1xuICB9XG4gIGlmICghcHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrc1twb3NpdGlvbkJdKSB7XG4gICAgcmV0dXJuIGNvbnNvbGUubG9nKEVycm9yKFwiVGhlIHNwZWNpZmllZCB0YXNrIGluZGV4IGlzIG91dCBvZiByYW5nZS5cIikpO1xuICB9XG4gIGxldCB0YXNrID0gcHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrcy5zcGxpY2UocG9zaXRpb25BLCAxKVswXTtcbiAgcHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrcy5zcGxpY2UocG9zaXRpb25CLCAwLCB0YXNrKTtcbiAgcHJpbnRUYXNrcyhwcm9qZWN0SW5kZXgsIFwiVGhlIHRhc2sgbGlzdCBoYXMgYmVlbiByZW9yZGVyZWRcIik7XG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuLi9zdHlsZS9kZWZhdWx0LmNzc1wiO1xuaW1wb3J0IHtcbiAgcHJvamVjdHMsXG4gIHByaW50UHJvamVjdHMsXG4gIG1vdmVQcm9qZWN0LFxuICByZW1vdmVQcm9qZWN0LFxuICBtYWtlUHJvamVjdCxcbiAgcHJpbnRUYXNrcyxcbiAgYWRkVGFzayxcbiAgdXBkYXRlUHJvamVjdCxcbiAgdXBkYXRlVGFzayxcbiAgcmVtb3ZlVGFzayxcbiAgdHJhbnNmZXJUYXNrLFxuICBtb3ZlVGFzayxcbn0gZnJvbSBcIi4vdG8tZG8uanNcIjtcblxubWFrZVByb2plY3Qoe1xuICB0aXRsZTogXCJUby1kbyBhcHBcIixcbiAgZGVzY3JpcHRpb246IFwiQSBwbGFjZSB0byBzdG9yZSBhbGwgb2YgeW91ciB0YXNrc1wiLFxuICB0YXNrczogW10sXG59KTtcblxuYWRkVGFzaygwLCB7IHRpdGxlOiBcIkxvb2sgYXJvdW5kXCIsIGRlc2NyaXB0aW9uOiBcIkdldCB0byBrbm93IHRoZSBhcHAuXCIgfSk7XG5cbm1ha2VQcm9qZWN0KHtcbiAgdGl0bGU6IFwiRXhlcmNpc2Ugc29sdXRpb25zXCIsXG4gIGRlc2NyaXB0aW9uOiBcIkZpZ3VyZSBvdXQgYW4gb3B0aW1hbCBzZXR1cCBmb3IgZWFjaCBtYWpvciBtdXNjbGUgZ3JvdXAuXCIsXG4gIHRhc2tzOiBbXSxcbn0pO1xuXG5hZGRUYXNrKDEsIHtcbiAgdGl0bGU6IFwiQnV5IHB1bGxleXNcIixcbiAgZGVzY3JpcHRpb246IFwiRm9yIGV4ZXJjaXNlcyB0aGF0IHJlcXVpcmUgYW4gdXB3YXJkIGRpcmN0aW9uIG9mIHJlc2lzdGFuY2UuXCIsXG59KTtcblxuYWRkVGFzaygxLCB7XG4gIHRpdGxlOiBcIkdldCB3ZWlnaHQgcGxhdGVzXCIsXG4gIGRlc2NyaXB0aW9uOiBcIkEgbWluaW1hbGlzdGljIHNldCB0aGF0IGFsbG93cyBpbmNyZW1lbnRzIG9mIDVsYi5cIixcbn0pO1xuXG5hZGRUYXNrKDEsIHtcbiAgdGl0bGU6IFwiRmluZCBzdXBwbGllc1wiLFxuICBkZXNjcmlwdGlvbjogXCJUaGluZ3MgbGlrZSByb3BlLCB3ZWJiaW5nLCBjYXJpYmluZXJzLCBjaGFpbnMsIGZvYW0uLi4gXCIsXG59KTtcblxuYWRkVGFzaygxLCB7XG4gIHRpdGxlOiBcIk1ha2Ugc29tZSBlcXVpcG1lbnRcIixcbiAgZGVzY3JpcHRpb246IFwiQXNrIG1vbSB0byBzZXcgdG9nZXRoZXIgbXkgaW52ZW50aW9uc1wiLFxufSk7XG5cbm1ha2VQcm9qZWN0KHtcbiAgdGl0bGU6IFwiMjUwIGJveCBjaGFsbGVuZ2VcIixcbiAgZGVzY3JpcHRpb246ICdcIi4uLmRyYXcgYSBib3ggLSB0aGVuIGRvIGl0IGFnYWluIGFub3RoZXIgMjQ5IHRpbWVzLlwiJyxcbiAgdGFza3M6IFtdLFxufSk7XG5cbmFkZFRhc2soMiwge1xuICB0aXRsZTogXCJGaW5kIGRyYXdpbmcgc3VwcGxpZXNcIixcbiAgZGVzY3JpcHRpb246IFwiYSBsYXJnZSBzdGFjayBvZiBwcml0ZXIgcGFwZXIgYW5kIGEgLjUgcGVuLlwiLFxufSk7XG5cbmFkZFRhc2soMiwge1xuICB0aXRsZTogXCJkcmF3IDUgYm94ZXMgb24gYSBwYWdlXCIsXG4gIGRlc2NyaXB0aW9uOiBcInRoYXQgbGVhdmVzIGVub3VnaCByb29tIHRvIGNoZWNrIHRoZSBjb252ZXJnZW5jZXNcIixcbn0pO1xuXG5hZGRUYXNrKDIsIHtcbiAgdGl0bGU6IFwiNTAlIHJ1bGVcIixcbiAgZGVzY3JpcHRpb246XG4gICAgXCJEcmF3IHdoYXRldmVyIHlvdSB3YW50IGZvciB0aGUgc2FtZSBhbW91bnQgb2YgdGltZSBzcGVudCBwcmFjdGljaW5nLlwiLFxufSk7XG5cbnByaW50UHJvamVjdHMoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==