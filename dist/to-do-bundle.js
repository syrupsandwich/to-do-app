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
    console.log(" ", index, JSON.parse(JSON.stringify(project)));
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
    console.log(" ", index, task);
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
(0,_to_do_js__WEBPACK_IMPORTED_MODULE_1__.makeProject)({
  title: "to-to yapp",
  description: "i wish i new how to test features automatically...",
});
(0,_to_do_js__WEBPACK_IMPORTED_MODULE_1__.addTask)(0, { title: "make tasks", description: "lorem..." });
(0,_to_do_js__WEBPACK_IMPORTED_MODULE_1__.addTask)(0, { title: "makee another" });
(0,_to_do_js__WEBPACK_IMPORTED_MODULE_1__.addTask)(0, { title: "make a project" });
(0,_to_do_js__WEBPACK_IMPORTED_MODULE_1__.makeProject)({ title: "second project", desctiption: "descriptione" });
(0,_to_do_js__WEBPACK_IMPORTED_MODULE_1__.addTask)(1, { title: "the only one" });
(0,_to_do_js__WEBPACK_IMPORTED_MODULE_1__.printProjects)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG8tZG8tYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQU87O0FBRUE7QUFDUDtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLE1BQU07QUFDbEM7O0FBRU8sdUJBQXVCLDhCQUE4QjtBQUM1RCxrQkFBa0IsK0JBQStCO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsTUFBTTtBQUNqQztBQUNBO0FBQ0EsMkJBQTJCLE1BQU07QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsNkJBQTZCO0FBQ3pELElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVPLHdDQUF3QztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsNkJBQTZCO0FBQ3RFO0FBQ0E7O0FBRU8sZ0NBQWdDLG9CQUFvQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsT0FBTztBQUN6Qzs7QUFFTztBQUNQO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxXQUFXO0FBQ3JEOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxNQUFNO0FBQzlDOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsWUFBWTtBQUNoRDs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUN0TEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOOEI7QUFjVjs7QUFFcEIsd0RBQWE7QUFDYixzREFBVztBQUNYO0FBQ0E7QUFDQSxDQUFDO0FBQ0Qsa0RBQU8sTUFBTSw4Q0FBOEM7QUFDM0Qsa0RBQU8sTUFBTSx3QkFBd0I7QUFDckMsa0RBQU8sTUFBTSx5QkFBeUI7QUFDdEMsc0RBQVcsR0FBRyxzREFBc0Q7QUFDcEUsa0RBQU8sTUFBTSx1QkFBdUI7QUFDcEMsd0RBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUvZGVmYXVsdC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2dyYW0vdG8tZG8uanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2dyYW0vbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJleHBvcnQgY29uc3QgcHJvamVjdHMgPSBbXTtcblxuZXhwb3J0IGNvbnN0IHByaW50UHJvamVjdHMgPSAobWVzc2FnZSA9IFwiQSBsaXN0IG9mIGFsbCBQcm9qZWN0czpcIikgPT4ge1xuICBpZiAocHJvamVjdHMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGNvbnNvbGUubG9nKEVycm9yKFwiVGhlcmUgYXJlIG5vIHByb2plY3RzLlwiKSk7XG4gIH1cbiAgY29uc29sZS5sb2coYCR7bWVzc2FnZX1gKTtcbiAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIiBcIiwgaW5kZXgsIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocHJvamVjdCkpKTtcbiAgICBpbmRleCsrO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBtb3ZlUHJvamVjdCA9IChwb3NpdGlvbkEsIHBvc2l0aW9uQikgPT4ge1xuICBpZiAoIXByb2plY3RzW3Bvc2l0aW9uQV0pIHtcbiAgICByZXR1cm4gY29uc29sZS5sb2coRXJyb3IoXCJUaGUgc3BlY2lmaWVkIG9yaWdpbiBpbmRleCBpcyBvdXQgb2YgcmFuZ2UuXCIpKTtcbiAgfVxuICBpZiAoIXByb2plY3RzW3Bvc2l0aW9uQl0pIHtcbiAgICByZXR1cm4gY29uc29sZS5sb2coXG4gICAgICBFcnJvcihcIlRoZSBzcGVjaWZpZWQgZGVzdGluYXRpb24gaW5kZXggaXMgb3V0IG9mIHJhbmdlLlwiKVxuICAgICk7XG4gIH1cbiAgbGV0IG9iamVjdEEgPSBwcm9qZWN0cy5zcGxpY2UocG9zaXRpb25BLCAxKVswXTtcbiAgcHJvamVjdHMuc3BsaWNlKHBvc2l0aW9uQiwgMCwgb2JqZWN0QSk7XG4gIHByaW50UHJvamVjdHMoXCJUaGUgcHJvamVjdHMgaGF2ZSBiZWVuIHJlb3JkZXJlZC5cIik7XG59O1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChpbmRleCkgPT4ge1xuICBpZiAoIXByb2plY3RzW2luZGV4XSkge1xuICAgIHJldHVybiBjb25zb2xlLmxvZyhFcnJvcihcIlRoZSBzcGVjaWZpZWQgaW5kZXggaXMgb3V0IG9mIHJhbmdlLlwiKSk7XG4gIH1cbiAgbGV0IHRpdGxlID0gcHJvamVjdHNbaW5kZXhdLnRpdGxlO1xuICBwcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICBwcmludFByb2plY3RzKGBQcm9qZWN0IFwiJHt0aXRsZX1cIiBoYXMgYmVlbiByZW1vdmVkLmApO1xufTtcblxuZXhwb3J0IGNvbnN0IG1ha2VQcm9qZWN0ID0gKHsgdGl0bGUgPSBcIlwiLCBkZXNjcmlwdGlvbiA9IFwiXCIgfSkgPT4ge1xuICBwcm9qZWN0cy5wdXNoKHsgdGl0bGUsIGRlc2NyaXB0aW9uLCB0YXNrczogW10gfSk7XG4gIHByaW50UHJvamVjdHMoXCJBIG5ldyBwcm9qZWN0IGhhcyBiZWVuIG1hZGUuXCIpO1xufTtcblxuY29uc3QgdGFza0ZhY3RvcnkgPSAoe1xuICB0aXRsZSA9IFwiXCIsXG4gIGRlc2NyaXB0aW9uID0gXCJcIixcbiAgZHVlRGF0ZSA9IFwiXCIsXG4gIHByaW9yaXR5ID0gXCJcIixcbn0pID0+IHtcbiAgbGV0IHRhc2tTdGF0dXMgPSBmYWxzZTtcbiAgY29uc3QgY2hlY2tDb21wbGV0aW9uU3RhdHVzID0gKCkgPT4ge1xuICAgIGlmICh0YXNrU3RhdHVzKSB7XG4gICAgICBjb25zb2xlLmxvZyhgVGFzayBcIiR7dGl0bGV9XCIgaGFzIGJlZW4gY29tcGxldGVkLiA6RGApO1xuICAgIH1cbiAgICBpZiAoIXRhc2tTdGF0dXMpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBUYXNrIFwiJHt0aXRsZX1cIiBoYXMgbm90IGJlZW4gY29tcGxldGVkLiA6L2ApO1xuICAgIH1cbiAgICByZXR1cm4gdGFza1N0YXR1cztcbiAgfTtcbiAgY29uc3QgY2hhbmdlQ29tcGxldGlvblN0YXR1cyA9ICgpID0+IHtcbiAgICB0YXNrU3RhdHVzID0gdGFza1N0YXR1cyA/IGZhbHNlIDogdHJ1ZTtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkdWVEYXRlLFxuICAgIHByaW9yaXR5LFxuICAgIGNoZWNrQ29tcGxldGlvblN0YXR1cyxcbiAgICBjaGFuZ2VDb21wbGV0aW9uU3RhdHVzLFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHByaW50VGFza3MgPSAocHJvamVjdEluZGV4LCBtZXNzYWdlKSA9PiB7XG4gIGlmICghcHJvamVjdHNbcHJvamVjdEluZGV4XSkge1xuICAgIHJldHVybiBjb25zb2xlLmxvZyhFcnJvcihcIlRoZSBzcGVjaWZpZWQgcHJvamVjdCBpbmRleCBpcyBvdXQgb2YgcmFuZ2UuXCIpKTtcbiAgfVxuICBpZiAoIW1lc3NhZ2UpIHtcbiAgICBjb25zb2xlLmxvZyhgVGFza3MgaW4gJHtwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRpdGxlfS5gKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgfVxuICBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRhc2tzLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XG4gICAgY29uc29sZS5sb2coXCIgXCIsIGluZGV4LCB0YXNrKTtcbiAgICBpbmRleCsrO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRUYXNrID0gKHByb2plY3RJbmRleCwgdGFzayA9IHt9KSA9PiB7XG4gIGlmICghcHJvamVjdHNbcHJvamVjdEluZGV4XSkge1xuICAgIHJldHVybiBjb25zb2xlLmxvZyhFcnJvcihcIlRoZSBzcGVjaWZpZWQgcHJvamVjdCBpbmRleCBpcyBvdXQgb2YgcmFuZ2UuXCIpKTtcbiAgfVxuICBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRhc2tzLnB1c2godGFza0ZhY3RvcnkodGFzaykpO1xuICBwcmludFRhc2tzKFxuICAgIHByb2plY3RJbmRleCxcbiAgICBgQSB0YXNrIGhhcyBiZWVuIGFkZGVkIHRvIHByb2plY3QgXCIke3Byb2plY3RzW3Byb2plY3RJbmRleF0udGl0bGV9XCIuYFxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVByb2plY3QgPSAoaW5kZXgsIHsgdGl0bGUsIGRlc2NyaXB0aW9uIH0pID0+IHtcbiAgaWYgKCFwcm9qZWN0c1tpbmRleF0pIHtcbiAgICByZXR1cm4gY29uc29sZS5sb2coRXJyb3IoXCJUaGUgc3BlY2lmaWVkIHByb2plY3QgaW5kZXggaXMgb3V0IG9mIHJhbmdlLlwiKSk7XG4gIH1cbiAgaWYgKHRpdGxlKSB7XG4gICAgcHJvamVjdHNbaW5kZXhdLnRpdGxlID0gdGl0bGU7XG4gIH1cbiAgaWYgKGRlc2NyaXB0aW9uKSB7XG4gICAgcHJvamVjdHNbaW5kZXhdLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIH1cbiAgcHJpbnRQcm9qZWN0cyhgVGhlIHByb2plY3QgYXQgJHtpbmRleH0gaGFzIGJlZW4gdXBkYXRlZC5gKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVUYXNrID0gKFxuICBwcm9qZWN0SW5kZXgsXG4gIHRhc2tJbmRleCxcbiAgeyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5IH1cbikgPT4ge1xuICBpZiAoIXByb2plY3RzW3Byb2plY3RJbmRleF0pIHtcbiAgICByZXR1cm4gY29uc29sZS5sb2coRXJyb3IoXCJUaGUgc3BlY2lmaWVkIHByb2plY3QgaW5kZXggaXMgb3V0IG9mIHJhbmdlLlwiKSk7XG4gIH1cbiAgaWYgKCFwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRhc2tzW3Rhc2tJbmRleF0pIHtcbiAgICByZXR1cm4gY29uc29sZS5sb2coRXJyb3IoXCJUaGUgc3BlY2lmaWVkIHRhc2sgaW5kZXggaXMgb3V0IG9mIHJhbmdlLlwiKSk7XG4gIH1cbiAgbGV0IHRhc2sgPSBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRhc2tzW3Rhc2tJbmRleF07XG4gIGlmICh0aXRsZSkge1xuICAgIHRhc2sudGl0bGUgPSB0aXRsZTtcbiAgfVxuICBpZiAoZGVzY3JpcHRpb24pIHtcbiAgICB0YXNrLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIH1cbiAgaWYgKGR1ZURhdGUpIHtcbiAgICB0YXNrLmR1ZURhdGUgPSBkdWVEYXRlO1xuICB9XG4gIGlmIChwcmlvcml0eSkge1xuICAgIHRhc2sucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgfVxuICBwcmludFRhc2tzKHByb2plY3RJbmRleCwgYFRoZSB0YXNrIGF0ICR7dGFza0luZGV4fSBoYXMgYmVlbiB1cGRhdGVkLmApO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZVRhc2sgPSAocHJvamVjdEluZGV4LCB0YXNrSW5kZXgpID0+IHtcbiAgaWYgKCFwcm9qZWN0c1twcm9qZWN0SW5kZXhdKSB7XG4gICAgcmV0dXJuIGNvbnNvbGUubG9nKEVycm9yKFwiVGhlIHNwZWNpZmllZCBwcm9qZWN0IGluZGV4IGlzIG91dCBvZiByYW5nZS5cIikpO1xuICB9XG4gIGlmICghcHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrc1t0YXNrSW5kZXhdKSB7XG4gICAgcmV0dXJuIGNvbnNvbGUubG9nKEVycm9yKFwiVGhlIHNwZWNpZmllZCB0YXNrIGluZGV4IGlzIG91dCBvZiByYW5nZS5cIikpO1xuICB9XG4gIGxldCB0aXRsZSA9IHByb2plY3RzW3Byb2plY3RJbmRleF0udGFza3NbdGFza0luZGV4XS50aXRsZTtcbiAgcHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrcy5zcGxpY2UodGFza0luZGV4LCAxKTtcbiAgcHJpbnRUYXNrcyhwcm9qZWN0SW5kZXgsIGBUaGUgdGFzayBcIiR7dGl0bGV9XCIgaGFzIGJlZW4gcmVtb3ZlZC5gKTtcbn07XG5cbmV4cG9ydCBjb25zdCB0cmFuc2ZlclRhc2sgPSAocHJvamVjdEluZGV4QSwgcHJvamVjdEluZGV4QiwgdGFza0luZGV4KSA9PiB7XG4gIGlmICghcHJvamVjdHNbcHJvamVjdEluZGV4QV0pIHtcbiAgICByZXR1cm4gY29uc29sZS5sb2coRXJyb3IoXCJUaGUgc3BlY2lmaWVkIG9yaWdpbiBpbmRleCBpcyBvdXQgb2YgcmFuZ2UuXCIpKTtcbiAgfVxuICBpZiAoIXByb2plY3RzW3Byb2plY3RJbmRleEJdKSB7XG4gICAgcmV0dXJuIGNvbnNvbGUubG9nKFxuICAgICAgRXJyb3IoXCJUaGUgc3BlY2lmaWVkIGRlc3RpbmF0aW9uIGluZGV4IGlzIG91dCBvZiByYW5nZS5cIilcbiAgICApO1xuICB9XG4gIGlmICghcHJvamVjdHNbcHJvamVjdEluZGV4QV0udGFza3NbdGFza0luZGV4XSkge1xuICAgIHJldHVybiBjb25zb2xlLmxvZyhFcnJvcihcIlRoZSBzcGVjaWZpZWQgdGFzayBpbmRleCBpcyBvdXQgb2YgcmFuZ2UuXCIpKTtcbiAgfVxuICBsZXQgdGFzayA9IHByb2plY3RzW3Byb2plY3RJbmRleEFdLnRhc2tzLnNwbGljZSh0YXNrSW5kZXgsIDEpWzBdO1xuICBwcm9qZWN0c1twcm9qZWN0SW5kZXhCXS50YXNrcy5wdXNoKHRhc2tGYWN0b3J5KHRhc2spKTtcbiAgcHJpbnRUYXNrcyhwcm9qZWN0SW5kZXhCLCBgVGFzayAke3Rhc2sudGl0bGV9IGhhcyBiZWVuIHRyYW5zZmVyZWQuYCk7XG59O1xuXG5leHBvcnQgY29uc3QgbW92ZVRhc2sgPSAocHJvamVjdEluZGV4LCBwb3NpdGlvbkEsIHBvc2l0aW9uQikgPT4ge1xuICBpZiAoIXByb2plY3RzW3Byb2plY3RJbmRleF0pIHtcbiAgICByZXR1cm4gY29uc29sZS5sb2coRXJyb3IoXCJUaGUgc3BlY2lmaWVkIHByb2plY3QgaW5kZXggaXMgb3V0IG9mIHJhbmdlLlwiKSk7XG4gIH1cbiAgaWYgKCFwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRhc2tzW3Bvc2l0aW9uQV0pIHtcbiAgICByZXR1cm4gY29uc29sZS5sb2coXG4gICAgICBFcnJvcihcIlRoZSBmaXJzdCBzcGVjaWZpZWQgdGFzayBpbmRleCBpcyBvdXQgb2YgcmFuZ2UuXCIpXG4gICAgKTtcbiAgfVxuICBpZiAoIXByb2plY3RzW3Byb2plY3RJbmRleF0udGFza3NbcG9zaXRpb25CXSkge1xuICAgIHJldHVybiBjb25zb2xlLmxvZyhcbiAgICAgIEVycm9yKFwiVGhlIHNlY29uZCBzcGVjaWZpZWQgdGFzayBpbmRleCBpcyBvdXQgb2YgcmFuZ2UuXCIpXG4gICAgKTtcbiAgfVxuICBsZXQgdGFzayA9IHByb2plY3RzW3Byb2plY3RJbmRleF0udGFza3Muc3BsaWNlKHBvc2l0aW9uQSwgMSlbMF07XG4gIHByb2plY3RzW3Byb2plY3RJbmRleF0udGFza3Muc3BsaWNlKHBvc2l0aW9uQiwgMCwgdGFzayk7XG4gIHByaW50VGFza3MocHJvamVjdEluZGV4LCBcIlRoZSB0YXNrIGxpc3QgaGFzIGJlZW4gcmVvcmRlcmVkXCIpO1xufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi4vc3R5bGUvZGVmYXVsdC5jc3NcIjtcbmltcG9ydCB7XG4gIHByb2plY3RzLFxuICBwcmludFByb2plY3RzLFxuICBtb3ZlUHJvamVjdCxcbiAgcmVtb3ZlUHJvamVjdCxcbiAgbWFrZVByb2plY3QsXG4gIHByaW50VGFza3MsXG4gIGFkZFRhc2ssXG4gIHVwZGF0ZVByb2plY3QsXG4gIHVwZGF0ZVRhc2ssXG4gIHJlbW92ZVRhc2ssXG4gIHRyYW5zZmVyVGFzayxcbiAgbW92ZVRhc2ssXG59IGZyb20gXCIuL3RvLWRvLmpzXCI7XG5cbnByaW50UHJvamVjdHMoKTtcbm1ha2VQcm9qZWN0KHtcbiAgdGl0bGU6IFwidG8tdG8geWFwcFwiLFxuICBkZXNjcmlwdGlvbjogXCJpIHdpc2ggaSBuZXcgaG93IHRvIHRlc3QgZmVhdHVyZXMgYXV0b21hdGljYWxseS4uLlwiLFxufSk7XG5hZGRUYXNrKDAsIHsgdGl0bGU6IFwibWFrZSB0YXNrc1wiLCBkZXNjcmlwdGlvbjogXCJsb3JlbS4uLlwiIH0pO1xuYWRkVGFzaygwLCB7IHRpdGxlOiBcIm1ha2VlIGFub3RoZXJcIiB9KTtcbmFkZFRhc2soMCwgeyB0aXRsZTogXCJtYWtlIGEgcHJvamVjdFwiIH0pO1xubWFrZVByb2plY3QoeyB0aXRsZTogXCJzZWNvbmQgcHJvamVjdFwiLCBkZXNjdGlwdGlvbjogXCJkZXNjcmlwdGlvbmVcIiB9KTtcbmFkZFRhc2soMSwgeyB0aXRsZTogXCJ0aGUgb25seSBvbmVcIiB9KTtcbnByaW50UHJvamVjdHMoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==