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
    console.log(index, JSON.parse(JSON.stringify(project)));
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

const printTasks = (projectIndex) => {
  let index = 0;
  let projectTitle = projects[projectIndex].title;
  let length = projects[projectIndex].tasks.length;
  console.log(`Tasks in "${projectTitle}": ${length}`);
  projects[projectIndex].tasks.forEach((task) => {
    console.log(index, task);
    index++;
  });
};

const addTask = (projectIndex, task = {}) => {
  if (projectIndex > projects.length - 1 || projectIndex < 0) {
    return console.log(Error("No project was specified."));
  }
  projects[projectIndex].tasks.push(taskFactory(task));
  printTasks(projectIndex);
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

const transferTask = (projectIndexA, projectIndexB, taskIndex) => {
  let task = projects[projectIndexA].tasks.splice(taskIndex, 1)[0];
  addTask(projectIndexB, { task });
  printProjects();
};

const moveTask = (projectIndex, positionA, positionB) => {
  let task = projects[projectIndex].tasks.splice(positionA, 1)[0];
  projects[projectIndex].tasks.splice(positionB, 0, task);
  printTasks(projectIndex);
};

addTask(0, {
  title: "Car project.",
  description: "Customize a Hotwheels car.",
});
moveTask(0, 1, 0);
moveTask(0, 1, 2);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG8tZG8tYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ044Qjs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsdUJBQXVCLDhCQUE4QjtBQUNyRCxrQkFBa0IsK0JBQStCO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsTUFBTTtBQUNqQztBQUNBO0FBQ0EsMkJBQTJCLE1BQU07QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGFBQWEsS0FBSyxPQUFPO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBLGdDQUFnQyxvQkFBb0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLGlEQUFpRDs7QUFFcEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJCQUEyQixNQUFNO0FBQ2pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsZS9kZWZhdWx0LmNzcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2dyYW0vdG8tZG8uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4uL3N0eWxlL2RlZmF1bHQuY3NzXCI7XG5cbmNvbnN0IGVtcHR5UHJvamVjdCA9IHtcbiAgdGl0bGU6IFwiXCIsXG4gIGRlc2NyaXB0aW9uOiBcIlwiLFxuICB0YXNrczogW10sXG59O1xuXG5jb25zdCBkZW1vUHJvamVjdDEgPSB7XG4gIHRpdGxlOiBcIkV4ZXJjaXNlIHNvbHV0aW9ucy5cIixcbiAgZGVzY3JpcHRpb246XG4gICAgXCJGaWd1cmUgb3V0IGFuIG9wdGltYWwgZXhlcmNpc2Ugc2V0dXAgZm9yIGVhY2ggbWFqb3IgbXVzY2xlIGdyb3VwLlwiLFxuICB0YXNrczogW10sXG59O1xuXG5jb25zdCBkZW1vUHJvamVjdDIgPSB7XG4gIHRpdGxlOiBcIjI1MCBib3ggY2hhbGxlbmdlXCIsXG4gIGRlc2NyaXB0aW9uOiAnXCJkcmF3IGEgYm94IC0gdGhlbiBkbyBpdCBhZ2FpbiBhbm90aGVyIDI0OSB0aW1lcy5cIicsXG4gIHRhc2tzOiBbXSxcbn07XG5cbmNvbnN0IGRlbW9Qcm9qZWN0MyA9IHtcbiAgdGl0bGU6IFwiVG8tZG8gYXBwXCIsXG4gIGRlc2NyaXB0aW9uOiBcIkEgcGxhY2UgdG8gc3RvcmUgYWxsIG9mIHlvdXIgdGFza3MuXCIsXG4gIHRhc2tzOiBbXSxcbn07XG5cbmNvbnN0IHByb2plY3RzID0gW2VtcHR5UHJvamVjdCwgZGVtb1Byb2plY3QxLCBkZW1vUHJvamVjdDIsIGRlbW9Qcm9qZWN0M107XG5cbmNvbnN0IHByaW50UHJvamVjdHMgPSAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKFwiUHJvamVjdCBMaXN0XCIpO1xuICBsZXQgaW5kZXggPSAwO1xuICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgY29uc29sZS5sb2coaW5kZXgsIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocHJvamVjdCkpKTtcbiAgICBpbmRleCsrO1xuICB9KTtcbn07XG5cbnByaW50UHJvamVjdHMoKTtcblxuY29uc3QgbW92ZVByb2plY3QgPSAocG9zaXRpb25BLCBwb3NpdGlvbkIpID0+IHtcbiAgbGV0IG9iamVjdEEgPSBwcm9qZWN0cy5zcGxpY2UocG9zaXRpb25BLCAxKVswXTtcbiAgcHJvamVjdHMuc3BsaWNlKHBvc2l0aW9uQiwgMCwgb2JqZWN0QSk7XG4gIHByaW50UHJvamVjdHMoKTtcbn07XG5cbnByb2plY3RzWzBdLnRpdGxlID0gXCJPdGhlciBUYXNrc1wiO1xubW92ZVByb2plY3QoMywgMCk7XG5cbmNvbnN0IHJlbW92ZVByb2plY3QgPSAoaW5kZXgpID0+IHtcbiAgcHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgcHJpbnRQcm9qZWN0cygpO1xufTtcblxucmVtb3ZlUHJvamVjdCgxKTtcblxuY29uc3QgbWFrZVByb2plY3QgPSAoeyB0aXRsZSA9IFwiXCIsIGRlc2NyaXB0aW9uID0gXCJcIiB9KSA9PiB7XG4gIHByb2plY3RzLnB1c2goeyB0aXRsZSwgZGVzY3JpcHRpb24sIHRhc2tzOiBbXSB9KTtcbiAgcHJpbnRQcm9qZWN0cygpO1xufTtcblxuY29uc3QgdGFza0ZhY3RvcnkgPSAoe1xuICB0aXRsZSA9IFwiXCIsXG4gIGRlc2NyaXB0aW9uID0gXCJcIixcbiAgZHVlRGF0ZSA9IFwiXCIsXG4gIHByaW9yaXR5ID0gXCJcIixcbn0pID0+IHtcbiAgbGV0IHRhc2tTdGF0dXMgPSBmYWxzZTtcbiAgY29uc3QgY2hlY2tDb21wbGV0aW9uU3RhdHVzID0gKCkgPT4ge1xuICAgIGlmICh0YXNrU3RhdHVzKSB7XG4gICAgICBjb25zb2xlLmxvZyhgVGFzayBcIiR7dGl0bGV9XCIgaGFzIGJlZW4gY29tcGxldGVkLiA6RGApO1xuICAgIH1cbiAgICBpZiAoIXRhc2tTdGF0dXMpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBUYXNrIFwiJHt0aXRsZX1cIiBoYXMgbm90IGJlZW4gY29tcGxldGVkLiA6L2ApO1xuICAgIH1cbiAgICByZXR1cm4gdGFza1N0YXR1cztcbiAgfTtcbiAgY29uc3QgY2hhbmdlQ29tcGxldGlvblN0YXR1cyA9ICgpID0+IHtcbiAgICB0YXNrU3RhdHVzID0gdGFza1N0YXR1cyA/IGZhbHNlIDogdHJ1ZTtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkdWVEYXRlLFxuICAgIHByaW9yaXR5LFxuICAgIGNoZWNrQ29tcGxldGlvblN0YXR1cyxcbiAgICBjaGFuZ2VDb21wbGV0aW9uU3RhdHVzLFxuICB9O1xufTtcblxuY29uc3QgcHJpbnRUYXNrcyA9IChwcm9qZWN0SW5kZXgpID0+IHtcbiAgbGV0IGluZGV4ID0gMDtcbiAgbGV0IHByb2plY3RUaXRsZSA9IHByb2plY3RzW3Byb2plY3RJbmRleF0udGl0bGU7XG4gIGxldCBsZW5ndGggPSBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRhc2tzLmxlbmd0aDtcbiAgY29uc29sZS5sb2coYFRhc2tzIGluIFwiJHtwcm9qZWN0VGl0bGV9XCI6ICR7bGVuZ3RofWApO1xuICBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICBjb25zb2xlLmxvZyhpbmRleCwgdGFzayk7XG4gICAgaW5kZXgrKztcbiAgfSk7XG59O1xuXG5jb25zdCBhZGRUYXNrID0gKHByb2plY3RJbmRleCwgdGFzayA9IHt9KSA9PiB7XG4gIGlmIChwcm9qZWN0SW5kZXggPiBwcm9qZWN0cy5sZW5ndGggLSAxIHx8IHByb2plY3RJbmRleCA8IDApIHtcbiAgICByZXR1cm4gY29uc29sZS5sb2coRXJyb3IoXCJObyBwcm9qZWN0IHdhcyBzcGVjaWZpZWQuXCIpKTtcbiAgfVxuICBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRhc2tzLnB1c2godGFza0ZhY3RvcnkodGFzaykpO1xuICBwcmludFRhc2tzKHByb2plY3RJbmRleCk7XG59O1xuXG5hZGRUYXNrKDApO1xuXG5hZGRUYXNrKDAsIHtcbiAgdGl0bGU6IFwiY2xpbWIgdGhlIHN0YWlyc1wiLFxuICBkZXNjcmlwdGlvbjogXCJHZXQgdGhvc2UgZ2x1dGVzIHdvcmtpbmchXCIsXG59KTtcblxucHJvamVjdHNbMF0udGFza3NbMV0uY2hlY2tDb21wbGV0aW9uU3RhdHVzKCk7XG5wcm9qZWN0c1swXS50YXNrc1sxXS5jaGFuZ2VDb21wbGV0aW9uU3RhdHVzKCk7XG5wcm9qZWN0c1swXS50YXNrc1sxXS5jaGVja0NvbXBsZXRpb25TdGF0dXMoKTtcblxuY29uc3QgdXBkYXRlUHJvamVjdCA9IChpbmRleCwgeyB0aXRsZSwgZGVzY3JpcHRpb24gfSkgPT4ge1xuICBpZiAodGl0bGUpIHtcbiAgICBwcm9qZWN0c1tpbmRleF0udGl0bGUgPSB0aXRsZTtcbiAgfVxuICBpZiAoZGVzY3JpcHRpb24pIHtcbiAgICBwcm9qZWN0c1tpbmRleF0uZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgfVxuICBwcmludFByb2plY3RzKCk7XG59O1xuXG5wcmludFRhc2tzKDApO1xuXG5jb25zdCB1cGRhdGVUYXNrID0gKFxuICBwcm9qZWN0SW5kZXgsXG4gIHRhc2tJbmRleCxcbiAgeyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5IH1cbikgPT4ge1xuICBsZXQgdGFzayA9IHByb2plY3RzW3Byb2plY3RJbmRleF0udGFza3NbdGFza0luZGV4XTtcbiAgaWYgKHRpdGxlKSB7XG4gICAgdGFzay50aXRsZSA9IHRpdGxlO1xuICB9XG4gIGlmIChkZXNjcmlwdGlvbikge1xuICAgIHRhc2suZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgfVxuICBpZiAoZHVlRGF0ZSkge1xuICAgIHRhc2suZHVlRGF0ZSA9IGR1ZURhdGU7XG4gIH1cbiAgaWYgKHByaW9yaXR5KSB7XG4gICAgdGFzay5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB9XG4gIHByaW50VGFza3MocHJvamVjdEluZGV4KTtcbn07XG5cbnVwZGF0ZVRhc2soMCwgMCwgeyB0aXRsZTogXCJDaG9wIHRoZSBtYW5nb3NcIiwgcHJpb3JpdHk6IFwiaW1wb3J0YW50XCIgfSk7XG5cbmNvbnN0IHJlbW92ZVRhc2sgPSAocHJvamVjdEluZGV4LCB0YXNrSW5kZXgpID0+IHtcbiAgcHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrcy5zcGxpY2UodGFza0luZGV4LCAxKTtcbiAgcHJpbnRUYXNrcyhwcm9qZWN0SW5kZXgpO1xufTtcblxuY29uc3QgdHJhbnNmZXJUYXNrID0gKHByb2plY3RJbmRleEEsIHByb2plY3RJbmRleEIsIHRhc2tJbmRleCkgPT4ge1xuICBsZXQgdGFzayA9IHByb2plY3RzW3Byb2plY3RJbmRleEFdLnRhc2tzLnNwbGljZSh0YXNrSW5kZXgsIDEpWzBdO1xuICBhZGRUYXNrKHByb2plY3RJbmRleEIsIHsgdGFzayB9KTtcbiAgcHJpbnRQcm9qZWN0cygpO1xufTtcblxuY29uc3QgbW92ZVRhc2sgPSAocHJvamVjdEluZGV4LCBwb3NpdGlvbkEsIHBvc2l0aW9uQikgPT4ge1xuICBsZXQgdGFzayA9IHByb2plY3RzW3Byb2plY3RJbmRleF0udGFza3Muc3BsaWNlKHBvc2l0aW9uQSwgMSlbMF07XG4gIHByb2plY3RzW3Byb2plY3RJbmRleF0udGFza3Muc3BsaWNlKHBvc2l0aW9uQiwgMCwgdGFzayk7XG4gIHByaW50VGFza3MocHJvamVjdEluZGV4KTtcbn07XG5cbmFkZFRhc2soMCwge1xuICB0aXRsZTogXCJDYXIgcHJvamVjdC5cIixcbiAgZGVzY3JpcHRpb246IFwiQ3VzdG9taXplIGEgSG90d2hlZWxzIGNhci5cIixcbn0pO1xubW92ZVRhc2soMCwgMSwgMCk7XG5tb3ZlVGFzaygwLCAxLCAyKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==