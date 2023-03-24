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
/*!******************************!*\
  !*** ./src/program/to-do.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_default_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/default.css */ "./src/style/default.css");


const emptyProject = {
  title: "",
  description: "",
  tasks: [],
};

const demoProject1 = {
  title: "Exercise solutions.",
  description:
    "Figure out an optimal exercise setup for each major muscle group.",
  tasks: [],
};

const demoProject2 = {
  title: "250 box challenge",
  description: '"draw a box - then do it again another 249 times."',
  tasks: [],
};

const demoProject3 = {
  title: "To-do app",
  description: "A place to store all of your tasks.",
  tasks: [],
};

const projects = [emptyProject, demoProject1, demoProject2, demoProject3];

const printProjects = () => {
  console.log("Project List");
  let index = 0;
  projects.forEach((project) => {
    console.log(index, project);
    index++;
  });
};

printProjects();

const moveProject = (positionA, positionB) => {
  let objectA = projects.splice(positionA, 1)[0];
  projects.splice(positionB, 0, objectA);
  printProjects();
};

projects[0].title = "Other Tasks";
moveProject(3, 0);

const removeProject = (index) => {
  projects.splice(index, 1);
  printProjects();
};

removeProject(1);

const makeProject = ({ title = "", description = "" }) => {
  projects.push({ title, description, tasks: [] });
  printProjects();
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

const addTask = (projectIndex, task = {}) => {
  if (projectIndex > projects.length - 1 || projectIndex < 0) {
    return console.log(Error("No project was specified."));
  }
  projects[projectIndex].tasks.push(taskFactory(task));
  printProjects();
};

addTask(0);

addTask(0, {
  title: "climb the stairs",
  description: "Get those glutes working!",
});

projects[0].tasks[1].checkCompletionStatus();
projects[0].tasks[1].changeCompletionStatus();
projects[0].tasks[1].checkCompletionStatus();

const updateProject = (index, { title, description }) => {
  if (title) {
    projects[index].title = title;
  }
  if (description) {
    projects[index].description = description;
  }
  printProjects();
};

const printTasks = (projectIndex) => {
  let index = 0;
  console.log(`Tasks in "${projects[projectIndex].title}"`);
  projects[projectIndex].tasks.forEach((task) => {
    console.log(index, task);
    index++;
  });
};

printTasks(0);

const updateTask = (
  projectIndex,
  taskIndex,
  { title, description, dueDate, priority }
) => {
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
  printTasks(projectIndex);
};

updateTask(0, 0, { title: "Chop the mangos", priority: "important" });

const removeTask = (projectIndex, taskIndex) => {
  projects[projectIndex].tasks.splice(taskIndex, 1);
  printTasks(projectIndex);
};

removeTask(0, 1);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG8tZG8tYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ044Qjs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsdUJBQXVCLDhCQUE4QjtBQUNyRCxrQkFBa0IsK0JBQStCO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsTUFBTTtBQUNqQztBQUNBO0FBQ0EsMkJBQTJCLE1BQU07QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUEsZ0NBQWdDLG9CQUFvQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkIsNkJBQTZCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLGlEQUFpRDs7QUFFcEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUvZGVmYXVsdC5jc3MiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9wcm9ncmFtL3RvLWRvLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuLi9zdHlsZS9kZWZhdWx0LmNzc1wiO1xuXG5jb25zdCBlbXB0eVByb2plY3QgPSB7XG4gIHRpdGxlOiBcIlwiLFxuICBkZXNjcmlwdGlvbjogXCJcIixcbiAgdGFza3M6IFtdLFxufTtcblxuY29uc3QgZGVtb1Byb2plY3QxID0ge1xuICB0aXRsZTogXCJFeGVyY2lzZSBzb2x1dGlvbnMuXCIsXG4gIGRlc2NyaXB0aW9uOlxuICAgIFwiRmlndXJlIG91dCBhbiBvcHRpbWFsIGV4ZXJjaXNlIHNldHVwIGZvciBlYWNoIG1ham9yIG11c2NsZSBncm91cC5cIixcbiAgdGFza3M6IFtdLFxufTtcblxuY29uc3QgZGVtb1Byb2plY3QyID0ge1xuICB0aXRsZTogXCIyNTAgYm94IGNoYWxsZW5nZVwiLFxuICBkZXNjcmlwdGlvbjogJ1wiZHJhdyBhIGJveCAtIHRoZW4gZG8gaXQgYWdhaW4gYW5vdGhlciAyNDkgdGltZXMuXCInLFxuICB0YXNrczogW10sXG59O1xuXG5jb25zdCBkZW1vUHJvamVjdDMgPSB7XG4gIHRpdGxlOiBcIlRvLWRvIGFwcFwiLFxuICBkZXNjcmlwdGlvbjogXCJBIHBsYWNlIHRvIHN0b3JlIGFsbCBvZiB5b3VyIHRhc2tzLlwiLFxuICB0YXNrczogW10sXG59O1xuXG5jb25zdCBwcm9qZWN0cyA9IFtlbXB0eVByb2plY3QsIGRlbW9Qcm9qZWN0MSwgZGVtb1Byb2plY3QyLCBkZW1vUHJvamVjdDNdO1xuXG5jb25zdCBwcmludFByb2plY3RzID0gKCkgPT4ge1xuICBjb25zb2xlLmxvZyhcIlByb2plY3QgTGlzdFwiKTtcbiAgbGV0IGluZGV4ID0gMDtcbiAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGluZGV4LCBwcm9qZWN0KTtcbiAgICBpbmRleCsrO1xuICB9KTtcbn07XG5cbnByaW50UHJvamVjdHMoKTtcblxuY29uc3QgbW92ZVByb2plY3QgPSAocG9zaXRpb25BLCBwb3NpdGlvbkIpID0+IHtcbiAgbGV0IG9iamVjdEEgPSBwcm9qZWN0cy5zcGxpY2UocG9zaXRpb25BLCAxKVswXTtcbiAgcHJvamVjdHMuc3BsaWNlKHBvc2l0aW9uQiwgMCwgb2JqZWN0QSk7XG4gIHByaW50UHJvamVjdHMoKTtcbn07XG5cbnByb2plY3RzWzBdLnRpdGxlID0gXCJPdGhlciBUYXNrc1wiO1xubW92ZVByb2plY3QoMywgMCk7XG5cbmNvbnN0IHJlbW92ZVByb2plY3QgPSAoaW5kZXgpID0+IHtcbiAgcHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgcHJpbnRQcm9qZWN0cygpO1xufTtcblxucmVtb3ZlUHJvamVjdCgxKTtcblxuY29uc3QgbWFrZVByb2plY3QgPSAoeyB0aXRsZSA9IFwiXCIsIGRlc2NyaXB0aW9uID0gXCJcIiB9KSA9PiB7XG4gIHByb2plY3RzLnB1c2goeyB0aXRsZSwgZGVzY3JpcHRpb24sIHRhc2tzOiBbXSB9KTtcbiAgcHJpbnRQcm9qZWN0cygpO1xufTtcblxuY29uc3QgdGFza0ZhY3RvcnkgPSAoe1xuICB0aXRsZSA9IFwiXCIsXG4gIGRlc2NyaXB0aW9uID0gXCJcIixcbiAgZHVlRGF0ZSA9IFwiXCIsXG4gIHByaW9yaXR5ID0gXCJcIixcbn0pID0+IHtcbiAgbGV0IHRhc2tTdGF0dXMgPSBmYWxzZTtcbiAgY29uc3QgY2hlY2tDb21wbGV0aW9uU3RhdHVzID0gKCkgPT4ge1xuICAgIGlmICh0YXNrU3RhdHVzKSB7XG4gICAgICBjb25zb2xlLmxvZyhgVGFzayBcIiR7dGl0bGV9XCIgaGFzIGJlZW4gY29tcGxldGVkLiA6RGApO1xuICAgIH1cbiAgICBpZiAoIXRhc2tTdGF0dXMpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBUYXNrIFwiJHt0aXRsZX1cIiBoYXMgbm90IGJlZW4gY29tcGxldGVkLiA6L2ApO1xuICAgIH1cbiAgICByZXR1cm4gdGFza1N0YXR1cztcbiAgfTtcbiAgY29uc3QgY2hhbmdlQ29tcGxldGlvblN0YXR1cyA9ICgpID0+IHtcbiAgICB0YXNrU3RhdHVzID0gdGFza1N0YXR1cyA/IGZhbHNlIDogdHJ1ZTtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkdWVEYXRlLFxuICAgIHByaW9yaXR5LFxuICAgIGNoZWNrQ29tcGxldGlvblN0YXR1cyxcbiAgICBjaGFuZ2VDb21wbGV0aW9uU3RhdHVzLFxuICB9O1xufTtcblxuY29uc3QgYWRkVGFzayA9IChwcm9qZWN0SW5kZXgsIHRhc2sgPSB7fSkgPT4ge1xuICBpZiAocHJvamVjdEluZGV4ID4gcHJvamVjdHMubGVuZ3RoIC0gMSB8fCBwcm9qZWN0SW5kZXggPCAwKSB7XG4gICAgcmV0dXJuIGNvbnNvbGUubG9nKEVycm9yKFwiTm8gcHJvamVjdCB3YXMgc3BlY2lmaWVkLlwiKSk7XG4gIH1cbiAgcHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrcy5wdXNoKHRhc2tGYWN0b3J5KHRhc2spKTtcbiAgcHJpbnRQcm9qZWN0cygpO1xufTtcblxuYWRkVGFzaygwKTtcblxuYWRkVGFzaygwLCB7XG4gIHRpdGxlOiBcImNsaW1iIHRoZSBzdGFpcnNcIixcbiAgZGVzY3JpcHRpb246IFwiR2V0IHRob3NlIGdsdXRlcyB3b3JraW5nIVwiLFxufSk7XG5cbnByb2plY3RzWzBdLnRhc2tzWzFdLmNoZWNrQ29tcGxldGlvblN0YXR1cygpO1xucHJvamVjdHNbMF0udGFza3NbMV0uY2hhbmdlQ29tcGxldGlvblN0YXR1cygpO1xucHJvamVjdHNbMF0udGFza3NbMV0uY2hlY2tDb21wbGV0aW9uU3RhdHVzKCk7XG5cbmNvbnN0IHVwZGF0ZVByb2plY3QgPSAoaW5kZXgsIHsgdGl0bGUsIGRlc2NyaXB0aW9uIH0pID0+IHtcbiAgaWYgKHRpdGxlKSB7XG4gICAgcHJvamVjdHNbaW5kZXhdLnRpdGxlID0gdGl0bGU7XG4gIH1cbiAgaWYgKGRlc2NyaXB0aW9uKSB7XG4gICAgcHJvamVjdHNbaW5kZXhdLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIH1cbiAgcHJpbnRQcm9qZWN0cygpO1xufTtcblxuY29uc3QgcHJpbnRUYXNrcyA9IChwcm9qZWN0SW5kZXgpID0+IHtcbiAgbGV0IGluZGV4ID0gMDtcbiAgY29uc29sZS5sb2coYFRhc2tzIGluIFwiJHtwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRpdGxlfVwiYCk7XG4gIHByb2plY3RzW3Byb2plY3RJbmRleF0udGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGNvbnNvbGUubG9nKGluZGV4LCB0YXNrKTtcbiAgICBpbmRleCsrO1xuICB9KTtcbn07XG5cbnByaW50VGFza3MoMCk7XG5cbmNvbnN0IHVwZGF0ZVRhc2sgPSAoXG4gIHByb2plY3RJbmRleCxcbiAgdGFza0luZGV4LFxuICB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkgfVxuKSA9PiB7XG4gIGxldCB0YXNrID0gcHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrc1t0YXNrSW5kZXhdO1xuICBpZiAodGl0bGUpIHtcbiAgICB0YXNrLnRpdGxlID0gdGl0bGU7XG4gIH1cbiAgaWYgKGRlc2NyaXB0aW9uKSB7XG4gICAgdGFzay5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICB9XG4gIGlmIChkdWVEYXRlKSB7XG4gICAgdGFzay5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgfVxuICBpZiAocHJpb3JpdHkpIHtcbiAgICB0YXNrLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIH1cbiAgcHJpbnRUYXNrcyhwcm9qZWN0SW5kZXgpO1xufTtcblxudXBkYXRlVGFzaygwLCAwLCB7IHRpdGxlOiBcIkNob3AgdGhlIG1hbmdvc1wiLCBwcmlvcml0eTogXCJpbXBvcnRhbnRcIiB9KTtcblxuY29uc3QgcmVtb3ZlVGFzayA9IChwcm9qZWN0SW5kZXgsIHRhc2tJbmRleCkgPT4ge1xuICBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRhc2tzLnNwbGljZSh0YXNrSW5kZXgsIDEpO1xuICBwcmludFRhc2tzKHByb2plY3RJbmRleCk7XG59O1xuXG5yZW1vdmVUYXNrKDAsIDEpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9