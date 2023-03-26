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


const welcomeProject = {
  title: "To-do app",
  description: "A place to store all of your tasks",
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

const projects = [welcomeProject, demoProject1, demoProject2];

const printProjects = () => {
  console.log("Project List");
  let index = 0;
  projects.forEach((project) => {
    console.log(index, JSON.parse(JSON.stringify(project)));
    index++;
  });
};

const moveProject = (positionA, positionB) => {
  let objectA = projects.splice(positionA, 1)[0];
  projects.splice(positionB, 0, objectA);
  console.log("The projects have been reordered.");
  printProjects();
};

const removeProject = (index) => {
  let title = projects[index].title;
  projects.splice(index, 1);
  console.log(`Project "${title}" has been removed.`);
  printProjects();
};

const makeProject = ({ title = "", description = "" }) => {
  projects.push({ title, description, tasks: [] });
  console.log("A new project has been made.");
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
  console.log("A task has been added to the list");
  printTasks(projectIndex);
};

const updateProject = (index, { title, description }) => {
  if (title) {
    projects[index].title = title;
  }
  if (description) {
    projects[index].description = description;
  }
  console.log(`The project at ${index} has been updated.`);
  printProjects();
};

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
  console.log(`The task at ${taskIndex} has been updated.`);
  printTasks(projectIndex);
};

const removeTask = (projectIndex, taskIndex) => {
  let title = projects[projectIndex].tasks[taskIndex].title;
  projects[projectIndex].tasks.splice(taskIndex, 1);
  console.log(`The task "${title}" has been removed.`);
  printTasks(projectIndex);
};

const transferTask = (projectIndexA, projectIndexB, taskIndex) => {
  let task = projects[projectIndexA].tasks.splice(taskIndex, 1)[0];
  addTask(projectIndexB, { task });
  console.log(`Task ${task.title} has been transfered.`);
  printTasks(projectIndexB);
};

const moveTask = (projectIndex, positionA, positionB) => {
  let task = projects[projectIndex].tasks.splice(positionA, 1)[0];
  projects[projectIndex].tasks.splice(positionB, 0, task);
  printTasks(projectIndex);
};

