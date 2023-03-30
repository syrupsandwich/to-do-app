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
/* harmony export */   "makeCategory": () => (/* binding */ makeCategory),
/* harmony export */   "printCategories": () => (/* binding */ printCategories),
/* harmony export */   "transferProject": () => (/* binding */ transferProject)
/* harmony export */ });
const categoryFactory = (title) => {
  const setTitle = (input) => {
    if (typeof input !== "string") {
      return console.log(Error("The specified title is not a string."));
    } else {
      title = input;
    }
  };

  const getTitle = () => {
    return title;
  };

  const projects = [];

  const printProjects = (message) => {
    if (projects.length === 0) {
      return console.log(Error(`There are no projects in ${title} category.`));
    }
    if (!message) {
      console.log(`A list of all projects in "${title}" category:`);
    } else {
      console.log(`${message} (${title} category)`);
    }
    projects.forEach((project, index) => {
      console.log(" ", index, JSON.parse(JSON.stringify(project)));
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

  const makeProject = ({ title = "", description = "", tasks = [] }) => {
    const printTasks = (context = true) => {
      if (tasks.length === 0) {
        return Error(`There are no tasks in "${title}".`);
      } else if (context) {
        console.log(`Tasks in "${title}":`);
      }
      tasks.forEach((task, index) => {
        console.log(" ", index, task);
      });
    };
    projects.push({ title, description, tasks, printTasks });
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

  const printTaskUpdate = (projectIndex, message) => {
    if (!message) {
      console.log(`Tasks in ${projects[projectIndex].title}.`);
    } else {
      console.log(`${message} (${title} category)`);
    }
    projects[projectIndex].printTasks(false);
  };

  const addTask = (projectIndex, task = {}) => {
    if (!projects[projectIndex]) {
      return console.log(Error("The specified index is out of range."));
    }
    projects[projectIndex].tasks.push(taskFactory(task));
    printTaskUpdate(
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
    printTaskUpdate(projectIndex, `The task at ${taskIndex} has been updated.`);
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
    printTaskUpdate(projectIndex, `The task "${title}" has been removed.`);
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
    printTaskUpdate(projectIndexB, `Task ${task.title} has been transfered.`);
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
    printTaskUpdate(projectIndex, "The task list has been reordered");
  };

  return {
    setTitle,
    getTitle,
    projects,
    printProjects,
    moveProject,
    removeProject,
    makeProject,
    addTask,
    updateProject,
    updateTask,
    removeTask,
    transferTask,
    moveTask,
  };
};

const categories = [];

const makeCategory = (title) => {
  let project = categoryFactory(title);
  categories.push(project);
  return categories[categories.length - 1];
};

const printCategories = (message) => {
  if (!message) {
    console.log("A list of all categories:");
  } else {
    console.log("message");
  }
  categories.forEach((category, index) => {
    console.log(
      " ",
      `${index}:`,
      category.getTitle(),
      `(${category.projects.length} projects)`
    );
  });
};

const transferProject = (categoryIndexA, categoryIndexB, projectIndex) => {
  if (!categories[categoryIndexA]) {
    return console.log(Error("The specified origin index is out of range."));
  }
  if (!categories[categoryIndexB]) {
    return console.log(
      Error("The specified destination index is out of range.")
    );
  }
  let project = categories[categoryIndexA].projects.splice(projectIndex, 1)[0];
  categories[categoryIndexB].projects.push(project);
  categories[categoryIndexB].printProjects(`The project has been added.`);
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



const demo1 = (0,_to_do_js__WEBPACK_IMPORTED_MODULE_1__.makeCategory)("Demo");

demo1.makeProject({
  title: "To-do app",
  description: "A place to store all of your tasks",
  tasks: [],
});

demo1.addTask(0, {
  title: "Look around",
  description: "Get to know the app.",
});

demo1.makeProject({
  title: "Exercise solutions",
  description: "Figure out an optimal setup for each major muscle group.",
  tasks: [],
});

demo1.addTask(1, {
  title: "Buy pulleys",
  description: "For exercises that require an upward dirction of resistance.",
});

demo1.addTask(1, {
  title: "Get weight plates",
  description: "A minimalistic set that allows increments of 5lb.",
});

demo1.addTask(1, {
  title: "Find supplies",
  description: "Things like rope, webbing, caribiners, chains, foam... ",
});

demo1.addTask(1, {
  title: "Make some equipment",
  description: "Ask mom to sew together my inventions",
});

demo1.makeProject({
  title: "250 box challenge",
  description: '"...draw a box - then do it again another 249 times."',
  tasks: [],
});

demo1.addTask(2, {
  title: "Find drawing supplies",
  description: "a large stack of priter paper and a .5 pen.",
});

demo1.addTask(2, {
  title: "draw 5 boxes on a page",
  description: "5 leaves enough room to check the convergences",
});

demo1.addTask(2, {
  title: "50% rule",
  description:
    "Draw whatever you want for the same amount of time spent practicing.",
});

demo1.printProjects();

const work = (0,_to_do_js__WEBPACK_IMPORTED_MODULE_1__.makeCategory)("Work");

work.makeProject({
  title: "Block World",
  description: "an original sandbox game where everything is blocky",
});

(0,_to_do_js__WEBPACK_IMPORTED_MODULE_1__.printCategories)();

(0,_to_do_js__WEBPACK_IMPORTED_MODULE_1__.transferProject)(0, 1, 0);
(0,_to_do_js__WEBPACK_IMPORTED_MODULE_1__.printCategories)();

demo1.projects[0].printTasks();
demo1.printProjects();
demo1.transferTask(0, 1, 0);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG8tZG8tYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsMkRBQTJELE9BQU87QUFDbEU7QUFDQTtBQUNBLGdEQUFnRCxNQUFNO0FBQ3RELE1BQU07QUFDTixxQkFBcUIsU0FBUyxHQUFHLE9BQU87QUFDeEM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixNQUFNO0FBQ3BDOztBQUVBLHlCQUF5QiwwQ0FBMEM7QUFDbkU7QUFDQTtBQUNBLCtDQUErQyxNQUFNO0FBQ3JELFFBQVE7QUFDUixpQ0FBaUMsTUFBTTtBQUN2QztBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxvQkFBb0IsdUNBQXVDO0FBQzNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsTUFBTTtBQUNuQztBQUNBO0FBQ0EsNkJBQTZCLE1BQU07QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEIsNkJBQTZCO0FBQzNELE1BQU07QUFDTixxQkFBcUIsU0FBUyxHQUFHLE9BQU87QUFDeEM7QUFDQTtBQUNBOztBQUVBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsNkJBQTZCO0FBQ3hFO0FBQ0E7O0FBRUEsa0NBQWtDLG9CQUFvQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsT0FBTztBQUMzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxXQUFXO0FBQzVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxNQUFNO0FBQ3JEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsWUFBWTtBQUN2RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsTUFBTTtBQUNmO0FBQ0EsVUFBVSwwQkFBMEI7QUFDcEM7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTBEOzs7Ozs7O1VDblExRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ044QjtBQUM4Qzs7QUFFNUUsY0FBYyx1REFBWTs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUEsYUFBYSx1REFBWTs7QUFFekI7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCwwREFBZTs7QUFFZiwwREFBZTtBQUNmLDBEQUFlOztBQUVmO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsZS9kZWZhdWx0LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvZ3JhbS90by1kby5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvZ3JhbS9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImNvbnN0IGNhdGVnb3J5RmFjdG9yeSA9ICh0aXRsZSkgPT4ge1xuICBjb25zdCBzZXRUaXRsZSA9IChpbnB1dCkgPT4ge1xuICAgIGlmICh0eXBlb2YgaW5wdXQgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZyhFcnJvcihcIlRoZSBzcGVjaWZpZWQgdGl0bGUgaXMgbm90IGEgc3RyaW5nLlwiKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpdGxlID0gaW5wdXQ7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGdldFRpdGxlID0gKCkgPT4ge1xuICAgIHJldHVybiB0aXRsZTtcbiAgfTtcblxuICBjb25zdCBwcm9qZWN0cyA9IFtdO1xuXG4gIGNvbnN0IHByaW50UHJvamVjdHMgPSAobWVzc2FnZSkgPT4ge1xuICAgIGlmIChwcm9qZWN0cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZyhFcnJvcihgVGhlcmUgYXJlIG5vIHByb2plY3RzIGluICR7dGl0bGV9IGNhdGVnb3J5LmApKTtcbiAgICB9XG4gICAgaWYgKCFtZXNzYWdlKSB7XG4gICAgICBjb25zb2xlLmxvZyhgQSBsaXN0IG9mIGFsbCBwcm9qZWN0cyBpbiBcIiR7dGl0bGV9XCIgY2F0ZWdvcnk6YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKGAke21lc3NhZ2V9ICgke3RpdGxlfSBjYXRlZ29yeSlgKTtcbiAgICB9XG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiIFwiLCBpbmRleCwgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShwcm9qZWN0KSkpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IG1vdmVQcm9qZWN0ID0gKHBvc2l0aW9uQSwgcG9zaXRpb25CKSA9PiB7XG4gICAgaWYgKCFwcm9qZWN0c1twb3NpdGlvbkFdKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5sb2coRXJyb3IoXCJUaGUgc3BlY2lmaWVkIG9yaWdpbiBpbmRleCBpcyBvdXQgb2YgcmFuZ2UuXCIpKTtcbiAgICB9XG4gICAgaWYgKCFwcm9qZWN0c1twb3NpdGlvbkJdKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5sb2coXG4gICAgICAgIEVycm9yKFwiVGhlIHNwZWNpZmllZCBkZXN0aW5hdGlvbiBpbmRleCBpcyBvdXQgb2YgcmFuZ2UuXCIpXG4gICAgICApO1xuICAgIH1cbiAgICBsZXQgb2JqZWN0QSA9IHByb2plY3RzLnNwbGljZShwb3NpdGlvbkEsIDEpWzBdO1xuICAgIHByb2plY3RzLnNwbGljZShwb3NpdGlvbkIsIDAsIG9iamVjdEEpO1xuICAgIHByaW50UHJvamVjdHMoXCJUaGUgcHJvamVjdHMgaGF2ZSBiZWVuIHJlb3JkZXJlZC5cIik7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChpbmRleCkgPT4ge1xuICAgIGlmICghcHJvamVjdHNbaW5kZXhdKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5sb2coRXJyb3IoXCJUaGUgc3BlY2lmaWVkIGluZGV4IGlzIG91dCBvZiByYW5nZS5cIikpO1xuICAgIH1cbiAgICBsZXQgdGl0bGUgPSBwcm9qZWN0c1tpbmRleF0udGl0bGU7XG4gICAgcHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICBwcmludFByb2plY3RzKGBQcm9qZWN0IFwiJHt0aXRsZX1cIiBoYXMgYmVlbiByZW1vdmVkLmApO1xuICB9O1xuXG4gIGNvbnN0IG1ha2VQcm9qZWN0ID0gKHsgdGl0bGUgPSBcIlwiLCBkZXNjcmlwdGlvbiA9IFwiXCIsIHRhc2tzID0gW10gfSkgPT4ge1xuICAgIGNvbnN0IHByaW50VGFza3MgPSAoY29udGV4dCA9IHRydWUpID0+IHtcbiAgICAgIGlmICh0YXNrcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIEVycm9yKGBUaGVyZSBhcmUgbm8gdGFza3MgaW4gXCIke3RpdGxlfVwiLmApO1xuICAgICAgfSBlbHNlIGlmIChjb250ZXh0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBUYXNrcyBpbiBcIiR7dGl0bGV9XCI6YCk7XG4gICAgICB9XG4gICAgICB0YXNrcy5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIiBcIiwgaW5kZXgsIHRhc2spO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICBwcm9qZWN0cy5wdXNoKHsgdGl0bGUsIGRlc2NyaXB0aW9uLCB0YXNrcywgcHJpbnRUYXNrcyB9KTtcbiAgICBwcmludFByb2plY3RzKFwiQSBuZXcgcHJvamVjdCBoYXMgYmVlbiBtYWRlLlwiKTtcbiAgfTtcblxuICBjb25zdCB0YXNrRmFjdG9yeSA9ICh7XG4gICAgdGl0bGUgPSBcIlwiLFxuICAgIGRlc2NyaXB0aW9uID0gXCJcIixcbiAgICBkdWVEYXRlID0gXCJcIixcbiAgICBwcmlvcml0eSA9IFwiXCIsXG4gIH0pID0+IHtcbiAgICBsZXQgdGFza1N0YXR1cyA9IGZhbHNlO1xuICAgIGNvbnN0IGNoZWNrQ29tcGxldGlvblN0YXR1cyA9ICgpID0+IHtcbiAgICAgIGlmICh0YXNrU3RhdHVzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBUYXNrIFwiJHt0aXRsZX1cIiBoYXMgYmVlbiBjb21wbGV0ZWQuIDpEYCk7XG4gICAgICB9XG4gICAgICBpZiAoIXRhc2tTdGF0dXMpIHtcbiAgICAgICAgY29uc29sZS5sb2coYFRhc2sgXCIke3RpdGxlfVwiIGhhcyBub3QgYmVlbiBjb21wbGV0ZWQuIDovYCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGFza1N0YXR1cztcbiAgICB9O1xuICAgIGNvbnN0IGNoYW5nZUNvbXBsZXRpb25TdGF0dXMgPSAoKSA9PiB7XG4gICAgICB0YXNrU3RhdHVzID0gdGFza1N0YXR1cyA/IGZhbHNlIDogdHJ1ZTtcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgZHVlRGF0ZSxcbiAgICAgIHByaW9yaXR5LFxuICAgICAgY2hlY2tDb21wbGV0aW9uU3RhdHVzLFxuICAgICAgY2hhbmdlQ29tcGxldGlvblN0YXR1cyxcbiAgICB9O1xuICB9O1xuXG4gIGNvbnN0IHByaW50VGFza1VwZGF0ZSA9IChwcm9qZWN0SW5kZXgsIG1lc3NhZ2UpID0+IHtcbiAgICBpZiAoIW1lc3NhZ2UpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBUYXNrcyBpbiAke3Byb2plY3RzW3Byb2plY3RJbmRleF0udGl0bGV9LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhgJHttZXNzYWdlfSAoJHt0aXRsZX0gY2F0ZWdvcnkpYCk7XG4gICAgfVxuICAgIHByb2plY3RzW3Byb2plY3RJbmRleF0ucHJpbnRUYXNrcyhmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgYWRkVGFzayA9IChwcm9qZWN0SW5kZXgsIHRhc2sgPSB7fSkgPT4ge1xuICAgIGlmICghcHJvamVjdHNbcHJvamVjdEluZGV4XSkge1xuICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKEVycm9yKFwiVGhlIHNwZWNpZmllZCBpbmRleCBpcyBvdXQgb2YgcmFuZ2UuXCIpKTtcbiAgICB9XG4gICAgcHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrcy5wdXNoKHRhc2tGYWN0b3J5KHRhc2spKTtcbiAgICBwcmludFRhc2tVcGRhdGUoXG4gICAgICBwcm9qZWN0SW5kZXgsXG4gICAgICBgQSB0YXNrIGhhcyBiZWVuIGFkZGVkIHRvIHByb2plY3QgXCIke3Byb2plY3RzW3Byb2plY3RJbmRleF0udGl0bGV9XCIuYFxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlUHJvamVjdCA9IChpbmRleCwgeyB0aXRsZSwgZGVzY3JpcHRpb24gfSkgPT4ge1xuICAgIGlmICghcHJvamVjdHNbaW5kZXhdKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5sb2coRXJyb3IoXCJUaGUgc3BlY2lmaWVkIHByb2plY3QgaW5kZXggaXMgb3V0IG9mIHJhbmdlLlwiKSk7XG4gICAgfVxuICAgIGlmICh0aXRsZSkge1xuICAgICAgcHJvamVjdHNbaW5kZXhdLnRpdGxlID0gdGl0bGU7XG4gICAgfVxuICAgIGlmIChkZXNjcmlwdGlvbikge1xuICAgICAgcHJvamVjdHNbaW5kZXhdLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgfVxuICAgIHByaW50UHJvamVjdHMoYFRoZSBwcm9qZWN0IGF0ICR7aW5kZXh9IGhhcyBiZWVuIHVwZGF0ZWQuYCk7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlVGFzayA9IChcbiAgICBwcm9qZWN0SW5kZXgsXG4gICAgdGFza0luZGV4LFxuICAgIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSB9XG4gICkgPT4ge1xuICAgIGlmICghcHJvamVjdHNbcHJvamVjdEluZGV4XSkge1xuICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKEVycm9yKFwiVGhlIHNwZWNpZmllZCBwcm9qZWN0IGluZGV4IGlzIG91dCBvZiByYW5nZS5cIikpO1xuICAgIH1cbiAgICBpZiAoIXByb2plY3RzW3Byb2plY3RJbmRleF0udGFza3NbdGFza0luZGV4XSkge1xuICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKEVycm9yKFwiVGhlIHNwZWNpZmllZCB0YXNrIGluZGV4IGlzIG91dCBvZiByYW5nZS5cIikpO1xuICAgIH1cbiAgICBsZXQgdGFzayA9IHByb2plY3RzW3Byb2plY3RJbmRleF0udGFza3NbdGFza0luZGV4XTtcbiAgICBpZiAodGl0bGUpIHtcbiAgICAgIHRhc2sudGl0bGUgPSB0aXRsZTtcbiAgICB9XG4gICAgaWYgKGRlc2NyaXB0aW9uKSB7XG4gICAgICB0YXNrLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgfVxuICAgIGlmIChkdWVEYXRlKSB7XG4gICAgICB0YXNrLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIH1cbiAgICBpZiAocHJpb3JpdHkpIHtcbiAgICAgIHRhc2sucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB9XG4gICAgcHJpbnRUYXNrVXBkYXRlKHByb2plY3RJbmRleCwgYFRoZSB0YXNrIGF0ICR7dGFza0luZGV4fSBoYXMgYmVlbiB1cGRhdGVkLmApO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVRhc2sgPSAocHJvamVjdEluZGV4LCB0YXNrSW5kZXgpID0+IHtcbiAgICBpZiAoIXByb2plY3RzW3Byb2plY3RJbmRleF0pIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZyhFcnJvcihcIlRoZSBzcGVjaWZpZWQgcHJvamVjdCBpbmRleCBpcyBvdXQgb2YgcmFuZ2UuXCIpKTtcbiAgICB9XG4gICAgaWYgKCFwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRhc2tzW3Rhc2tJbmRleF0pIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZyhFcnJvcihcIlRoZSBzcGVjaWZpZWQgdGFzayBpbmRleCBpcyBvdXQgb2YgcmFuZ2UuXCIpKTtcbiAgICB9XG4gICAgbGV0IHRpdGxlID0gcHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrc1t0YXNrSW5kZXhdLnRpdGxlO1xuICAgIHByb2plY3RzW3Byb2plY3RJbmRleF0udGFza3Muc3BsaWNlKHRhc2tJbmRleCwgMSk7XG4gICAgcHJpbnRUYXNrVXBkYXRlKHByb2plY3RJbmRleCwgYFRoZSB0YXNrIFwiJHt0aXRsZX1cIiBoYXMgYmVlbiByZW1vdmVkLmApO1xuICB9O1xuXG4gIGNvbnN0IHRyYW5zZmVyVGFzayA9IChwcm9qZWN0SW5kZXhBLCBwcm9qZWN0SW5kZXhCLCB0YXNrSW5kZXgpID0+IHtcbiAgICBpZiAoIXByb2plY3RzW3Byb2plY3RJbmRleEFdKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5sb2coRXJyb3IoXCJUaGUgc3BlY2lmaWVkIG9yaWdpbiBpbmRleCBpcyBvdXQgb2YgcmFuZ2UuXCIpKTtcbiAgICB9XG4gICAgaWYgKCFwcm9qZWN0c1twcm9qZWN0SW5kZXhCXSkge1xuICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKFxuICAgICAgICBFcnJvcihcIlRoZSBzcGVjaWZpZWQgZGVzdGluYXRpb24gaW5kZXggaXMgb3V0IG9mIHJhbmdlLlwiKVxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKCFwcm9qZWN0c1twcm9qZWN0SW5kZXhBXS50YXNrc1t0YXNrSW5kZXhdKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5sb2coRXJyb3IoXCJUaGUgc3BlY2lmaWVkIHRhc2sgaW5kZXggaXMgb3V0IG9mIHJhbmdlLlwiKSk7XG4gICAgfVxuICAgIGxldCB0YXNrID0gcHJvamVjdHNbcHJvamVjdEluZGV4QV0udGFza3Muc3BsaWNlKHRhc2tJbmRleCwgMSlbMF07XG4gICAgcHJvamVjdHNbcHJvamVjdEluZGV4Ql0udGFza3MucHVzaCh0YXNrRmFjdG9yeSh0YXNrKSk7XG4gICAgcHJpbnRUYXNrVXBkYXRlKHByb2plY3RJbmRleEIsIGBUYXNrICR7dGFzay50aXRsZX0gaGFzIGJlZW4gdHJhbnNmZXJlZC5gKTtcbiAgfTtcblxuICBjb25zdCBtb3ZlVGFzayA9IChwcm9qZWN0SW5kZXgsIHBvc2l0aW9uQSwgcG9zaXRpb25CKSA9PiB7XG4gICAgaWYgKCFwcm9qZWN0c1twcm9qZWN0SW5kZXhdKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5sb2coRXJyb3IoXCJUaGUgc3BlY2lmaWVkIHByb2plY3QgaW5kZXggaXMgb3V0IG9mIHJhbmdlLlwiKSk7XG4gICAgfVxuICAgIGlmICghcHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrc1twb3NpdGlvbkFdKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5sb2coXG4gICAgICAgIEVycm9yKFwiVGhlIGZpcnN0IHNwZWNpZmllZCB0YXNrIGluZGV4IGlzIG91dCBvZiByYW5nZS5cIilcbiAgICAgICk7XG4gICAgfVxuICAgIGlmICghcHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrc1twb3NpdGlvbkJdKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5sb2coXG4gICAgICAgIEVycm9yKFwiVGhlIHNlY29uZCBzcGVjaWZpZWQgdGFzayBpbmRleCBpcyBvdXQgb2YgcmFuZ2UuXCIpXG4gICAgICApO1xuICAgIH1cbiAgICBsZXQgdGFzayA9IHByb2plY3RzW3Byb2plY3RJbmRleF0udGFza3Muc3BsaWNlKHBvc2l0aW9uQSwgMSlbMF07XG4gICAgcHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrcy5zcGxpY2UocG9zaXRpb25CLCAwLCB0YXNrKTtcbiAgICBwcmludFRhc2tVcGRhdGUocHJvamVjdEluZGV4LCBcIlRoZSB0YXNrIGxpc3QgaGFzIGJlZW4gcmVvcmRlcmVkXCIpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgc2V0VGl0bGUsXG4gICAgZ2V0VGl0bGUsXG4gICAgcHJvamVjdHMsXG4gICAgcHJpbnRQcm9qZWN0cyxcbiAgICBtb3ZlUHJvamVjdCxcbiAgICByZW1vdmVQcm9qZWN0LFxuICAgIG1ha2VQcm9qZWN0LFxuICAgIGFkZFRhc2ssXG4gICAgdXBkYXRlUHJvamVjdCxcbiAgICB1cGRhdGVUYXNrLFxuICAgIHJlbW92ZVRhc2ssXG4gICAgdHJhbnNmZXJUYXNrLFxuICAgIG1vdmVUYXNrLFxuICB9O1xufTtcblxuY29uc3QgY2F0ZWdvcmllcyA9IFtdO1xuXG5jb25zdCBtYWtlQ2F0ZWdvcnkgPSAodGl0bGUpID0+IHtcbiAgbGV0IHByb2plY3QgPSBjYXRlZ29yeUZhY3RvcnkodGl0bGUpO1xuICBjYXRlZ29yaWVzLnB1c2gocHJvamVjdCk7XG4gIHJldHVybiBjYXRlZ29yaWVzW2NhdGVnb3JpZXMubGVuZ3RoIC0gMV07XG59O1xuXG5jb25zdCBwcmludENhdGVnb3JpZXMgPSAobWVzc2FnZSkgPT4ge1xuICBpZiAoIW1lc3NhZ2UpIHtcbiAgICBjb25zb2xlLmxvZyhcIkEgbGlzdCBvZiBhbGwgY2F0ZWdvcmllczpcIik7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coXCJtZXNzYWdlXCIpO1xuICB9XG4gIGNhdGVnb3JpZXMuZm9yRWFjaCgoY2F0ZWdvcnksIGluZGV4KSA9PiB7XG4gICAgY29uc29sZS5sb2coXG4gICAgICBcIiBcIixcbiAgICAgIGAke2luZGV4fTpgLFxuICAgICAgY2F0ZWdvcnkuZ2V0VGl0bGUoKSxcbiAgICAgIGAoJHtjYXRlZ29yeS5wcm9qZWN0cy5sZW5ndGh9IHByb2plY3RzKWBcbiAgICApO1xuICB9KTtcbn07XG5cbmNvbnN0IHRyYW5zZmVyUHJvamVjdCA9IChjYXRlZ29yeUluZGV4QSwgY2F0ZWdvcnlJbmRleEIsIHByb2plY3RJbmRleCkgPT4ge1xuICBpZiAoIWNhdGVnb3JpZXNbY2F0ZWdvcnlJbmRleEFdKSB7XG4gICAgcmV0dXJuIGNvbnNvbGUubG9nKEVycm9yKFwiVGhlIHNwZWNpZmllZCBvcmlnaW4gaW5kZXggaXMgb3V0IG9mIHJhbmdlLlwiKSk7XG4gIH1cbiAgaWYgKCFjYXRlZ29yaWVzW2NhdGVnb3J5SW5kZXhCXSkge1xuICAgIHJldHVybiBjb25zb2xlLmxvZyhcbiAgICAgIEVycm9yKFwiVGhlIHNwZWNpZmllZCBkZXN0aW5hdGlvbiBpbmRleCBpcyBvdXQgb2YgcmFuZ2UuXCIpXG4gICAgKTtcbiAgfVxuICBsZXQgcHJvamVjdCA9IGNhdGVnb3JpZXNbY2F0ZWdvcnlJbmRleEFdLnByb2plY3RzLnNwbGljZShwcm9qZWN0SW5kZXgsIDEpWzBdO1xuICBjYXRlZ29yaWVzW2NhdGVnb3J5SW5kZXhCXS5wcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICBjYXRlZ29yaWVzW2NhdGVnb3J5SW5kZXhCXS5wcmludFByb2plY3RzKGBUaGUgcHJvamVjdCBoYXMgYmVlbiBhZGRlZC5gKTtcbn07XG5cbmV4cG9ydCB7IG1ha2VDYXRlZ29yeSwgcHJpbnRDYXRlZ29yaWVzLCB0cmFuc2ZlclByb2plY3QgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi4vc3R5bGUvZGVmYXVsdC5jc3NcIjtcbmltcG9ydCB7IG1ha2VDYXRlZ29yeSwgcHJpbnRDYXRlZ29yaWVzLCB0cmFuc2ZlclByb2plY3QgfSBmcm9tIFwiLi90by1kby5qc1wiO1xuXG5jb25zdCBkZW1vMSA9IG1ha2VDYXRlZ29yeShcIkRlbW9cIik7XG5cbmRlbW8xLm1ha2VQcm9qZWN0KHtcbiAgdGl0bGU6IFwiVG8tZG8gYXBwXCIsXG4gIGRlc2NyaXB0aW9uOiBcIkEgcGxhY2UgdG8gc3RvcmUgYWxsIG9mIHlvdXIgdGFza3NcIixcbiAgdGFza3M6IFtdLFxufSk7XG5cbmRlbW8xLmFkZFRhc2soMCwge1xuICB0aXRsZTogXCJMb29rIGFyb3VuZFwiLFxuICBkZXNjcmlwdGlvbjogXCJHZXQgdG8ga25vdyB0aGUgYXBwLlwiLFxufSk7XG5cbmRlbW8xLm1ha2VQcm9qZWN0KHtcbiAgdGl0bGU6IFwiRXhlcmNpc2Ugc29sdXRpb25zXCIsXG4gIGRlc2NyaXB0aW9uOiBcIkZpZ3VyZSBvdXQgYW4gb3B0aW1hbCBzZXR1cCBmb3IgZWFjaCBtYWpvciBtdXNjbGUgZ3JvdXAuXCIsXG4gIHRhc2tzOiBbXSxcbn0pO1xuXG5kZW1vMS5hZGRUYXNrKDEsIHtcbiAgdGl0bGU6IFwiQnV5IHB1bGxleXNcIixcbiAgZGVzY3JpcHRpb246IFwiRm9yIGV4ZXJjaXNlcyB0aGF0IHJlcXVpcmUgYW4gdXB3YXJkIGRpcmN0aW9uIG9mIHJlc2lzdGFuY2UuXCIsXG59KTtcblxuZGVtbzEuYWRkVGFzaygxLCB7XG4gIHRpdGxlOiBcIkdldCB3ZWlnaHQgcGxhdGVzXCIsXG4gIGRlc2NyaXB0aW9uOiBcIkEgbWluaW1hbGlzdGljIHNldCB0aGF0IGFsbG93cyBpbmNyZW1lbnRzIG9mIDVsYi5cIixcbn0pO1xuXG5kZW1vMS5hZGRUYXNrKDEsIHtcbiAgdGl0bGU6IFwiRmluZCBzdXBwbGllc1wiLFxuICBkZXNjcmlwdGlvbjogXCJUaGluZ3MgbGlrZSByb3BlLCB3ZWJiaW5nLCBjYXJpYmluZXJzLCBjaGFpbnMsIGZvYW0uLi4gXCIsXG59KTtcblxuZGVtbzEuYWRkVGFzaygxLCB7XG4gIHRpdGxlOiBcIk1ha2Ugc29tZSBlcXVpcG1lbnRcIixcbiAgZGVzY3JpcHRpb246IFwiQXNrIG1vbSB0byBzZXcgdG9nZXRoZXIgbXkgaW52ZW50aW9uc1wiLFxufSk7XG5cbmRlbW8xLm1ha2VQcm9qZWN0KHtcbiAgdGl0bGU6IFwiMjUwIGJveCBjaGFsbGVuZ2VcIixcbiAgZGVzY3JpcHRpb246ICdcIi4uLmRyYXcgYSBib3ggLSB0aGVuIGRvIGl0IGFnYWluIGFub3RoZXIgMjQ5IHRpbWVzLlwiJyxcbiAgdGFza3M6IFtdLFxufSk7XG5cbmRlbW8xLmFkZFRhc2soMiwge1xuICB0aXRsZTogXCJGaW5kIGRyYXdpbmcgc3VwcGxpZXNcIixcbiAgZGVzY3JpcHRpb246IFwiYSBsYXJnZSBzdGFjayBvZiBwcml0ZXIgcGFwZXIgYW5kIGEgLjUgcGVuLlwiLFxufSk7XG5cbmRlbW8xLmFkZFRhc2soMiwge1xuICB0aXRsZTogXCJkcmF3IDUgYm94ZXMgb24gYSBwYWdlXCIsXG4gIGRlc2NyaXB0aW9uOiBcIjUgbGVhdmVzIGVub3VnaCByb29tIHRvIGNoZWNrIHRoZSBjb252ZXJnZW5jZXNcIixcbn0pO1xuXG5kZW1vMS5hZGRUYXNrKDIsIHtcbiAgdGl0bGU6IFwiNTAlIHJ1bGVcIixcbiAgZGVzY3JpcHRpb246XG4gICAgXCJEcmF3IHdoYXRldmVyIHlvdSB3YW50IGZvciB0aGUgc2FtZSBhbW91bnQgb2YgdGltZSBzcGVudCBwcmFjdGljaW5nLlwiLFxufSk7XG5cbmRlbW8xLnByaW50UHJvamVjdHMoKTtcblxuY29uc3Qgd29yayA9IG1ha2VDYXRlZ29yeShcIldvcmtcIik7XG5cbndvcmsubWFrZVByb2plY3Qoe1xuICB0aXRsZTogXCJCbG9jayBXb3JsZFwiLFxuICBkZXNjcmlwdGlvbjogXCJhbiBvcmlnaW5hbCBzYW5kYm94IGdhbWUgd2hlcmUgZXZlcnl0aGluZyBpcyBibG9ja3lcIixcbn0pO1xuXG5wcmludENhdGVnb3JpZXMoKTtcblxudHJhbnNmZXJQcm9qZWN0KDAsIDEsIDApO1xucHJpbnRDYXRlZ29yaWVzKCk7XG5cbmRlbW8xLnByb2plY3RzWzBdLnByaW50VGFza3MoKTtcbmRlbW8xLnByaW50UHJvamVjdHMoKTtcbmRlbW8xLnRyYW5zZmVyVGFzaygwLCAxLCAwKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==