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
  projects.forEach((project, index) => {
    console.log(index, JSON.parse(JSON.stringify(project)));
    index++;
  });
};

const moveProject = (positionA, positionB) => {
  if (!projects[positionA]) {
    return console.log(Error("The specified origin index is out of range."));
  }
  if (!projects[positionB]) {
    return console.log(
      Error("The specified destination index is out of range.")
    );
  }
  let objectA = projects.splice(positionA, 1)[0];
  projects.splice(positionB, 0, objectA);
  printProjects("The projects have been reordered.");
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
  projects[projectIndex].tasks.forEach((task, index) => {
    console.log(index, task);
    index++;
  });
};

const addTask = (projectIndex, task = {}) => {
  if (!projects[projectIndex]) {
    return console.log(Error("The specified project index is out of range."));
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
    return console.log(Error("The specified origin index is out of range."));
  }
  if (!projects[projectIndexB]) {
    return console.log(
      Error("The specified destination index is out of range.")
    );
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
    return console.log(
      Error("The first specified task index is out of range.")
    );
  }
  if (!projects[projectIndex].tasks[positionB]) {
    return console.log(
      Error("The second specified task index is out of range.")
    );
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



(0,_to_do_js__WEBPACK_IMPORTED_MODULE_1__.printProjects)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG8tZG8tYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQU87O0FBRUE7QUFDUDtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLE1BQU07QUFDbEM7O0FBRU8sdUJBQXVCLDhCQUE4QjtBQUM1RCxrQkFBa0IsK0JBQStCO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsTUFBTTtBQUNqQztBQUNBO0FBQ0EsMkJBQTJCLE1BQU07QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsNkJBQTZCO0FBQ3pELElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVPLHdDQUF3QztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsNkJBQTZCO0FBQ3RFO0FBQ0E7O0FBRU8sZ0NBQWdDLG9CQUFvQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsT0FBTztBQUN6Qzs7QUFFTztBQUNQO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxXQUFXO0FBQ3JEOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxNQUFNO0FBQzlDOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsWUFBWTtBQUNoRDs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUN0TEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOOEI7QUFjVjs7QUFFcEIsd0RBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUvZGVmYXVsdC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2dyYW0vdG8tZG8uanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2dyYW0vbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJleHBvcnQgY29uc3QgcHJvamVjdHMgPSBbXTtcblxuZXhwb3J0IGNvbnN0IHByaW50UHJvamVjdHMgPSAobWVzc2FnZSA9IFwiQSBsaXN0IG9mIGFsbCBQcm9qZWN0czpcIikgPT4ge1xuICBpZiAocHJvamVjdHMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGNvbnNvbGUubG9nKEVycm9yKFwiVGhlcmUgYXJlIG5vIHByb2plY3RzLlwiKSk7XG4gIH1cbiAgY29uc29sZS5sb2coYCR7bWVzc2FnZX1gKTtcbiAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhpbmRleCwgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShwcm9qZWN0KSkpO1xuICAgIGluZGV4Kys7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IG1vdmVQcm9qZWN0ID0gKHBvc2l0aW9uQSwgcG9zaXRpb25CKSA9PiB7XG4gIGlmICghcHJvamVjdHNbcG9zaXRpb25BXSkge1xuICAgIHJldHVybiBjb25zb2xlLmxvZyhFcnJvcihcIlRoZSBzcGVjaWZpZWQgb3JpZ2luIGluZGV4IGlzIG91dCBvZiByYW5nZS5cIikpO1xuICB9XG4gIGlmICghcHJvamVjdHNbcG9zaXRpb25CXSkge1xuICAgIHJldHVybiBjb25zb2xlLmxvZyhcbiAgICAgIEVycm9yKFwiVGhlIHNwZWNpZmllZCBkZXN0aW5hdGlvbiBpbmRleCBpcyBvdXQgb2YgcmFuZ2UuXCIpXG4gICAgKTtcbiAgfVxuICBsZXQgb2JqZWN0QSA9IHByb2plY3RzLnNwbGljZShwb3NpdGlvbkEsIDEpWzBdO1xuICBwcm9qZWN0cy5zcGxpY2UocG9zaXRpb25CLCAwLCBvYmplY3RBKTtcbiAgcHJpbnRQcm9qZWN0cyhcIlRoZSBwcm9qZWN0cyBoYXZlIGJlZW4gcmVvcmRlcmVkLlwiKTtcbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmVQcm9qZWN0ID0gKGluZGV4KSA9PiB7XG4gIGlmICghcHJvamVjdHNbaW5kZXhdKSB7XG4gICAgcmV0dXJuIGNvbnNvbGUubG9nKEVycm9yKFwiVGhlIHNwZWNpZmllZCBpbmRleCBpcyBvdXQgb2YgcmFuZ2UuXCIpKTtcbiAgfVxuICBsZXQgdGl0bGUgPSBwcm9qZWN0c1tpbmRleF0udGl0bGU7XG4gIHByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XG4gIHByaW50UHJvamVjdHMoYFByb2plY3QgXCIke3RpdGxlfVwiIGhhcyBiZWVuIHJlbW92ZWQuYCk7XG59O1xuXG5leHBvcnQgY29uc3QgbWFrZVByb2plY3QgPSAoeyB0aXRsZSA9IFwiXCIsIGRlc2NyaXB0aW9uID0gXCJcIiB9KSA9PiB7XG4gIHByb2plY3RzLnB1c2goeyB0aXRsZSwgZGVzY3JpcHRpb24sIHRhc2tzOiBbXSB9KTtcbiAgcHJpbnRQcm9qZWN0cyhcIkEgbmV3IHByb2plY3QgaGFzIGJlZW4gbWFkZS5cIik7XG59O1xuXG5jb25zdCB0YXNrRmFjdG9yeSA9ICh7XG4gIHRpdGxlID0gXCJcIixcbiAgZGVzY3JpcHRpb24gPSBcIlwiLFxuICBkdWVEYXRlID0gXCJcIixcbiAgcHJpb3JpdHkgPSBcIlwiLFxufSkgPT4ge1xuICBsZXQgdGFza1N0YXR1cyA9IGZhbHNlO1xuICBjb25zdCBjaGVja0NvbXBsZXRpb25TdGF0dXMgPSAoKSA9PiB7XG4gICAgaWYgKHRhc2tTdGF0dXMpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBUYXNrIFwiJHt0aXRsZX1cIiBoYXMgYmVlbiBjb21wbGV0ZWQuIDpEYCk7XG4gICAgfVxuICAgIGlmICghdGFza1N0YXR1cykge1xuICAgICAgY29uc29sZS5sb2coYFRhc2sgXCIke3RpdGxlfVwiIGhhcyBub3QgYmVlbiBjb21wbGV0ZWQuIDovYCk7XG4gICAgfVxuICAgIHJldHVybiB0YXNrU3RhdHVzO1xuICB9O1xuICBjb25zdCBjaGFuZ2VDb21wbGV0aW9uU3RhdHVzID0gKCkgPT4ge1xuICAgIHRhc2tTdGF0dXMgPSB0YXNrU3RhdHVzID8gZmFsc2UgOiB0cnVlO1xuICB9O1xuICByZXR1cm4ge1xuICAgIHRpdGxlLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGR1ZURhdGUsXG4gICAgcHJpb3JpdHksXG4gICAgY2hlY2tDb21wbGV0aW9uU3RhdHVzLFxuICAgIGNoYW5nZUNvbXBsZXRpb25TdGF0dXMsXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgcHJpbnRUYXNrcyA9IChwcm9qZWN0SW5kZXgsIG1lc3NhZ2UpID0+IHtcbiAgaWYgKCFwcm9qZWN0c1twcm9qZWN0SW5kZXhdKSB7XG4gICAgcmV0dXJuIGNvbnNvbGUubG9nKEVycm9yKFwiVGhlIHNwZWNpZmllZCBwcm9qZWN0IGluZGV4IGlzIG91dCBvZiByYW5nZS5cIikpO1xuICB9XG4gIGlmICghbWVzc2FnZSkge1xuICAgIGNvbnNvbGUubG9nKGBUYXNrcyBpbiAke3Byb2plY3RzW3Byb2plY3RJbmRleF0udGl0bGV9LmApO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICB9XG4gIHByb2plY3RzW3Byb2plY3RJbmRleF0udGFza3MuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhpbmRleCwgdGFzayk7XG4gICAgaW5kZXgrKztcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgYWRkVGFzayA9IChwcm9qZWN0SW5kZXgsIHRhc2sgPSB7fSkgPT4ge1xuICBpZiAoIXByb2plY3RzW3Byb2plY3RJbmRleF0pIHtcbiAgICByZXR1cm4gY29uc29sZS5sb2coRXJyb3IoXCJUaGUgc3BlY2lmaWVkIHByb2plY3QgaW5kZXggaXMgb3V0IG9mIHJhbmdlLlwiKSk7XG4gIH1cbiAgcHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrcy5wdXNoKHRhc2tGYWN0b3J5KHRhc2spKTtcbiAgcHJpbnRUYXNrcyhcbiAgICBwcm9qZWN0SW5kZXgsXG4gICAgYEEgdGFzayBoYXMgYmVlbiBhZGRlZCB0byBwcm9qZWN0IFwiJHtwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRpdGxlfVwiLmBcbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVQcm9qZWN0ID0gKGluZGV4LCB7IHRpdGxlLCBkZXNjcmlwdGlvbiB9KSA9PiB7XG4gIGlmICghcHJvamVjdHNbaW5kZXhdKSB7XG4gICAgcmV0dXJuIGNvbnNvbGUubG9nKEVycm9yKFwiVGhlIHNwZWNpZmllZCBwcm9qZWN0IGluZGV4IGlzIG91dCBvZiByYW5nZS5cIikpO1xuICB9XG4gIGlmICh0aXRsZSkge1xuICAgIHByb2plY3RzW2luZGV4XS50aXRsZSA9IHRpdGxlO1xuICB9XG4gIGlmIChkZXNjcmlwdGlvbikge1xuICAgIHByb2plY3RzW2luZGV4XS5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICB9XG4gIHByaW50UHJvamVjdHMoYFRoZSBwcm9qZWN0IGF0ICR7aW5kZXh9IGhhcyBiZWVuIHVwZGF0ZWQuYCk7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlVGFzayA9IChcbiAgcHJvamVjdEluZGV4LFxuICB0YXNrSW5kZXgsXG4gIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSB9XG4pID0+IHtcbiAgaWYgKCFwcm9qZWN0c1twcm9qZWN0SW5kZXhdKSB7XG4gICAgcmV0dXJuIGNvbnNvbGUubG9nKEVycm9yKFwiVGhlIHNwZWNpZmllZCBwcm9qZWN0IGluZGV4IGlzIG91dCBvZiByYW5nZS5cIikpO1xuICB9XG4gIGlmICghcHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrc1t0YXNrSW5kZXhdKSB7XG4gICAgcmV0dXJuIGNvbnNvbGUubG9nKEVycm9yKFwiVGhlIHNwZWNpZmllZCB0YXNrIGluZGV4IGlzIG91dCBvZiByYW5nZS5cIikpO1xuICB9XG4gIGxldCB0YXNrID0gcHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrc1t0YXNrSW5kZXhdO1xuICBpZiAodGl0bGUpIHtcbiAgICB0YXNrLnRpdGxlID0gdGl0bGU7XG4gIH1cbiAgaWYgKGRlc2NyaXB0aW9uKSB7XG4gICAgdGFzay5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICB9XG4gIGlmIChkdWVEYXRlKSB7XG4gICAgdGFzay5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgfVxuICBpZiAocHJpb3JpdHkpIHtcbiAgICB0YXNrLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIH1cbiAgcHJpbnRUYXNrcyhwcm9qZWN0SW5kZXgsIGBUaGUgdGFzayBhdCAke3Rhc2tJbmRleH0gaGFzIGJlZW4gdXBkYXRlZC5gKTtcbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmVUYXNrID0gKHByb2plY3RJbmRleCwgdGFza0luZGV4KSA9PiB7XG4gIGlmICghcHJvamVjdHNbcHJvamVjdEluZGV4XSkge1xuICAgIHJldHVybiBjb25zb2xlLmxvZyhFcnJvcihcIlRoZSBzcGVjaWZpZWQgcHJvamVjdCBpbmRleCBpcyBvdXQgb2YgcmFuZ2UuXCIpKTtcbiAgfVxuICBpZiAoIXByb2plY3RzW3Byb2plY3RJbmRleF0udGFza3NbdGFza0luZGV4XSkge1xuICAgIHJldHVybiBjb25zb2xlLmxvZyhFcnJvcihcIlRoZSBzcGVjaWZpZWQgdGFzayBpbmRleCBpcyBvdXQgb2YgcmFuZ2UuXCIpKTtcbiAgfVxuICBsZXQgdGl0bGUgPSBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRhc2tzW3Rhc2tJbmRleF0udGl0bGU7XG4gIHByb2plY3RzW3Byb2plY3RJbmRleF0udGFza3Muc3BsaWNlKHRhc2tJbmRleCwgMSk7XG4gIHByaW50VGFza3MocHJvamVjdEluZGV4LCBgVGhlIHRhc2sgXCIke3RpdGxlfVwiIGhhcyBiZWVuIHJlbW92ZWQuYCk7XG59O1xuXG5leHBvcnQgY29uc3QgdHJhbnNmZXJUYXNrID0gKHByb2plY3RJbmRleEEsIHByb2plY3RJbmRleEIsIHRhc2tJbmRleCkgPT4ge1xuICBpZiAoIXByb2plY3RzW3Byb2plY3RJbmRleEFdKSB7XG4gICAgcmV0dXJuIGNvbnNvbGUubG9nKEVycm9yKFwiVGhlIHNwZWNpZmllZCBvcmlnaW4gaW5kZXggaXMgb3V0IG9mIHJhbmdlLlwiKSk7XG4gIH1cbiAgaWYgKCFwcm9qZWN0c1twcm9qZWN0SW5kZXhCXSkge1xuICAgIHJldHVybiBjb25zb2xlLmxvZyhcbiAgICAgIEVycm9yKFwiVGhlIHNwZWNpZmllZCBkZXN0aW5hdGlvbiBpbmRleCBpcyBvdXQgb2YgcmFuZ2UuXCIpXG4gICAgKTtcbiAgfVxuICBpZiAoIXByb2plY3RzW3Byb2plY3RJbmRleEFdLnRhc2tzW3Rhc2tJbmRleF0pIHtcbiAgICByZXR1cm4gY29uc29sZS5sb2coRXJyb3IoXCJUaGUgc3BlY2lmaWVkIHRhc2sgaW5kZXggaXMgb3V0IG9mIHJhbmdlLlwiKSk7XG4gIH1cbiAgbGV0IHRhc2sgPSBwcm9qZWN0c1twcm9qZWN0SW5kZXhBXS50YXNrcy5zcGxpY2UodGFza0luZGV4LCAxKVswXTtcbiAgcHJvamVjdHNbcHJvamVjdEluZGV4Ql0udGFza3MucHVzaCh0YXNrRmFjdG9yeSh0YXNrKSk7XG4gIHByaW50VGFza3MocHJvamVjdEluZGV4QiwgYFRhc2sgJHt0YXNrLnRpdGxlfSBoYXMgYmVlbiB0cmFuc2ZlcmVkLmApO1xufTtcblxuZXhwb3J0IGNvbnN0IG1vdmVUYXNrID0gKHByb2plY3RJbmRleCwgcG9zaXRpb25BLCBwb3NpdGlvbkIpID0+IHtcbiAgaWYgKCFwcm9qZWN0c1twcm9qZWN0SW5kZXhdKSB7XG4gICAgcmV0dXJuIGNvbnNvbGUubG9nKEVycm9yKFwiVGhlIHNwZWNpZmllZCBwcm9qZWN0IGluZGV4IGlzIG91dCBvZiByYW5nZS5cIikpO1xuICB9XG4gIGlmICghcHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrc1twb3NpdGlvbkFdKSB7XG4gICAgcmV0dXJuIGNvbnNvbGUubG9nKFxuICAgICAgRXJyb3IoXCJUaGUgZmlyc3Qgc3BlY2lmaWVkIHRhc2sgaW5kZXggaXMgb3V0IG9mIHJhbmdlLlwiKVxuICAgICk7XG4gIH1cbiAgaWYgKCFwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRhc2tzW3Bvc2l0aW9uQl0pIHtcbiAgICByZXR1cm4gY29uc29sZS5sb2coXG4gICAgICBFcnJvcihcIlRoZSBzZWNvbmQgc3BlY2lmaWVkIHRhc2sgaW5kZXggaXMgb3V0IG9mIHJhbmdlLlwiKVxuICAgICk7XG4gIH1cbiAgbGV0IHRhc2sgPSBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRhc2tzLnNwbGljZShwb3NpdGlvbkEsIDEpWzBdO1xuICBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRhc2tzLnNwbGljZShwb3NpdGlvbkIsIDAsIHRhc2spO1xuICBwcmludFRhc2tzKHByb2plY3RJbmRleCwgXCJUaGUgdGFzayBsaXN0IGhhcyBiZWVuIHJlb3JkZXJlZFwiKTtcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4uL3N0eWxlL2RlZmF1bHQuY3NzXCI7XG5pbXBvcnQge1xuICBwcm9qZWN0cyxcbiAgcHJpbnRQcm9qZWN0cyxcbiAgbW92ZVByb2plY3QsXG4gIHJlbW92ZVByb2plY3QsXG4gIG1ha2VQcm9qZWN0LFxuICBwcmludFRhc2tzLFxuICBhZGRUYXNrLFxuICB1cGRhdGVQcm9qZWN0LFxuICB1cGRhdGVUYXNrLFxuICByZW1vdmVUYXNrLFxuICB0cmFuc2ZlclRhc2ssXG4gIG1vdmVUYXNrLFxufSBmcm9tIFwiLi90by1kby5qc1wiO1xuXG5wcmludFByb2plY3RzKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=