printProjects();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG8tZG8tYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ044Qjs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixNQUFNO0FBQ2hDO0FBQ0E7O0FBRUEsdUJBQXVCLDhCQUE4QjtBQUNyRCxrQkFBa0IsK0JBQStCO0FBQ2pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixNQUFNO0FBQ2pDO0FBQ0E7QUFDQSwyQkFBMkIsTUFBTTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsYUFBYSxLQUFLLE9BQU87QUFDcEQ7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQ0FBZ0Msb0JBQW9CO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxPQUFPO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsV0FBVztBQUN4QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixNQUFNO0FBQ2pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJCQUEyQixNQUFNO0FBQ2pDLHNCQUFzQixZQUFZO0FBQ2xDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsZS9kZWZhdWx0LmNzcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2dyYW0vdG8tZG8uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4uL3N0eWxlL2RlZmF1bHQuY3NzXCI7XG5cbmNvbnN0IHdlbGNvbWVQcm9qZWN0ID0ge1xuICB0aXRsZTogXCJUby1kbyBhcHBcIixcbiAgZGVzY3JpcHRpb246IFwiQSBwbGFjZSB0byBzdG9yZSBhbGwgb2YgeW91ciB0YXNrc1wiLFxuICB0YXNrczogW10sXG59O1xuXG5jb25zdCBkZW1vUHJvamVjdDEgPSB7XG4gIHRpdGxlOiBcIkV4ZXJjaXNlIHNvbHV0aW9ucy5cIixcbiAgZGVzY3JpcHRpb246XG4gICAgXCJGaWd1cmUgb3V0IGFuIG9wdGltYWwgZXhlcmNpc2Ugc2V0dXAgZm9yIGVhY2ggbWFqb3IgbXVzY2xlIGdyb3VwLlwiLFxuICB0YXNrczogW10sXG59O1xuXG5jb25zdCBkZW1vUHJvamVjdDIgPSB7XG4gIHRpdGxlOiBcIjI1MCBib3ggY2hhbGxlbmdlXCIsXG4gIGRlc2NyaXB0aW9uOiAnXCJkcmF3IGEgYm94IC0gdGhlbiBkbyBpdCBhZ2FpbiBhbm90aGVyIDI0OSB0aW1lcy5cIicsXG4gIHRhc2tzOiBbXSxcbn07XG5cbmNvbnN0IHByb2plY3RzID0gW3dlbGNvbWVQcm9qZWN0LCBkZW1vUHJvamVjdDEsIGRlbW9Qcm9qZWN0Ml07XG5cbmNvbnN0IHByaW50UHJvamVjdHMgPSAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKFwiUHJvamVjdCBMaXN0XCIpO1xuICBsZXQgaW5kZXggPSAwO1xuICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgY29uc29sZS5sb2coaW5kZXgsIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocHJvamVjdCkpKTtcbiAgICBpbmRleCsrO1xuICB9KTtcbn07XG5cbmNvbnN0IG1vdmVQcm9qZWN0ID0gKHBvc2l0aW9uQSwgcG9zaXRpb25CKSA9PiB7XG4gIGxldCBvYmplY3RBID0gcHJvamVjdHMuc3BsaWNlKHBvc2l0aW9uQSwgMSlbMF07XG4gIHByb2plY3RzLnNwbGljZShwb3NpdGlvbkIsIDAsIG9iamVjdEEpO1xuICBjb25zb2xlLmxvZyhcIlRoZSBwcm9qZWN0cyBoYXZlIGJlZW4gcmVvcmRlcmVkLlwiKTtcbiAgcHJpbnRQcm9qZWN0cygpO1xufTtcblxuY29uc3QgcmVtb3ZlUHJvamVjdCA9IChpbmRleCkgPT4ge1xuICBsZXQgdGl0bGUgPSBwcm9qZWN0c1tpbmRleF0udGl0bGU7XG4gIHByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XG4gIGNvbnNvbGUubG9nKGBQcm9qZWN0IFwiJHt0aXRsZX1cIiBoYXMgYmVlbiByZW1vdmVkLmApO1xuICBwcmludFByb2plY3RzKCk7XG59O1xuXG5jb25zdCBtYWtlUHJvamVjdCA9ICh7IHRpdGxlID0gXCJcIiwgZGVzY3JpcHRpb24gPSBcIlwiIH0pID0+IHtcbiAgcHJvamVjdHMucHVzaCh7IHRpdGxlLCBkZXNjcmlwdGlvbiwgdGFza3M6IFtdIH0pO1xuICBjb25zb2xlLmxvZyhcIkEgbmV3IHByb2plY3QgaGFzIGJlZW4gbWFkZS5cIik7XG4gIHByaW50UHJvamVjdHMoKTtcbn07XG5cbmNvbnN0IHRhc2tGYWN0b3J5ID0gKHtcbiAgdGl0bGUgPSBcIlwiLFxuICBkZXNjcmlwdGlvbiA9IFwiXCIsXG4gIGR1ZURhdGUgPSBcIlwiLFxuICBwcmlvcml0eSA9IFwiXCIsXG59KSA9PiB7XG4gIGxldCB0YXNrU3RhdHVzID0gZmFsc2U7XG4gIGNvbnN0IGNoZWNrQ29tcGxldGlvblN0YXR1cyA9ICgpID0+IHtcbiAgICBpZiAodGFza1N0YXR1cykge1xuICAgICAgY29uc29sZS5sb2coYFRhc2sgXCIke3RpdGxlfVwiIGhhcyBiZWVuIGNvbXBsZXRlZC4gOkRgKTtcbiAgICB9XG4gICAgaWYgKCF0YXNrU3RhdHVzKSB7XG4gICAgICBjb25zb2xlLmxvZyhgVGFzayBcIiR7dGl0bGV9XCIgaGFzIG5vdCBiZWVuIGNvbXBsZXRlZC4gOi9gKTtcbiAgICB9XG4gICAgcmV0dXJuIHRhc2tTdGF0dXM7XG4gIH07XG4gIGNvbnN0IGNoYW5nZUNvbXBsZXRpb25TdGF0dXMgPSAoKSA9PiB7XG4gICAgdGFza1N0YXR1cyA9IHRhc2tTdGF0dXMgPyBmYWxzZSA6IHRydWU7XG4gIH07XG4gIHJldHVybiB7XG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZHVlRGF0ZSxcbiAgICBwcmlvcml0eSxcbiAgICBjaGVja0NvbXBsZXRpb25TdGF0dXMsXG4gICAgY2hhbmdlQ29tcGxldGlvblN0YXR1cyxcbiAgfTtcbn07XG5cbmNvbnN0IHByaW50VGFza3MgPSAocHJvamVjdEluZGV4KSA9PiB7XG4gIGxldCBpbmRleCA9IDA7XG4gIGxldCBwcm9qZWN0VGl0bGUgPSBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRpdGxlO1xuICBsZXQgbGVuZ3RoID0gcHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrcy5sZW5ndGg7XG4gIGNvbnNvbGUubG9nKGBUYXNrcyBpbiBcIiR7cHJvamVjdFRpdGxlfVwiOiAke2xlbmd0aH1gKTtcbiAgcHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgY29uc29sZS5sb2coaW5kZXgsIHRhc2spO1xuICAgIGluZGV4Kys7XG4gIH0pO1xufTtcblxuY29uc3QgYWRkVGFzayA9IChwcm9qZWN0SW5kZXgsIHRhc2sgPSB7fSkgPT4ge1xuICBpZiAocHJvamVjdEluZGV4ID4gcHJvamVjdHMubGVuZ3RoIC0gMSB8fCBwcm9qZWN0SW5kZXggPCAwKSB7XG4gICAgcmV0dXJuIGNvbnNvbGUubG9nKEVycm9yKFwiTm8gcHJvamVjdCB3YXMgc3BlY2lmaWVkLlwiKSk7XG4gIH1cbiAgcHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrcy5wdXNoKHRhc2tGYWN0b3J5KHRhc2spKTtcbiAgY29uc29sZS5sb2coXCJBIHRhc2sgaGFzIGJlZW4gYWRkZWQgdG8gdGhlIGxpc3RcIik7XG4gIHByaW50VGFza3MocHJvamVjdEluZGV4KTtcbn07XG5cbmNvbnN0IHVwZGF0ZVByb2plY3QgPSAoaW5kZXgsIHsgdGl0bGUsIGRlc2NyaXB0aW9uIH0pID0+IHtcbiAgaWYgKHRpdGxlKSB7XG4gICAgcHJvamVjdHNbaW5kZXhdLnRpdGxlID0gdGl0bGU7XG4gIH1cbiAgaWYgKGRlc2NyaXB0aW9uKSB7XG4gICAgcHJvamVjdHNbaW5kZXhdLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIH1cbiAgY29uc29sZS5sb2coYFRoZSBwcm9qZWN0IGF0ICR7aW5kZXh9IGhhcyBiZWVuIHVwZGF0ZWQuYCk7XG4gIHByaW50UHJvamVjdHMoKTtcbn07XG5cbmNvbnN0IHVwZGF0ZVRhc2sgPSAoXG4gIHByb2plY3RJbmRleCxcbiAgdGFza0luZGV4LFxuICB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkgfVxuKSA9PiB7XG4gIGxldCB0YXNrID0gcHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrc1t0YXNrSW5kZXhdO1xuICBpZiAodGl0bGUpIHtcbiAgICB0YXNrLnRpdGxlID0gdGl0bGU7XG4gIH1cbiAgaWYgKGRlc2NyaXB0aW9uKSB7XG4gICAgdGFzay5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICB9XG4gIGlmIChkdWVEYXRlKSB7XG4gICAgdGFzay5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgfVxuICBpZiAocHJpb3JpdHkpIHtcbiAgICB0YXNrLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIH1cbiAgY29uc29sZS5sb2coYFRoZSB0YXNrIGF0ICR7dGFza0luZGV4fSBoYXMgYmVlbiB1cGRhdGVkLmApO1xuICBwcmludFRhc2tzKHByb2plY3RJbmRleCk7XG59O1xuXG5jb25zdCByZW1vdmVUYXNrID0gKHByb2plY3RJbmRleCwgdGFza0luZGV4KSA9PiB7XG4gIGxldCB0aXRsZSA9IHByb2plY3RzW3Byb2plY3RJbmRleF0udGFza3NbdGFza0luZGV4XS50aXRsZTtcbiAgcHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrcy5zcGxpY2UodGFza0luZGV4LCAxKTtcbiAgY29uc29sZS5sb2coYFRoZSB0YXNrIFwiJHt0aXRsZX1cIiBoYXMgYmVlbiByZW1vdmVkLmApO1xuICBwcmludFRhc2tzKHByb2plY3RJbmRleCk7XG59O1xuXG5jb25zdCB0cmFuc2ZlclRhc2sgPSAocHJvamVjdEluZGV4QSwgcHJvamVjdEluZGV4QiwgdGFza0luZGV4KSA9PiB7XG4gIGxldCB0YXNrID0gcHJvamVjdHNbcHJvamVjdEluZGV4QV0udGFza3Muc3BsaWNlKHRhc2tJbmRleCwgMSlbMF07XG4gIGFkZFRhc2socHJvamVjdEluZGV4QiwgeyB0YXNrIH0pO1xuICBjb25zb2xlLmxvZyhgVGFzayAke3Rhc2sudGl0bGV9IGhhcyBiZWVuIHRyYW5zZmVyZWQuYCk7XG4gIHByaW50VGFza3MocHJvamVjdEluZGV4Qik7XG59O1xuXG5jb25zdCBtb3ZlVGFzayA9IChwcm9qZWN0SW5kZXgsIHBvc2l0aW9uQSwgcG9zaXRpb25CKSA9PiB7XG4gIGxldCB0YXNrID0gcHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrcy5zcGxpY2UocG9zaXRpb25BLCAxKVswXTtcbiAgcHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrcy5zcGxpY2UocG9zaXRpb25CLCAwLCB0YXNrKTtcbiAgcHJpbnRUYXNrcyhwcm9qZWN0SW5kZXgpO1xufTtcblxucHJpbnRQcm9qZWN0cygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9