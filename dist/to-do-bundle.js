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
  let projectTitle = projects[projectIndex].title;
  let length = projects[projectIndex].tasks.length;
  console.log(`Tasks in "${projectTitle}": ${length}`);
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

const transferTask = (projectIndexA, projectIndexB, taskIndex) => {
  let task = projects[projectIndexA].tasks.splice(taskIndex, 1)[0];
  addTask(projectIndexB, { task });
  printProjects();
};

transferTask(0, 2, 0);
printTasks(0);
transferTask(2, 0, 0);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG8tZG8tYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ044Qjs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsdUJBQXVCLDhCQUE4QjtBQUNyRCxrQkFBa0IsK0JBQStCO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsTUFBTTtBQUNqQztBQUNBO0FBQ0EsMkJBQTJCLE1BQU07QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUEsZ0NBQWdDLG9CQUFvQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGFBQWEsS0FBSyxPQUFPO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLGlEQUFpRDs7QUFFcEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJCQUEyQixNQUFNO0FBQ2pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlL2RlZmF1bHQuY3NzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvZ3JhbS90by1kby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi4vc3R5bGUvZGVmYXVsdC5jc3NcIjtcblxuY29uc3QgZW1wdHlQcm9qZWN0ID0ge1xuICB0aXRsZTogXCJcIixcbiAgZGVzY3JpcHRpb246IFwiXCIsXG4gIHRhc2tzOiBbXSxcbn07XG5cbmNvbnN0IGRlbW9Qcm9qZWN0MSA9IHtcbiAgdGl0bGU6IFwiRXhlcmNpc2Ugc29sdXRpb25zLlwiLFxuICBkZXNjcmlwdGlvbjpcbiAgICBcIkZpZ3VyZSBvdXQgYW4gb3B0aW1hbCBleGVyY2lzZSBzZXR1cCBmb3IgZWFjaCBtYWpvciBtdXNjbGUgZ3JvdXAuXCIsXG4gIHRhc2tzOiBbXSxcbn07XG5cbmNvbnN0IGRlbW9Qcm9qZWN0MiA9IHtcbiAgdGl0bGU6IFwiMjUwIGJveCBjaGFsbGVuZ2VcIixcbiAgZGVzY3JpcHRpb246ICdcImRyYXcgYSBib3ggLSB0aGVuIGRvIGl0IGFnYWluIGFub3RoZXIgMjQ5IHRpbWVzLlwiJyxcbiAgdGFza3M6IFtdLFxufTtcblxuY29uc3QgZGVtb1Byb2plY3QzID0ge1xuICB0aXRsZTogXCJUby1kbyBhcHBcIixcbiAgZGVzY3JpcHRpb246IFwiQSBwbGFjZSB0byBzdG9yZSBhbGwgb2YgeW91ciB0YXNrcy5cIixcbiAgdGFza3M6IFtdLFxufTtcblxuY29uc3QgcHJvamVjdHMgPSBbZW1wdHlQcm9qZWN0LCBkZW1vUHJvamVjdDEsIGRlbW9Qcm9qZWN0MiwgZGVtb1Byb2plY3QzXTtcblxuY29uc3QgcHJpbnRQcm9qZWN0cyA9ICgpID0+IHtcbiAgY29uc29sZS5sb2coXCJQcm9qZWN0IExpc3RcIik7XG4gIGxldCBpbmRleCA9IDA7XG4gIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBjb25zb2xlLmxvZyhpbmRleCwgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShwcm9qZWN0KSkpO1xuICAgIGluZGV4Kys7XG4gIH0pO1xufTtcblxucHJpbnRQcm9qZWN0cygpO1xuXG5jb25zdCBtb3ZlUHJvamVjdCA9IChwb3NpdGlvbkEsIHBvc2l0aW9uQikgPT4ge1xuICBsZXQgb2JqZWN0QSA9IHByb2plY3RzLnNwbGljZShwb3NpdGlvbkEsIDEpWzBdO1xuICBwcm9qZWN0cy5zcGxpY2UocG9zaXRpb25CLCAwLCBvYmplY3RBKTtcbiAgcHJpbnRQcm9qZWN0cygpO1xufTtcblxucHJvamVjdHNbMF0udGl0bGUgPSBcIk90aGVyIFRhc2tzXCI7XG5tb3ZlUHJvamVjdCgzLCAwKTtcblxuY29uc3QgcmVtb3ZlUHJvamVjdCA9IChpbmRleCkgPT4ge1xuICBwcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICBwcmludFByb2plY3RzKCk7XG59O1xuXG5yZW1vdmVQcm9qZWN0KDEpO1xuXG5jb25zdCBtYWtlUHJvamVjdCA9ICh7IHRpdGxlID0gXCJcIiwgZGVzY3JpcHRpb24gPSBcIlwiIH0pID0+IHtcbiAgcHJvamVjdHMucHVzaCh7IHRpdGxlLCBkZXNjcmlwdGlvbiwgdGFza3M6IFtdIH0pO1xuICBwcmludFByb2plY3RzKCk7XG59O1xuXG5jb25zdCB0YXNrRmFjdG9yeSA9ICh7XG4gIHRpdGxlID0gXCJcIixcbiAgZGVzY3JpcHRpb24gPSBcIlwiLFxuICBkdWVEYXRlID0gXCJcIixcbiAgcHJpb3JpdHkgPSBcIlwiLFxufSkgPT4ge1xuICBsZXQgdGFza1N0YXR1cyA9IGZhbHNlO1xuICBjb25zdCBjaGVja0NvbXBsZXRpb25TdGF0dXMgPSAoKSA9PiB7XG4gICAgaWYgKHRhc2tTdGF0dXMpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBUYXNrIFwiJHt0aXRsZX1cIiBoYXMgYmVlbiBjb21wbGV0ZWQuIDpEYCk7XG4gICAgfVxuICAgIGlmICghdGFza1N0YXR1cykge1xuICAgICAgY29uc29sZS5sb2coYFRhc2sgXCIke3RpdGxlfVwiIGhhcyBub3QgYmVlbiBjb21wbGV0ZWQuIDovYCk7XG4gICAgfVxuICAgIHJldHVybiB0YXNrU3RhdHVzO1xuICB9O1xuICBjb25zdCBjaGFuZ2VDb21wbGV0aW9uU3RhdHVzID0gKCkgPT4ge1xuICAgIHRhc2tTdGF0dXMgPSB0YXNrU3RhdHVzID8gZmFsc2UgOiB0cnVlO1xuICB9O1xuICByZXR1cm4ge1xuICAgIHRpdGxlLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGR1ZURhdGUsXG4gICAgcHJpb3JpdHksXG4gICAgY2hlY2tDb21wbGV0aW9uU3RhdHVzLFxuICAgIGNoYW5nZUNvbXBsZXRpb25TdGF0dXMsXG4gIH07XG59O1xuXG5jb25zdCBhZGRUYXNrID0gKHByb2plY3RJbmRleCwgdGFzayA9IHt9KSA9PiB7XG4gIGlmIChwcm9qZWN0SW5kZXggPiBwcm9qZWN0cy5sZW5ndGggLSAxIHx8IHByb2plY3RJbmRleCA8IDApIHtcbiAgICByZXR1cm4gY29uc29sZS5sb2coRXJyb3IoXCJObyBwcm9qZWN0IHdhcyBzcGVjaWZpZWQuXCIpKTtcbiAgfVxuICBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRhc2tzLnB1c2godGFza0ZhY3RvcnkodGFzaykpO1xuICBwcmludFByb2plY3RzKCk7XG59O1xuXG5hZGRUYXNrKDApO1xuXG5hZGRUYXNrKDAsIHtcbiAgdGl0bGU6IFwiY2xpbWIgdGhlIHN0YWlyc1wiLFxuICBkZXNjcmlwdGlvbjogXCJHZXQgdGhvc2UgZ2x1dGVzIHdvcmtpbmchXCIsXG59KTtcblxucHJvamVjdHNbMF0udGFza3NbMV0uY2hlY2tDb21wbGV0aW9uU3RhdHVzKCk7XG5wcm9qZWN0c1swXS50YXNrc1sxXS5jaGFuZ2VDb21wbGV0aW9uU3RhdHVzKCk7XG5wcm9qZWN0c1swXS50YXNrc1sxXS5jaGVja0NvbXBsZXRpb25TdGF0dXMoKTtcblxuY29uc3QgdXBkYXRlUHJvamVjdCA9IChpbmRleCwgeyB0aXRsZSwgZGVzY3JpcHRpb24gfSkgPT4ge1xuICBpZiAodGl0bGUpIHtcbiAgICBwcm9qZWN0c1tpbmRleF0udGl0bGUgPSB0aXRsZTtcbiAgfVxuICBpZiAoZGVzY3JpcHRpb24pIHtcbiAgICBwcm9qZWN0c1tpbmRleF0uZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgfVxuICBwcmludFByb2plY3RzKCk7XG59O1xuXG5jb25zdCBwcmludFRhc2tzID0gKHByb2plY3RJbmRleCkgPT4ge1xuICBsZXQgaW5kZXggPSAwO1xuICBsZXQgcHJvamVjdFRpdGxlID0gcHJvamVjdHNbcHJvamVjdEluZGV4XS50aXRsZTtcbiAgbGV0IGxlbmd0aCA9IHByb2plY3RzW3Byb2plY3RJbmRleF0udGFza3MubGVuZ3RoO1xuICBjb25zb2xlLmxvZyhgVGFza3MgaW4gXCIke3Byb2plY3RUaXRsZX1cIjogJHtsZW5ndGh9YCk7XG4gIHByb2plY3RzW3Byb2plY3RJbmRleF0udGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGNvbnNvbGUubG9nKGluZGV4LCB0YXNrKTtcbiAgICBpbmRleCsrO1xuICB9KTtcbn07XG5cbnByaW50VGFza3MoMCk7XG5cbmNvbnN0IHVwZGF0ZVRhc2sgPSAoXG4gIHByb2plY3RJbmRleCxcbiAgdGFza0luZGV4LFxuICB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkgfVxuKSA9PiB7XG4gIGxldCB0YXNrID0gcHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrc1t0YXNrSW5kZXhdO1xuICBpZiAodGl0bGUpIHtcbiAgICB0YXNrLnRpdGxlID0gdGl0bGU7XG4gIH1cbiAgaWYgKGRlc2NyaXB0aW9uKSB7XG4gICAgdGFzay5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICB9XG4gIGlmIChkdWVEYXRlKSB7XG4gICAgdGFzay5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgfVxuICBpZiAocHJpb3JpdHkpIHtcbiAgICB0YXNrLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIH1cbiAgcHJpbnRUYXNrcyhwcm9qZWN0SW5kZXgpO1xufTtcblxudXBkYXRlVGFzaygwLCAwLCB7IHRpdGxlOiBcIkNob3AgdGhlIG1hbmdvc1wiLCBwcmlvcml0eTogXCJpbXBvcnRhbnRcIiB9KTtcblxuY29uc3QgcmVtb3ZlVGFzayA9IChwcm9qZWN0SW5kZXgsIHRhc2tJbmRleCkgPT4ge1xuICBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRhc2tzLnNwbGljZSh0YXNrSW5kZXgsIDEpO1xuICBwcmludFRhc2tzKHByb2plY3RJbmRleCk7XG59O1xuXG5jb25zdCB0cmFuc2ZlclRhc2sgPSAocHJvamVjdEluZGV4QSwgcHJvamVjdEluZGV4QiwgdGFza0luZGV4KSA9PiB7XG4gIGxldCB0YXNrID0gcHJvamVjdHNbcHJvamVjdEluZGV4QV0udGFza3Muc3BsaWNlKHRhc2tJbmRleCwgMSlbMF07XG4gIGFkZFRhc2socHJvamVjdEluZGV4QiwgeyB0YXNrIH0pO1xuICBwcmludFByb2plY3RzKCk7XG59O1xuXG50cmFuc2ZlclRhc2soMCwgMiwgMCk7XG5wcmludFRhc2tzKDApO1xudHJhbnNmZXJUYXNrKDIsIDAsIDApO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9