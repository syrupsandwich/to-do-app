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
      return console.log(
        Error(`There are no projects in ${getTitle()} category.`)
      );
    }
    if (!message) {
      console.log(`A list of all projects in "${getTitle()}" category:`);
    } else {
      console.log(`${message} (${getTitle()} category)`);
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

  const projectFactory = ({ title = "", description = "" }) => {
    const tasks = [];
    const printTasks = (message = `Tasks in "${title}"`) => {
      if (tasks.length === 0) {
        return Error(`There are no tasks in "${title}".`);
      }
      console.log(`${message} ("${getTitle()}" category)`);
      tasks.forEach((task, index) => {
        console.log(" ", index, task);
      });
    };
    const addTask = (task = {}) => {
      tasks.push(taskFactory(task));
      printTasks(`A new task has been added to "${title}".`);
    };

    return { title, description, tasks, printTasks, addTask };
  };

  const makeProject = ({ title, description }) => {
    projects.push(projectFactory({ title, description }));
    printProjects("A new project has been made.");
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
    projects[projectIndex].printTasks(
      `The task at ${taskIndex} has been updated.`
    );
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
    projects[projectIndex].printTasks(`The task "${title}" has been removed.`);
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
    projects[projectIndexB].printTasks(
      `Task ${task.title} has been transfered.`
    );
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
    projects[projectIndex].projects("The task list has been reordered");
  };

  return {
    setTitle,
    getTitle,
    projects,
    printProjects,
    moveProject,
    removeProject,
    makeProject,
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

demo1.projects[0].addTask({
  title: "Look around",
  description: "Get to know the app.",
});

demo1.makeProject({
  title: "Exercise solutions",
  description: "Figure out an optimal setup for each major muscle group.",
  tasks: [],
});

demo1.projects[1].addTask({
  title: "Buy pulleys",
  description: "For exercises that require an upward dirction of resistance.",
});

demo1.projects[1].addTask({
  title: "Get weight plates",
  description: "A minimalistic set that allows increments of 5lb.",
});

demo1.projects[1].addTask({
  title: "Find supplies",
  description: "Things like rope, webbing, caribiners, chains, foam... ",
});

demo1.projects[1].addTask({
  title: "Make some equipment",
  description: "Ask mom to sew together my inventions",
});

demo1.makeProject({
  title: "250 box challenge",
  description: '"...draw a box - then do it again another 249 times."',
  tasks: [],
});

demo1.projects[2].addTask({
  title: "Find drawing supplies",
  description: "a large stack of priter paper and a .5 pen.",
});

demo1.projects[2].addTask({
  title: "draw 5 boxes on a page",
  description: "5 leaves enough room to check the convergences",
});

demo1.projects[2].addTask({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ044QjtBQUM4Qzs7QUFFNUUsY0FBYyx1REFBWTs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUEsYUFBYSx1REFBWTs7QUFFekI7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCwwREFBZTs7QUFFZiwwREFBZTtBQUNmLDBEQUFlOztBQUVmO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsZS9kZWZhdWx0LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvZ3JhbS90by1kby5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvZ3JhbS9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImNvbnN0IGNhdGVnb3J5RmFjdG9yeSA9ICh0aXRsZSkgPT4ge1xuICBjb25zdCBzZXRUaXRsZSA9IChpbnB1dCkgPT4ge1xuICAgIGlmICh0eXBlb2YgaW5wdXQgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZyhFcnJvcihcIlRoZSBzcGVjaWZpZWQgdGl0bGUgaXMgbm90IGEgc3RyaW5nLlwiKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpdGxlID0gaW5wdXQ7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGdldFRpdGxlID0gKCkgPT4ge1xuICAgIHJldHVybiB0aXRsZTtcbiAgfTtcblxuICBjb25zdCBwcm9qZWN0cyA9IFtdO1xuXG4gIGNvbnN0IHByaW50UHJvamVjdHMgPSAobWVzc2FnZSkgPT4ge1xuICAgIGlmIChwcm9qZWN0cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZyhcbiAgICAgICAgRXJyb3IoYFRoZXJlIGFyZSBubyBwcm9qZWN0cyBpbiAke2dldFRpdGxlKCl9IGNhdGVnb3J5LmApXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoIW1lc3NhZ2UpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBBIGxpc3Qgb2YgYWxsIHByb2plY3RzIGluIFwiJHtnZXRUaXRsZSgpfVwiIGNhdGVnb3J5OmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhgJHttZXNzYWdlfSAoJHtnZXRUaXRsZSgpfSBjYXRlZ29yeSlgKTtcbiAgICB9XG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiIFwiLCBpbmRleCwgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShwcm9qZWN0KSkpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IG1vdmVQcm9qZWN0ID0gKHBvc2l0aW9uQSwgcG9zaXRpb25CKSA9PiB7XG4gICAgaWYgKCFwcm9qZWN0c1twb3NpdGlvbkFdKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5sb2coRXJyb3IoXCJUaGUgc3BlY2lmaWVkIG9yaWdpbiBpbmRleCBpcyBvdXQgb2YgcmFuZ2UuXCIpKTtcbiAgICB9XG4gICAgaWYgKCFwcm9qZWN0c1twb3NpdGlvbkJdKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5sb2coXG4gICAgICAgIEVycm9yKFwiVGhlIHNwZWNpZmllZCBkZXN0aW5hdGlvbiBpbmRleCBpcyBvdXQgb2YgcmFuZ2UuXCIpXG4gICAgICApO1xuICAgIH1cbiAgICBsZXQgb2JqZWN0QSA9IHByb2plY3RzLnNwbGljZShwb3NpdGlvbkEsIDEpWzBdO1xuICAgIHByb2plY3RzLnNwbGljZShwb3NpdGlvbkIsIDAsIG9iamVjdEEpO1xuICAgIHByaW50UHJvamVjdHMoXCJUaGUgcHJvamVjdHMgaGF2ZSBiZWVuIHJlb3JkZXJlZC5cIik7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChpbmRleCkgPT4ge1xuICAgIGlmICghcHJvamVjdHNbaW5kZXhdKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5sb2coRXJyb3IoXCJUaGUgc3BlY2lmaWVkIGluZGV4IGlzIG91dCBvZiByYW5nZS5cIikpO1xuICAgIH1cbiAgICBsZXQgdGl0bGUgPSBwcm9qZWN0c1tpbmRleF0udGl0bGU7XG4gICAgcHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICBwcmludFByb2plY3RzKGBQcm9qZWN0IFwiJHt0aXRsZX1cIiBoYXMgYmVlbiByZW1vdmVkLmApO1xuICB9O1xuXG4gIGNvbnN0IHRhc2tGYWN0b3J5ID0gKHtcbiAgICB0aXRsZSA9IFwiXCIsXG4gICAgZGVzY3JpcHRpb24gPSBcIlwiLFxuICAgIGR1ZURhdGUgPSBcIlwiLFxuICAgIHByaW9yaXR5ID0gXCJcIixcbiAgfSkgPT4ge1xuICAgIGxldCB0YXNrU3RhdHVzID0gZmFsc2U7XG4gICAgY29uc3QgY2hlY2tDb21wbGV0aW9uU3RhdHVzID0gKCkgPT4ge1xuICAgICAgaWYgKHRhc2tTdGF0dXMpIHtcbiAgICAgICAgY29uc29sZS5sb2coYFRhc2sgXCIke3RpdGxlfVwiIGhhcyBiZWVuIGNvbXBsZXRlZC4gOkRgKTtcbiAgICAgIH1cbiAgICAgIGlmICghdGFza1N0YXR1cykge1xuICAgICAgICBjb25zb2xlLmxvZyhgVGFzayBcIiR7dGl0bGV9XCIgaGFzIG5vdCBiZWVuIGNvbXBsZXRlZC4gOi9gKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0YXNrU3RhdHVzO1xuICAgIH07XG4gICAgY29uc3QgY2hhbmdlQ29tcGxldGlvblN0YXR1cyA9ICgpID0+IHtcbiAgICAgIHRhc2tTdGF0dXMgPSB0YXNrU3RhdHVzID8gZmFsc2UgOiB0cnVlO1xuICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBkdWVEYXRlLFxuICAgICAgcHJpb3JpdHksXG4gICAgICBjaGVja0NvbXBsZXRpb25TdGF0dXMsXG4gICAgICBjaGFuZ2VDb21wbGV0aW9uU3RhdHVzLFxuICAgIH07XG4gIH07XG5cbiAgY29uc3QgcHJvamVjdEZhY3RvcnkgPSAoeyB0aXRsZSA9IFwiXCIsIGRlc2NyaXB0aW9uID0gXCJcIiB9KSA9PiB7XG4gICAgY29uc3QgdGFza3MgPSBbXTtcbiAgICBjb25zdCBwcmludFRhc2tzID0gKG1lc3NhZ2UgPSBgVGFza3MgaW4gXCIke3RpdGxlfVwiYCkgPT4ge1xuICAgICAgaWYgKHRhc2tzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gRXJyb3IoYFRoZXJlIGFyZSBubyB0YXNrcyBpbiBcIiR7dGl0bGV9XCIuYCk7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhgJHttZXNzYWdlfSAoXCIke2dldFRpdGxlKCl9XCIgY2F0ZWdvcnkpYCk7XG4gICAgICB0YXNrcy5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIiBcIiwgaW5kZXgsIHRhc2spO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICBjb25zdCBhZGRUYXNrID0gKHRhc2sgPSB7fSkgPT4ge1xuICAgICAgdGFza3MucHVzaCh0YXNrRmFjdG9yeSh0YXNrKSk7XG4gICAgICBwcmludFRhc2tzKGBBIG5ldyB0YXNrIGhhcyBiZWVuIGFkZGVkIHRvIFwiJHt0aXRsZX1cIi5gKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCB0YXNrcywgcHJpbnRUYXNrcywgYWRkVGFzayB9O1xuICB9O1xuXG4gIGNvbnN0IG1ha2VQcm9qZWN0ID0gKHsgdGl0bGUsIGRlc2NyaXB0aW9uIH0pID0+IHtcbiAgICBwcm9qZWN0cy5wdXNoKHByb2plY3RGYWN0b3J5KHsgdGl0bGUsIGRlc2NyaXB0aW9uIH0pKTtcbiAgICBwcmludFByb2plY3RzKFwiQSBuZXcgcHJvamVjdCBoYXMgYmVlbiBtYWRlLlwiKTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVQcm9qZWN0ID0gKGluZGV4LCB7IHRpdGxlLCBkZXNjcmlwdGlvbiB9KSA9PiB7XG4gICAgaWYgKCFwcm9qZWN0c1tpbmRleF0pIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZyhFcnJvcihcIlRoZSBzcGVjaWZpZWQgcHJvamVjdCBpbmRleCBpcyBvdXQgb2YgcmFuZ2UuXCIpKTtcbiAgICB9XG4gICAgaWYgKHRpdGxlKSB7XG4gICAgICBwcm9qZWN0c1tpbmRleF0udGl0bGUgPSB0aXRsZTtcbiAgICB9XG4gICAgaWYgKGRlc2NyaXB0aW9uKSB7XG4gICAgICBwcm9qZWN0c1tpbmRleF0uZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB9XG4gICAgcHJpbnRQcm9qZWN0cyhgVGhlIHByb2plY3QgYXQgJHtpbmRleH0gaGFzIGJlZW4gdXBkYXRlZC5gKTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVUYXNrID0gKFxuICAgIHByb2plY3RJbmRleCxcbiAgICB0YXNrSW5kZXgsXG4gICAgeyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5IH1cbiAgKSA9PiB7XG4gICAgaWYgKCFwcm9qZWN0c1twcm9qZWN0SW5kZXhdKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5sb2coRXJyb3IoXCJUaGUgc3BlY2lmaWVkIHByb2plY3QgaW5kZXggaXMgb3V0IG9mIHJhbmdlLlwiKSk7XG4gICAgfVxuICAgIGlmICghcHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrc1t0YXNrSW5kZXhdKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5sb2coRXJyb3IoXCJUaGUgc3BlY2lmaWVkIHRhc2sgaW5kZXggaXMgb3V0IG9mIHJhbmdlLlwiKSk7XG4gICAgfVxuICAgIGxldCB0YXNrID0gcHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrc1t0YXNrSW5kZXhdO1xuICAgIGlmICh0aXRsZSkge1xuICAgICAgdGFzay50aXRsZSA9IHRpdGxlO1xuICAgIH1cbiAgICBpZiAoZGVzY3JpcHRpb24pIHtcbiAgICAgIHRhc2suZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB9XG4gICAgaWYgKGR1ZURhdGUpIHtcbiAgICAgIHRhc2suZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgfVxuICAgIGlmIChwcmlvcml0eSkge1xuICAgICAgdGFzay5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIH1cbiAgICBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnByaW50VGFza3MoXG4gICAgICBgVGhlIHRhc2sgYXQgJHt0YXNrSW5kZXh9IGhhcyBiZWVuIHVwZGF0ZWQuYFxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlVGFzayA9IChwcm9qZWN0SW5kZXgsIHRhc2tJbmRleCkgPT4ge1xuICAgIGlmICghcHJvamVjdHNbcHJvamVjdEluZGV4XSkge1xuICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKEVycm9yKFwiVGhlIHNwZWNpZmllZCBwcm9qZWN0IGluZGV4IGlzIG91dCBvZiByYW5nZS5cIikpO1xuICAgIH1cbiAgICBpZiAoIXByb2plY3RzW3Byb2plY3RJbmRleF0udGFza3NbdGFza0luZGV4XSkge1xuICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKEVycm9yKFwiVGhlIHNwZWNpZmllZCB0YXNrIGluZGV4IGlzIG91dCBvZiByYW5nZS5cIikpO1xuICAgIH1cbiAgICBsZXQgdGl0bGUgPSBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRhc2tzW3Rhc2tJbmRleF0udGl0bGU7XG4gICAgcHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrcy5zcGxpY2UodGFza0luZGV4LCAxKTtcbiAgICBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnByaW50VGFza3MoYFRoZSB0YXNrIFwiJHt0aXRsZX1cIiBoYXMgYmVlbiByZW1vdmVkLmApO1xuICB9O1xuXG4gIGNvbnN0IHRyYW5zZmVyVGFzayA9IChwcm9qZWN0SW5kZXhBLCBwcm9qZWN0SW5kZXhCLCB0YXNrSW5kZXgpID0+IHtcbiAgICBpZiAoIXByb2plY3RzW3Byb2plY3RJbmRleEFdKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5sb2coRXJyb3IoXCJUaGUgc3BlY2lmaWVkIG9yaWdpbiBpbmRleCBpcyBvdXQgb2YgcmFuZ2UuXCIpKTtcbiAgICB9XG4gICAgaWYgKCFwcm9qZWN0c1twcm9qZWN0SW5kZXhCXSkge1xuICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKFxuICAgICAgICBFcnJvcihcIlRoZSBzcGVjaWZpZWQgZGVzdGluYXRpb24gaW5kZXggaXMgb3V0IG9mIHJhbmdlLlwiKVxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKCFwcm9qZWN0c1twcm9qZWN0SW5kZXhBXS50YXNrc1t0YXNrSW5kZXhdKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5sb2coRXJyb3IoXCJUaGUgc3BlY2lmaWVkIHRhc2sgaW5kZXggaXMgb3V0IG9mIHJhbmdlLlwiKSk7XG4gICAgfVxuICAgIGxldCB0YXNrID0gcHJvamVjdHNbcHJvamVjdEluZGV4QV0udGFza3Muc3BsaWNlKHRhc2tJbmRleCwgMSlbMF07XG4gICAgcHJvamVjdHNbcHJvamVjdEluZGV4Ql0udGFza3MucHVzaCh0YXNrRmFjdG9yeSh0YXNrKSk7XG4gICAgcHJvamVjdHNbcHJvamVjdEluZGV4Ql0ucHJpbnRUYXNrcyhcbiAgICAgIGBUYXNrICR7dGFzay50aXRsZX0gaGFzIGJlZW4gdHJhbnNmZXJlZC5gXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBtb3ZlVGFzayA9IChwcm9qZWN0SW5kZXgsIHBvc2l0aW9uQSwgcG9zaXRpb25CKSA9PiB7XG4gICAgaWYgKCFwcm9qZWN0c1twcm9qZWN0SW5kZXhdKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5sb2coRXJyb3IoXCJUaGUgc3BlY2lmaWVkIHByb2plY3QgaW5kZXggaXMgb3V0IG9mIHJhbmdlLlwiKSk7XG4gICAgfVxuICAgIGlmICghcHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrc1twb3NpdGlvbkFdKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5sb2coXG4gICAgICAgIEVycm9yKFwiVGhlIGZpcnN0IHNwZWNpZmllZCB0YXNrIGluZGV4IGlzIG91dCBvZiByYW5nZS5cIilcbiAgICAgICk7XG4gICAgfVxuICAgIGlmICghcHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrc1twb3NpdGlvbkJdKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5sb2coXG4gICAgICAgIEVycm9yKFwiVGhlIHNlY29uZCBzcGVjaWZpZWQgdGFzayBpbmRleCBpcyBvdXQgb2YgcmFuZ2UuXCIpXG4gICAgICApO1xuICAgIH1cbiAgICBsZXQgdGFzayA9IHByb2plY3RzW3Byb2plY3RJbmRleF0udGFza3Muc3BsaWNlKHBvc2l0aW9uQSwgMSlbMF07XG4gICAgcHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrcy5zcGxpY2UocG9zaXRpb25CLCAwLCB0YXNrKTtcbiAgICBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnByb2plY3RzKFwiVGhlIHRhc2sgbGlzdCBoYXMgYmVlbiByZW9yZGVyZWRcIik7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBzZXRUaXRsZSxcbiAgICBnZXRUaXRsZSxcbiAgICBwcm9qZWN0cyxcbiAgICBwcmludFByb2plY3RzLFxuICAgIG1vdmVQcm9qZWN0LFxuICAgIHJlbW92ZVByb2plY3QsXG4gICAgbWFrZVByb2plY3QsXG4gICAgdXBkYXRlUHJvamVjdCxcbiAgICB1cGRhdGVUYXNrLFxuICAgIHJlbW92ZVRhc2ssXG4gICAgdHJhbnNmZXJUYXNrLFxuICAgIG1vdmVUYXNrLFxuICB9O1xufTtcblxuY29uc3QgY2F0ZWdvcmllcyA9IFtdO1xuXG5jb25zdCBtYWtlQ2F0ZWdvcnkgPSAodGl0bGUpID0+IHtcbiAgbGV0IHByb2plY3QgPSBjYXRlZ29yeUZhY3RvcnkodGl0bGUpO1xuICBjYXRlZ29yaWVzLnB1c2gocHJvamVjdCk7XG4gIHJldHVybiBjYXRlZ29yaWVzW2NhdGVnb3JpZXMubGVuZ3RoIC0gMV07XG59O1xuXG5jb25zdCBwcmludENhdGVnb3JpZXMgPSAobWVzc2FnZSkgPT4ge1xuICBpZiAoIW1lc3NhZ2UpIHtcbiAgICBjb25zb2xlLmxvZyhcIkEgbGlzdCBvZiBhbGwgY2F0ZWdvcmllczpcIik7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coXCJtZXNzYWdlXCIpO1xuICB9XG4gIGNhdGVnb3JpZXMuZm9yRWFjaCgoY2F0ZWdvcnksIGluZGV4KSA9PiB7XG4gICAgY29uc29sZS5sb2coXG4gICAgICBcIiBcIixcbiAgICAgIGAke2luZGV4fTpgLFxuICAgICAgY2F0ZWdvcnkuZ2V0VGl0bGUoKSxcbiAgICAgIGAoJHtjYXRlZ29yeS5wcm9qZWN0cy5sZW5ndGh9IHByb2plY3RzKWBcbiAgICApO1xuICB9KTtcbn07XG5cbmNvbnN0IHRyYW5zZmVyUHJvamVjdCA9IChjYXRlZ29yeUluZGV4QSwgY2F0ZWdvcnlJbmRleEIsIHByb2plY3RJbmRleCkgPT4ge1xuICBpZiAoIWNhdGVnb3JpZXNbY2F0ZWdvcnlJbmRleEFdKSB7XG4gICAgcmV0dXJuIGNvbnNvbGUubG9nKEVycm9yKFwiVGhlIHNwZWNpZmllZCBvcmlnaW4gaW5kZXggaXMgb3V0IG9mIHJhbmdlLlwiKSk7XG4gIH1cbiAgaWYgKCFjYXRlZ29yaWVzW2NhdGVnb3J5SW5kZXhCXSkge1xuICAgIHJldHVybiBjb25zb2xlLmxvZyhcbiAgICAgIEVycm9yKFwiVGhlIHNwZWNpZmllZCBkZXN0aW5hdGlvbiBpbmRleCBpcyBvdXQgb2YgcmFuZ2UuXCIpXG4gICAgKTtcbiAgfVxuICBsZXQgcHJvamVjdCA9IGNhdGVnb3JpZXNbY2F0ZWdvcnlJbmRleEFdLnByb2plY3RzLnNwbGljZShwcm9qZWN0SW5kZXgsIDEpWzBdO1xuICBjYXRlZ29yaWVzW2NhdGVnb3J5SW5kZXhCXS5wcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICBjYXRlZ29yaWVzW2NhdGVnb3J5SW5kZXhCXS5wcmludFByb2plY3RzKGBUaGUgcHJvamVjdCBoYXMgYmVlbiBhZGRlZC5gKTtcbn07XG5cbmV4cG9ydCB7IG1ha2VDYXRlZ29yeSwgcHJpbnRDYXRlZ29yaWVzLCB0cmFuc2ZlclByb2plY3QgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi4vc3R5bGUvZGVmYXVsdC5jc3NcIjtcbmltcG9ydCB7IG1ha2VDYXRlZ29yeSwgcHJpbnRDYXRlZ29yaWVzLCB0cmFuc2ZlclByb2plY3QgfSBmcm9tIFwiLi90by1kby5qc1wiO1xuXG5jb25zdCBkZW1vMSA9IG1ha2VDYXRlZ29yeShcIkRlbW9cIik7XG5cbmRlbW8xLm1ha2VQcm9qZWN0KHtcbiAgdGl0bGU6IFwiVG8tZG8gYXBwXCIsXG4gIGRlc2NyaXB0aW9uOiBcIkEgcGxhY2UgdG8gc3RvcmUgYWxsIG9mIHlvdXIgdGFza3NcIixcbiAgdGFza3M6IFtdLFxufSk7XG5cbmRlbW8xLnByb2plY3RzWzBdLmFkZFRhc2soe1xuICB0aXRsZTogXCJMb29rIGFyb3VuZFwiLFxuICBkZXNjcmlwdGlvbjogXCJHZXQgdG8ga25vdyB0aGUgYXBwLlwiLFxufSk7XG5cbmRlbW8xLm1ha2VQcm9qZWN0KHtcbiAgdGl0bGU6IFwiRXhlcmNpc2Ugc29sdXRpb25zXCIsXG4gIGRlc2NyaXB0aW9uOiBcIkZpZ3VyZSBvdXQgYW4gb3B0aW1hbCBzZXR1cCBmb3IgZWFjaCBtYWpvciBtdXNjbGUgZ3JvdXAuXCIsXG4gIHRhc2tzOiBbXSxcbn0pO1xuXG5kZW1vMS5wcm9qZWN0c1sxXS5hZGRUYXNrKHtcbiAgdGl0bGU6IFwiQnV5IHB1bGxleXNcIixcbiAgZGVzY3JpcHRpb246IFwiRm9yIGV4ZXJjaXNlcyB0aGF0IHJlcXVpcmUgYW4gdXB3YXJkIGRpcmN0aW9uIG9mIHJlc2lzdGFuY2UuXCIsXG59KTtcblxuZGVtbzEucHJvamVjdHNbMV0uYWRkVGFzayh7XG4gIHRpdGxlOiBcIkdldCB3ZWlnaHQgcGxhdGVzXCIsXG4gIGRlc2NyaXB0aW9uOiBcIkEgbWluaW1hbGlzdGljIHNldCB0aGF0IGFsbG93cyBpbmNyZW1lbnRzIG9mIDVsYi5cIixcbn0pO1xuXG5kZW1vMS5wcm9qZWN0c1sxXS5hZGRUYXNrKHtcbiAgdGl0bGU6IFwiRmluZCBzdXBwbGllc1wiLFxuICBkZXNjcmlwdGlvbjogXCJUaGluZ3MgbGlrZSByb3BlLCB3ZWJiaW5nLCBjYXJpYmluZXJzLCBjaGFpbnMsIGZvYW0uLi4gXCIsXG59KTtcblxuZGVtbzEucHJvamVjdHNbMV0uYWRkVGFzayh7XG4gIHRpdGxlOiBcIk1ha2Ugc29tZSBlcXVpcG1lbnRcIixcbiAgZGVzY3JpcHRpb246IFwiQXNrIG1vbSB0byBzZXcgdG9nZXRoZXIgbXkgaW52ZW50aW9uc1wiLFxufSk7XG5cbmRlbW8xLm1ha2VQcm9qZWN0KHtcbiAgdGl0bGU6IFwiMjUwIGJveCBjaGFsbGVuZ2VcIixcbiAgZGVzY3JpcHRpb246ICdcIi4uLmRyYXcgYSBib3ggLSB0aGVuIGRvIGl0IGFnYWluIGFub3RoZXIgMjQ5IHRpbWVzLlwiJyxcbiAgdGFza3M6IFtdLFxufSk7XG5cbmRlbW8xLnByb2plY3RzWzJdLmFkZFRhc2soe1xuICB0aXRsZTogXCJGaW5kIGRyYXdpbmcgc3VwcGxpZXNcIixcbiAgZGVzY3JpcHRpb246IFwiYSBsYXJnZSBzdGFjayBvZiBwcml0ZXIgcGFwZXIgYW5kIGEgLjUgcGVuLlwiLFxufSk7XG5cbmRlbW8xLnByb2plY3RzWzJdLmFkZFRhc2soe1xuICB0aXRsZTogXCJkcmF3IDUgYm94ZXMgb24gYSBwYWdlXCIsXG4gIGRlc2NyaXB0aW9uOiBcIjUgbGVhdmVzIGVub3VnaCByb29tIHRvIGNoZWNrIHRoZSBjb252ZXJnZW5jZXNcIixcbn0pO1xuXG5kZW1vMS5wcm9qZWN0c1syXS5hZGRUYXNrKHtcbiAgdGl0bGU6IFwiNTAlIHJ1bGVcIixcbiAgZGVzY3JpcHRpb246XG4gICAgXCJEcmF3IHdoYXRldmVyIHlvdSB3YW50IGZvciB0aGUgc2FtZSBhbW91bnQgb2YgdGltZSBzcGVudCBwcmFjdGljaW5nLlwiLFxufSk7XG5cbmRlbW8xLnByaW50UHJvamVjdHMoKTtcblxuY29uc3Qgd29yayA9IG1ha2VDYXRlZ29yeShcIldvcmtcIik7XG5cbndvcmsubWFrZVByb2plY3Qoe1xuICB0aXRsZTogXCJCbG9jayBXb3JsZFwiLFxuICBkZXNjcmlwdGlvbjogXCJhbiBvcmlnaW5hbCBzYW5kYm94IGdhbWUgd2hlcmUgZXZlcnl0aGluZyBpcyBibG9ja3lcIixcbn0pO1xuXG5wcmludENhdGVnb3JpZXMoKTtcblxudHJhbnNmZXJQcm9qZWN0KDAsIDEsIDApO1xucHJpbnRDYXRlZ29yaWVzKCk7XG5cbmRlbW8xLnByb2plY3RzWzBdLnByaW50VGFza3MoKTtcbmRlbW8xLnByaW50UHJvamVjdHMoKTtcbmRlbW8xLnRyYW5zZmVyVGFzaygwLCAxLCAwKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==