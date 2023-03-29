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
/* harmony export */   "printCategories": () => (/* binding */ printCategories)
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
      console.log(`${message} (${title} category)`);
    }
    projects[projectIndex].tasks.forEach((task, index) => {
      console.log(" ", index, task);
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

  return {
    setTitle,
    getTitle,
    projects,
    printProjects,
    moveProject,
    removeProject,
    makeProject,
    printTasks,
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q044QjtBQUM2Qjs7QUFFM0QsY0FBYyx1REFBWTs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUEsYUFBYSx1REFBWTs7QUFFekI7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCwwREFBZSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsZS9kZWZhdWx0LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvZ3JhbS90by1kby5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvZ3JhbS9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImNvbnN0IGNhdGVnb3J5RmFjdG9yeSA9ICh0aXRsZSkgPT4ge1xuICBjb25zdCBzZXRUaXRsZSA9IChpbnB1dCkgPT4ge1xuICAgIGlmICh0eXBlb2YgaW5wdXQgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZyhFcnJvcihcIlRoZSBzcGVjaWZpZWQgdGl0bGUgaXMgbm90IGEgc3RyaW5nLlwiKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpdGxlID0gaW5wdXQ7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGdldFRpdGxlID0gKCkgPT4ge1xuICAgIHJldHVybiB0aXRsZTtcbiAgfTtcblxuICBjb25zdCBwcm9qZWN0cyA9IFtdO1xuXG4gIGNvbnN0IHByaW50UHJvamVjdHMgPSAobWVzc2FnZSkgPT4ge1xuICAgIGlmIChwcm9qZWN0cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZyhFcnJvcihgVGhlcmUgYXJlIG5vIHByb2plY3RzIGluICR7dGl0bGV9IGNhdGVnb3J5LmApKTtcbiAgICB9XG4gICAgaWYgKCFtZXNzYWdlKSB7XG4gICAgICBjb25zb2xlLmxvZyhgQSBsaXN0IG9mIGFsbCBwcm9qZWN0cyBpbiBcIiR7dGl0bGV9XCIgY2F0ZWdvcnk6YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKGAke21lc3NhZ2V9ICgke3RpdGxlfSBjYXRlZ29yeSlgKTtcbiAgICB9XG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiIFwiLCBpbmRleCwgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShwcm9qZWN0KSkpO1xuICAgICAgaW5kZXgrKztcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBtb3ZlUHJvamVjdCA9IChwb3NpdGlvbkEsIHBvc2l0aW9uQikgPT4ge1xuICAgIGlmICghcHJvamVjdHNbcG9zaXRpb25BXSkge1xuICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKEVycm9yKFwiVGhlIHNwZWNpZmllZCBvcmlnaW4gaW5kZXggaXMgb3V0IG9mIHJhbmdlLlwiKSk7XG4gICAgfVxuICAgIGlmICghcHJvamVjdHNbcG9zaXRpb25CXSkge1xuICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKFxuICAgICAgICBFcnJvcihcIlRoZSBzcGVjaWZpZWQgZGVzdGluYXRpb24gaW5kZXggaXMgb3V0IG9mIHJhbmdlLlwiKVxuICAgICAgKTtcbiAgICB9XG4gICAgbGV0IG9iamVjdEEgPSBwcm9qZWN0cy5zcGxpY2UocG9zaXRpb25BLCAxKVswXTtcbiAgICBwcm9qZWN0cy5zcGxpY2UocG9zaXRpb25CLCAwLCBvYmplY3RBKTtcbiAgICBwcmludFByb2plY3RzKFwiVGhlIHByb2plY3RzIGhhdmUgYmVlbiByZW9yZGVyZWQuXCIpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVByb2plY3QgPSAoaW5kZXgpID0+IHtcbiAgICBpZiAoIXByb2plY3RzW2luZGV4XSkge1xuICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKEVycm9yKFwiVGhlIHNwZWNpZmllZCBpbmRleCBpcyBvdXQgb2YgcmFuZ2UuXCIpKTtcbiAgICB9XG4gICAgbGV0IHRpdGxlID0gcHJvamVjdHNbaW5kZXhdLnRpdGxlO1xuICAgIHByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgcHJpbnRQcm9qZWN0cyhgUHJvamVjdCBcIiR7dGl0bGV9XCIgaGFzIGJlZW4gcmVtb3ZlZC5gKTtcbiAgfTtcblxuICBjb25zdCBtYWtlUHJvamVjdCA9ICh7IHRpdGxlID0gXCJcIiwgZGVzY3JpcHRpb24gPSBcIlwiIH0pID0+IHtcbiAgICBwcm9qZWN0cy5wdXNoKHsgdGl0bGUsIGRlc2NyaXB0aW9uLCB0YXNrczogW10gfSk7XG4gICAgcHJpbnRQcm9qZWN0cyhcIkEgbmV3IHByb2plY3QgaGFzIGJlZW4gbWFkZS5cIik7XG4gIH07XG5cbiAgY29uc3QgdGFza0ZhY3RvcnkgPSAoe1xuICAgIHRpdGxlID0gXCJcIixcbiAgICBkZXNjcmlwdGlvbiA9IFwiXCIsXG4gICAgZHVlRGF0ZSA9IFwiXCIsXG4gICAgcHJpb3JpdHkgPSBcIlwiLFxuICB9KSA9PiB7XG4gICAgbGV0IHRhc2tTdGF0dXMgPSBmYWxzZTtcbiAgICBjb25zdCBjaGVja0NvbXBsZXRpb25TdGF0dXMgPSAoKSA9PiB7XG4gICAgICBpZiAodGFza1N0YXR1cykge1xuICAgICAgICBjb25zb2xlLmxvZyhgVGFzayBcIiR7dGl0bGV9XCIgaGFzIGJlZW4gY29tcGxldGVkLiA6RGApO1xuICAgICAgfVxuICAgICAgaWYgKCF0YXNrU3RhdHVzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBUYXNrIFwiJHt0aXRsZX1cIiBoYXMgbm90IGJlZW4gY29tcGxldGVkLiA6L2ApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRhc2tTdGF0dXM7XG4gICAgfTtcbiAgICBjb25zdCBjaGFuZ2VDb21wbGV0aW9uU3RhdHVzID0gKCkgPT4ge1xuICAgICAgdGFza1N0YXR1cyA9IHRhc2tTdGF0dXMgPyBmYWxzZSA6IHRydWU7XG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIGR1ZURhdGUsXG4gICAgICBwcmlvcml0eSxcbiAgICAgIGNoZWNrQ29tcGxldGlvblN0YXR1cyxcbiAgICAgIGNoYW5nZUNvbXBsZXRpb25TdGF0dXMsXG4gICAgfTtcbiAgfTtcblxuICBjb25zdCBwcmludFRhc2tzID0gKHByb2plY3RJbmRleCwgbWVzc2FnZSkgPT4ge1xuICAgIGlmICghcHJvamVjdHNbcHJvamVjdEluZGV4XSkge1xuICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKEVycm9yKFwiVGhlIHNwZWNpZmllZCBwcm9qZWN0IGluZGV4IGlzIG91dCBvZiByYW5nZS5cIikpO1xuICAgIH1cbiAgICBpZiAoIW1lc3NhZ2UpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBUYXNrcyBpbiAke3Byb2plY3RzW3Byb2plY3RJbmRleF0udGl0bGV9LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhgJHttZXNzYWdlfSAoJHt0aXRsZX0gY2F0ZWdvcnkpYCk7XG4gICAgfVxuICAgIHByb2plY3RzW3Byb2plY3RJbmRleF0udGFza3MuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiIFwiLCBpbmRleCwgdGFzayk7XG4gICAgICBpbmRleCsrO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGFkZFRhc2sgPSAocHJvamVjdEluZGV4LCB0YXNrID0ge30pID0+IHtcbiAgICBpZiAoIXByb2plY3RzW3Byb2plY3RJbmRleF0pIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZyhFcnJvcihcIlRoZSBzcGVjaWZpZWQgaW5kZXggaXMgb3V0IG9mIHJhbmdlLlwiKSk7XG4gICAgfVxuICAgIHByb2plY3RzW3Byb2plY3RJbmRleF0udGFza3MucHVzaCh0YXNrRmFjdG9yeSh0YXNrKSk7XG4gICAgcHJpbnRUYXNrcyhcbiAgICAgIHByb2plY3RJbmRleCxcbiAgICAgIGBBIHRhc2sgaGFzIGJlZW4gYWRkZWQgdG8gcHJvamVjdCBcIiR7cHJvamVjdHNbcHJvamVjdEluZGV4XS50aXRsZX1cIi5gXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVQcm9qZWN0ID0gKGluZGV4LCB7IHRpdGxlLCBkZXNjcmlwdGlvbiB9KSA9PiB7XG4gICAgaWYgKCFwcm9qZWN0c1tpbmRleF0pIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZyhFcnJvcihcIlRoZSBzcGVjaWZpZWQgcHJvamVjdCBpbmRleCBpcyBvdXQgb2YgcmFuZ2UuXCIpKTtcbiAgICB9XG4gICAgaWYgKHRpdGxlKSB7XG4gICAgICBwcm9qZWN0c1tpbmRleF0udGl0bGUgPSB0aXRsZTtcbiAgICB9XG4gICAgaWYgKGRlc2NyaXB0aW9uKSB7XG4gICAgICBwcm9qZWN0c1tpbmRleF0uZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB9XG4gICAgcHJpbnRQcm9qZWN0cyhgVGhlIHByb2plY3QgYXQgJHtpbmRleH0gaGFzIGJlZW4gdXBkYXRlZC5gKTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVUYXNrID0gKFxuICAgIHByb2plY3RJbmRleCxcbiAgICB0YXNrSW5kZXgsXG4gICAgeyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5IH1cbiAgKSA9PiB7XG4gICAgaWYgKCFwcm9qZWN0c1twcm9qZWN0SW5kZXhdKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5sb2coRXJyb3IoXCJUaGUgc3BlY2lmaWVkIHByb2plY3QgaW5kZXggaXMgb3V0IG9mIHJhbmdlLlwiKSk7XG4gICAgfVxuICAgIGlmICghcHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrc1t0YXNrSW5kZXhdKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5sb2coRXJyb3IoXCJUaGUgc3BlY2lmaWVkIHRhc2sgaW5kZXggaXMgb3V0IG9mIHJhbmdlLlwiKSk7XG4gICAgfVxuICAgIGxldCB0YXNrID0gcHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrc1t0YXNrSW5kZXhdO1xuICAgIGlmICh0aXRsZSkge1xuICAgICAgdGFzay50aXRsZSA9IHRpdGxlO1xuICAgIH1cbiAgICBpZiAoZGVzY3JpcHRpb24pIHtcbiAgICAgIHRhc2suZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB9XG4gICAgaWYgKGR1ZURhdGUpIHtcbiAgICAgIHRhc2suZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgfVxuICAgIGlmIChwcmlvcml0eSkge1xuICAgICAgdGFzay5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIH1cbiAgICBwcmludFRhc2tzKHByb2plY3RJbmRleCwgYFRoZSB0YXNrIGF0ICR7dGFza0luZGV4fSBoYXMgYmVlbiB1cGRhdGVkLmApO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVRhc2sgPSAocHJvamVjdEluZGV4LCB0YXNrSW5kZXgpID0+IHtcbiAgICBpZiAoIXByb2plY3RzW3Byb2plY3RJbmRleF0pIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZyhFcnJvcihcIlRoZSBzcGVjaWZpZWQgcHJvamVjdCBpbmRleCBpcyBvdXQgb2YgcmFuZ2UuXCIpKTtcbiAgICB9XG4gICAgaWYgKCFwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRhc2tzW3Rhc2tJbmRleF0pIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZyhFcnJvcihcIlRoZSBzcGVjaWZpZWQgdGFzayBpbmRleCBpcyBvdXQgb2YgcmFuZ2UuXCIpKTtcbiAgICB9XG4gICAgbGV0IHRpdGxlID0gcHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrc1t0YXNrSW5kZXhdLnRpdGxlO1xuICAgIHByb2plY3RzW3Byb2plY3RJbmRleF0udGFza3Muc3BsaWNlKHRhc2tJbmRleCwgMSk7XG4gICAgcHJpbnRUYXNrcyhwcm9qZWN0SW5kZXgsIGBUaGUgdGFzayBcIiR7dGl0bGV9XCIgaGFzIGJlZW4gcmVtb3ZlZC5gKTtcbiAgfTtcblxuICBjb25zdCB0cmFuc2ZlclRhc2sgPSAocHJvamVjdEluZGV4QSwgcHJvamVjdEluZGV4QiwgdGFza0luZGV4KSA9PiB7XG4gICAgaWYgKCFwcm9qZWN0c1twcm9qZWN0SW5kZXhBXSkge1xuICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKEVycm9yKFwiVGhlIHNwZWNpZmllZCBvcmlnaW4gaW5kZXggaXMgb3V0IG9mIHJhbmdlLlwiKSk7XG4gICAgfVxuICAgIGlmICghcHJvamVjdHNbcHJvamVjdEluZGV4Ql0pIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZyhcbiAgICAgICAgRXJyb3IoXCJUaGUgc3BlY2lmaWVkIGRlc3RpbmF0aW9uIGluZGV4IGlzIG91dCBvZiByYW5nZS5cIilcbiAgICAgICk7XG4gICAgfVxuICAgIGlmICghcHJvamVjdHNbcHJvamVjdEluZGV4QV0udGFza3NbdGFza0luZGV4XSkge1xuICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKEVycm9yKFwiVGhlIHNwZWNpZmllZCB0YXNrIGluZGV4IGlzIG91dCBvZiByYW5nZS5cIikpO1xuICAgIH1cbiAgICBsZXQgdGFzayA9IHByb2plY3RzW3Byb2plY3RJbmRleEFdLnRhc2tzLnNwbGljZSh0YXNrSW5kZXgsIDEpWzBdO1xuICAgIHByb2plY3RzW3Byb2plY3RJbmRleEJdLnRhc2tzLnB1c2godGFza0ZhY3RvcnkodGFzaykpO1xuICAgIHByaW50VGFza3MocHJvamVjdEluZGV4QiwgYFRhc2sgJHt0YXNrLnRpdGxlfSBoYXMgYmVlbiB0cmFuc2ZlcmVkLmApO1xuICB9O1xuXG4gIGNvbnN0IG1vdmVUYXNrID0gKHByb2plY3RJbmRleCwgcG9zaXRpb25BLCBwb3NpdGlvbkIpID0+IHtcbiAgICBpZiAoIXByb2plY3RzW3Byb2plY3RJbmRleF0pIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZyhFcnJvcihcIlRoZSBzcGVjaWZpZWQgcHJvamVjdCBpbmRleCBpcyBvdXQgb2YgcmFuZ2UuXCIpKTtcbiAgICB9XG4gICAgaWYgKCFwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRhc2tzW3Bvc2l0aW9uQV0pIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZyhcbiAgICAgICAgRXJyb3IoXCJUaGUgZmlyc3Qgc3BlY2lmaWVkIHRhc2sgaW5kZXggaXMgb3V0IG9mIHJhbmdlLlwiKVxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKCFwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRhc2tzW3Bvc2l0aW9uQl0pIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZyhcbiAgICAgICAgRXJyb3IoXCJUaGUgc2Vjb25kIHNwZWNpZmllZCB0YXNrIGluZGV4IGlzIG91dCBvZiByYW5nZS5cIilcbiAgICAgICk7XG4gICAgfVxuICAgIGxldCB0YXNrID0gcHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrcy5zcGxpY2UocG9zaXRpb25BLCAxKVswXTtcbiAgICBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRhc2tzLnNwbGljZShwb3NpdGlvbkIsIDAsIHRhc2spO1xuICAgIHByaW50VGFza3MocHJvamVjdEluZGV4LCBcIlRoZSB0YXNrIGxpc3QgaGFzIGJlZW4gcmVvcmRlcmVkXCIpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgc2V0VGl0bGUsXG4gICAgZ2V0VGl0bGUsXG4gICAgcHJvamVjdHMsXG4gICAgcHJpbnRQcm9qZWN0cyxcbiAgICBtb3ZlUHJvamVjdCxcbiAgICByZW1vdmVQcm9qZWN0LFxuICAgIG1ha2VQcm9qZWN0LFxuICAgIHByaW50VGFza3MsXG4gICAgYWRkVGFzayxcbiAgICB1cGRhdGVQcm9qZWN0LFxuICAgIHVwZGF0ZVRhc2ssXG4gICAgcmVtb3ZlVGFzayxcbiAgICB0cmFuc2ZlclRhc2ssXG4gICAgbW92ZVRhc2ssXG4gIH07XG59O1xuXG5jb25zdCBjYXRlZ29yaWVzID0gW107XG5cbmNvbnN0IG1ha2VDYXRlZ29yeSA9ICh0aXRsZSkgPT4ge1xuICBsZXQgcHJvamVjdCA9IGNhdGVnb3J5RmFjdG9yeSh0aXRsZSk7XG4gIGNhdGVnb3JpZXMucHVzaChwcm9qZWN0KTtcbiAgcmV0dXJuIGNhdGVnb3JpZXNbY2F0ZWdvcmllcy5sZW5ndGggLSAxXTtcbn07XG5cbmNvbnN0IHByaW50Q2F0ZWdvcmllcyA9IChtZXNzYWdlKSA9PiB7XG4gIGlmICghbWVzc2FnZSkge1xuICAgIGNvbnNvbGUubG9nKFwiQSBsaXN0IG9mIGFsbCBjYXRlZ29yaWVzOlwiKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZyhcIm1lc3NhZ2VcIik7XG4gIH1cbiAgY2F0ZWdvcmllcy5mb3JFYWNoKChjYXRlZ29yeSwgaW5kZXgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcbiAgICAgIFwiIFwiLFxuICAgICAgYCR7aW5kZXh9OmAsXG4gICAgICBjYXRlZ29yeS5nZXRUaXRsZSgpLFxuICAgICAgYCgke2NhdGVnb3J5LnByb2plY3RzLmxlbmd0aH0gcHJvamVjdHMpYFxuICAgICk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgbWFrZUNhdGVnb3J5LCBwcmludENhdGVnb3JpZXMgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi4vc3R5bGUvZGVmYXVsdC5jc3NcIjtcbmltcG9ydCB7IG1ha2VDYXRlZ29yeSwgcHJpbnRDYXRlZ29yaWVzIH0gZnJvbSBcIi4vdG8tZG8uanNcIjtcblxuY29uc3QgZGVtbzEgPSBtYWtlQ2F0ZWdvcnkoXCJEZW1vXCIpO1xuXG5kZW1vMS5tYWtlUHJvamVjdCh7XG4gIHRpdGxlOiBcIlRvLWRvIGFwcFwiLFxuICBkZXNjcmlwdGlvbjogXCJBIHBsYWNlIHRvIHN0b3JlIGFsbCBvZiB5b3VyIHRhc2tzXCIsXG4gIHRhc2tzOiBbXSxcbn0pO1xuXG5kZW1vMS5hZGRUYXNrKDAsIHtcbiAgdGl0bGU6IFwiTG9vayBhcm91bmRcIixcbiAgZGVzY3JpcHRpb246IFwiR2V0IHRvIGtub3cgdGhlIGFwcC5cIixcbn0pO1xuXG5kZW1vMS5tYWtlUHJvamVjdCh7XG4gIHRpdGxlOiBcIkV4ZXJjaXNlIHNvbHV0aW9uc1wiLFxuICBkZXNjcmlwdGlvbjogXCJGaWd1cmUgb3V0IGFuIG9wdGltYWwgc2V0dXAgZm9yIGVhY2ggbWFqb3IgbXVzY2xlIGdyb3VwLlwiLFxuICB0YXNrczogW10sXG59KTtcblxuZGVtbzEuYWRkVGFzaygxLCB7XG4gIHRpdGxlOiBcIkJ1eSBwdWxsZXlzXCIsXG4gIGRlc2NyaXB0aW9uOiBcIkZvciBleGVyY2lzZXMgdGhhdCByZXF1aXJlIGFuIHVwd2FyZCBkaXJjdGlvbiBvZiByZXNpc3RhbmNlLlwiLFxufSk7XG5cbmRlbW8xLmFkZFRhc2soMSwge1xuICB0aXRsZTogXCJHZXQgd2VpZ2h0IHBsYXRlc1wiLFxuICBkZXNjcmlwdGlvbjogXCJBIG1pbmltYWxpc3RpYyBzZXQgdGhhdCBhbGxvd3MgaW5jcmVtZW50cyBvZiA1bGIuXCIsXG59KTtcblxuZGVtbzEuYWRkVGFzaygxLCB7XG4gIHRpdGxlOiBcIkZpbmQgc3VwcGxpZXNcIixcbiAgZGVzY3JpcHRpb246IFwiVGhpbmdzIGxpa2Ugcm9wZSwgd2ViYmluZywgY2FyaWJpbmVycywgY2hhaW5zLCBmb2FtLi4uIFwiLFxufSk7XG5cbmRlbW8xLmFkZFRhc2soMSwge1xuICB0aXRsZTogXCJNYWtlIHNvbWUgZXF1aXBtZW50XCIsXG4gIGRlc2NyaXB0aW9uOiBcIkFzayBtb20gdG8gc2V3IHRvZ2V0aGVyIG15IGludmVudGlvbnNcIixcbn0pO1xuXG5kZW1vMS5tYWtlUHJvamVjdCh7XG4gIHRpdGxlOiBcIjI1MCBib3ggY2hhbGxlbmdlXCIsXG4gIGRlc2NyaXB0aW9uOiAnXCIuLi5kcmF3IGEgYm94IC0gdGhlbiBkbyBpdCBhZ2FpbiBhbm90aGVyIDI0OSB0aW1lcy5cIicsXG4gIHRhc2tzOiBbXSxcbn0pO1xuXG5kZW1vMS5hZGRUYXNrKDIsIHtcbiAgdGl0bGU6IFwiRmluZCBkcmF3aW5nIHN1cHBsaWVzXCIsXG4gIGRlc2NyaXB0aW9uOiBcImEgbGFyZ2Ugc3RhY2sgb2YgcHJpdGVyIHBhcGVyIGFuZCBhIC41IHBlbi5cIixcbn0pO1xuXG5kZW1vMS5hZGRUYXNrKDIsIHtcbiAgdGl0bGU6IFwiZHJhdyA1IGJveGVzIG9uIGEgcGFnZVwiLFxuICBkZXNjcmlwdGlvbjogXCI1IGxlYXZlcyBlbm91Z2ggcm9vbSB0byBjaGVjayB0aGUgY29udmVyZ2VuY2VzXCIsXG59KTtcblxuZGVtbzEuYWRkVGFzaygyLCB7XG4gIHRpdGxlOiBcIjUwJSBydWxlXCIsXG4gIGRlc2NyaXB0aW9uOlxuICAgIFwiRHJhdyB3aGF0ZXZlciB5b3Ugd2FudCBmb3IgdGhlIHNhbWUgYW1vdW50IG9mIHRpbWUgc3BlbnQgcHJhY3RpY2luZy5cIixcbn0pO1xuXG5kZW1vMS5wcmludFByb2plY3RzKCk7XG5cbmNvbnN0IHdvcmsgPSBtYWtlQ2F0ZWdvcnkoXCJXb3JrXCIpO1xuXG53b3JrLm1ha2VQcm9qZWN0KHtcbiAgdGl0bGU6IFwiQmxvY2sgV29ybGRcIixcbiAgZGVzY3JpcHRpb246IFwiYW4gb3JpZ2luYWwgc2FuZGJveCBnYW1lIHdoZXJlIGV2ZXJ5dGhpbmcgaXMgYmxvY2t5XCIsXG59KTtcblxucHJpbnRDYXRlZ29yaWVzKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=