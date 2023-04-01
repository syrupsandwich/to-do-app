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
const categoryFactory = (category) => {
  const renameCategory = (input) => {
    if (typeof input !== "string") {
      return console.log(Error("The specified title is not a string."));
    } else {
      category = input;
    }
  };

  let getTitle = () => {
    return category;
  };

  const projects = [];

  const printProjects = (message) => {
    if (projects.length === 0) {
      return console.log(Error(`${category} : empty`));
    }
    if (!message) {
      console.log(`${category} : A list of all projects:`);
    } else {
      console.log(`${category} : ${message}`);
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
      console.log(`${category} : ${message}`);
      tasks.forEach((task, index) => {
        console.log(" ", index, task);
      });
    };
    const makeTask = (task = {}) => {
      tasks.push(taskFactory(task));
      printTasks(`A new task has been added to "${title}".`);
    };
    const removeTask = (index) => {
      if (!tasks[index]) {
        return console.log(Error("The specified task index is out of range."));
      }
      let title = tasks[index].title;
      tasks.splice(index, 1);
      printTasks(`The task "${title}" has been removed.`);
    };

    return { title, description, tasks, printTasks, makeTask, removeTask };
  };

  const makeProject = ({ title, description }) => {
    projects.push(projectFactory({ title, description }));
    printProjects("A new project has been made.");
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
    renameCategory,
    getTitle,
    projects,
    printProjects,
    moveProject,
    removeProject,
    makeProject,
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

demo1.projects[0].makeTask({
  title: "Look around",
  description: "Get to know the app.",
});

demo1.makeProject({
  title: "Exercise solutions",
  description: "Figure out an optimal setup for each major muscle group.",
  tasks: [],
});

demo1.projects[1].makeTask({
  title: "Buy pulleys",
  description: "For exercises that require an upward dirction of resistance.",
});

demo1.projects[1].makeTask({
  title: "Get weight plates",
  description: "A minimalistic set that allows increments of 5lb.",
});

demo1.projects[1].makeTask({
  title: "Find supplies",
  description: "Things like rope, webbing, caribiners, chains, foam... ",
});

demo1.projects[1].makeTask({
  title: "Make some equipment",
  description: "Ask mom to sew together my inventions",
});

demo1.makeProject({
  title: "250 box challenge",
  description: '"...draw a box - then do it again another 249 times."',
  tasks: [],
});

demo1.projects[2].makeTask({
  title: "Find drawing supplies",
  description: "a large stack of priter paper and a .5 pen.",
});

demo1.projects[2].makeTask({
  title: "draw 5 boxes on a page",
  description: "5 leaves enough room to check the convergences",
});

demo1.projects[2].makeTask({
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

demo1.projects[1].title = "Institutionalized";
demo1.printProjects();

demo1.projects[0].tasks[0].title = "chill";
demo1.projects[0].tasks[0].description = "space out to some bops";
demo1.projects[0].tasks[0].priority = "important";
demo1.projects[0].printTasks();

demo1.projects[0].removeTask(0);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQSxhQUFhLHVEQUFZOztBQUV6QjtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELDBEQUFlOztBQUVmLDBEQUFlO0FBQ2YsMERBQWU7O0FBRWY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUvZGVmYXVsdC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2dyYW0vdG8tZG8uanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2dyYW0vbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJjb25zdCBjYXRlZ29yeUZhY3RvcnkgPSAoY2F0ZWdvcnkpID0+IHtcbiAgY29uc3QgcmVuYW1lQ2F0ZWdvcnkgPSAoaW5wdXQpID0+IHtcbiAgICBpZiAodHlwZW9mIGlucHV0ICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5sb2coRXJyb3IoXCJUaGUgc3BlY2lmaWVkIHRpdGxlIGlzIG5vdCBhIHN0cmluZy5cIikpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYXRlZ29yeSA9IGlucHV0O1xuICAgIH1cbiAgfTtcblxuICBsZXQgZ2V0VGl0bGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGNhdGVnb3J5O1xuICB9O1xuXG4gIGNvbnN0IHByb2plY3RzID0gW107XG5cbiAgY29uc3QgcHJpbnRQcm9qZWN0cyA9IChtZXNzYWdlKSA9PiB7XG4gICAgaWYgKHByb2plY3RzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKEVycm9yKGAke2NhdGVnb3J5fSA6IGVtcHR5YCkpO1xuICAgIH1cbiAgICBpZiAoIW1lc3NhZ2UpIHtcbiAgICAgIGNvbnNvbGUubG9nKGAke2NhdGVnb3J5fSA6IEEgbGlzdCBvZiBhbGwgcHJvamVjdHM6YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKGAke2NhdGVnb3J5fSA6ICR7bWVzc2FnZX1gKTtcbiAgICB9XG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiIFwiLCBpbmRleCwgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShwcm9qZWN0KSkpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IG1vdmVQcm9qZWN0ID0gKHBvc2l0aW9uQSwgcG9zaXRpb25CKSA9PiB7XG4gICAgaWYgKCFwcm9qZWN0c1twb3NpdGlvbkFdKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5sb2coRXJyb3IoXCJUaGUgc3BlY2lmaWVkIG9yaWdpbiBpbmRleCBpcyBvdXQgb2YgcmFuZ2UuXCIpKTtcbiAgICB9XG4gICAgaWYgKCFwcm9qZWN0c1twb3NpdGlvbkJdKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5sb2coXG4gICAgICAgIEVycm9yKFwiVGhlIHNwZWNpZmllZCBkZXN0aW5hdGlvbiBpbmRleCBpcyBvdXQgb2YgcmFuZ2UuXCIpXG4gICAgICApO1xuICAgIH1cbiAgICBsZXQgb2JqZWN0QSA9IHByb2plY3RzLnNwbGljZShwb3NpdGlvbkEsIDEpWzBdO1xuICAgIHByb2plY3RzLnNwbGljZShwb3NpdGlvbkIsIDAsIG9iamVjdEEpO1xuICAgIHByaW50UHJvamVjdHMoXCJUaGUgcHJvamVjdHMgaGF2ZSBiZWVuIHJlb3JkZXJlZC5cIik7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChpbmRleCkgPT4ge1xuICAgIGlmICghcHJvamVjdHNbaW5kZXhdKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5sb2coRXJyb3IoXCJUaGUgc3BlY2lmaWVkIGluZGV4IGlzIG91dCBvZiByYW5nZS5cIikpO1xuICAgIH1cbiAgICBsZXQgdGl0bGUgPSBwcm9qZWN0c1tpbmRleF0udGl0bGU7XG4gICAgcHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICBwcmludFByb2plY3RzKGBQcm9qZWN0IFwiJHt0aXRsZX1cIiBoYXMgYmVlbiByZW1vdmVkLmApO1xuICB9O1xuXG4gIGNvbnN0IHRhc2tGYWN0b3J5ID0gKHtcbiAgICB0aXRsZSA9IFwiXCIsXG4gICAgZGVzY3JpcHRpb24gPSBcIlwiLFxuICAgIGR1ZURhdGUgPSBcIlwiLFxuICAgIHByaW9yaXR5ID0gXCJcIixcbiAgfSkgPT4ge1xuICAgIGxldCB0YXNrU3RhdHVzID0gZmFsc2U7XG4gICAgY29uc3QgY2hlY2tDb21wbGV0aW9uU3RhdHVzID0gKCkgPT4ge1xuICAgICAgaWYgKHRhc2tTdGF0dXMpIHtcbiAgICAgICAgY29uc29sZS5sb2coYFRhc2sgXCIke3RpdGxlfVwiIGhhcyBiZWVuIGNvbXBsZXRlZC4gOkRgKTtcbiAgICAgIH1cbiAgICAgIGlmICghdGFza1N0YXR1cykge1xuICAgICAgICBjb25zb2xlLmxvZyhgVGFzayBcIiR7dGl0bGV9XCIgaGFzIG5vdCBiZWVuIGNvbXBsZXRlZC4gOi9gKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0YXNrU3RhdHVzO1xuICAgIH07XG4gICAgY29uc3QgY2hhbmdlQ29tcGxldGlvblN0YXR1cyA9ICgpID0+IHtcbiAgICAgIHRhc2tTdGF0dXMgPSB0YXNrU3RhdHVzID8gZmFsc2UgOiB0cnVlO1xuICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBkdWVEYXRlLFxuICAgICAgcHJpb3JpdHksXG4gICAgICBjaGVja0NvbXBsZXRpb25TdGF0dXMsXG4gICAgICBjaGFuZ2VDb21wbGV0aW9uU3RhdHVzLFxuICAgIH07XG4gIH07XG5cbiAgY29uc3QgcHJvamVjdEZhY3RvcnkgPSAoeyB0aXRsZSA9IFwiXCIsIGRlc2NyaXB0aW9uID0gXCJcIiB9KSA9PiB7XG4gICAgY29uc3QgdGFza3MgPSBbXTtcbiAgICBjb25zdCBwcmludFRhc2tzID0gKG1lc3NhZ2UgPSBgVGFza3MgaW4gXCIke3RpdGxlfVwiYCkgPT4ge1xuICAgICAgaWYgKHRhc2tzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gRXJyb3IoYFRoZXJlIGFyZSBubyB0YXNrcyBpbiBcIiR7dGl0bGV9XCIuYCk7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhgJHtjYXRlZ29yeX0gOiAke21lc3NhZ2V9YCk7XG4gICAgICB0YXNrcy5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIiBcIiwgaW5kZXgsIHRhc2spO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICBjb25zdCBtYWtlVGFzayA9ICh0YXNrID0ge30pID0+IHtcbiAgICAgIHRhc2tzLnB1c2godGFza0ZhY3RvcnkodGFzaykpO1xuICAgICAgcHJpbnRUYXNrcyhgQSBuZXcgdGFzayBoYXMgYmVlbiBhZGRlZCB0byBcIiR7dGl0bGV9XCIuYCk7XG4gICAgfTtcbiAgICBjb25zdCByZW1vdmVUYXNrID0gKGluZGV4KSA9PiB7XG4gICAgICBpZiAoIXRhc2tzW2luZGV4XSkge1xuICAgICAgICByZXR1cm4gY29uc29sZS5sb2coRXJyb3IoXCJUaGUgc3BlY2lmaWVkIHRhc2sgaW5kZXggaXMgb3V0IG9mIHJhbmdlLlwiKSk7XG4gICAgICB9XG4gICAgICBsZXQgdGl0bGUgPSB0YXNrc1tpbmRleF0udGl0bGU7XG4gICAgICB0YXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgcHJpbnRUYXNrcyhgVGhlIHRhc2sgXCIke3RpdGxlfVwiIGhhcyBiZWVuIHJlbW92ZWQuYCk7XG4gICAgfTtcblxuICAgIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgdGFza3MsIHByaW50VGFza3MsIG1ha2VUYXNrLCByZW1vdmVUYXNrIH07XG4gIH07XG5cbiAgY29uc3QgbWFrZVByb2plY3QgPSAoeyB0aXRsZSwgZGVzY3JpcHRpb24gfSkgPT4ge1xuICAgIHByb2plY3RzLnB1c2gocHJvamVjdEZhY3RvcnkoeyB0aXRsZSwgZGVzY3JpcHRpb24gfSkpO1xuICAgIHByaW50UHJvamVjdHMoXCJBIG5ldyBwcm9qZWN0IGhhcyBiZWVuIG1hZGUuXCIpO1xuICB9O1xuXG4gIGNvbnN0IHRyYW5zZmVyVGFzayA9IChwcm9qZWN0SW5kZXhBLCBwcm9qZWN0SW5kZXhCLCB0YXNrSW5kZXgpID0+IHtcbiAgICBpZiAoIXByb2plY3RzW3Byb2plY3RJbmRleEFdKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5sb2coRXJyb3IoXCJUaGUgc3BlY2lmaWVkIG9yaWdpbiBpbmRleCBpcyBvdXQgb2YgcmFuZ2UuXCIpKTtcbiAgICB9XG4gICAgaWYgKCFwcm9qZWN0c1twcm9qZWN0SW5kZXhCXSkge1xuICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKFxuICAgICAgICBFcnJvcihcIlRoZSBzcGVjaWZpZWQgZGVzdGluYXRpb24gaW5kZXggaXMgb3V0IG9mIHJhbmdlLlwiKVxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKCFwcm9qZWN0c1twcm9qZWN0SW5kZXhBXS50YXNrc1t0YXNrSW5kZXhdKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5sb2coRXJyb3IoXCJUaGUgc3BlY2lmaWVkIHRhc2sgaW5kZXggaXMgb3V0IG9mIHJhbmdlLlwiKSk7XG4gICAgfVxuICAgIGxldCB0YXNrID0gcHJvamVjdHNbcHJvamVjdEluZGV4QV0udGFza3Muc3BsaWNlKHRhc2tJbmRleCwgMSlbMF07XG4gICAgcHJvamVjdHNbcHJvamVjdEluZGV4Ql0udGFza3MucHVzaCh0YXNrRmFjdG9yeSh0YXNrKSk7XG4gICAgcHJvamVjdHNbcHJvamVjdEluZGV4Ql0ucHJpbnRUYXNrcyhcbiAgICAgIGBUYXNrICR7dGFzay50aXRsZX0gaGFzIGJlZW4gdHJhbnNmZXJlZC5gXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBtb3ZlVGFzayA9IChwcm9qZWN0SW5kZXgsIHBvc2l0aW9uQSwgcG9zaXRpb25CKSA9PiB7XG4gICAgaWYgKCFwcm9qZWN0c1twcm9qZWN0SW5kZXhdKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5sb2coRXJyb3IoXCJUaGUgc3BlY2lmaWVkIHByb2plY3QgaW5kZXggaXMgb3V0IG9mIHJhbmdlLlwiKSk7XG4gICAgfVxuICAgIGlmICghcHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrc1twb3NpdGlvbkFdKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5sb2coXG4gICAgICAgIEVycm9yKFwiVGhlIGZpcnN0IHNwZWNpZmllZCB0YXNrIGluZGV4IGlzIG91dCBvZiByYW5nZS5cIilcbiAgICAgICk7XG4gICAgfVxuICAgIGlmICghcHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrc1twb3NpdGlvbkJdKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5sb2coXG4gICAgICAgIEVycm9yKFwiVGhlIHNlY29uZCBzcGVjaWZpZWQgdGFzayBpbmRleCBpcyBvdXQgb2YgcmFuZ2UuXCIpXG4gICAgICApO1xuICAgIH1cbiAgICBsZXQgdGFzayA9IHByb2plY3RzW3Byb2plY3RJbmRleF0udGFza3Muc3BsaWNlKHBvc2l0aW9uQSwgMSlbMF07XG4gICAgcHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrcy5zcGxpY2UocG9zaXRpb25CLCAwLCB0YXNrKTtcbiAgICBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnByb2plY3RzKFwiVGhlIHRhc2sgbGlzdCBoYXMgYmVlbiByZW9yZGVyZWRcIik7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICByZW5hbWVDYXRlZ29yeSxcbiAgICBnZXRUaXRsZSxcbiAgICBwcm9qZWN0cyxcbiAgICBwcmludFByb2plY3RzLFxuICAgIG1vdmVQcm9qZWN0LFxuICAgIHJlbW92ZVByb2plY3QsXG4gICAgbWFrZVByb2plY3QsXG4gICAgdHJhbnNmZXJUYXNrLFxuICAgIG1vdmVUYXNrLFxuICB9O1xufTtcblxuY29uc3QgY2F0ZWdvcmllcyA9IFtdO1xuXG5jb25zdCBtYWtlQ2F0ZWdvcnkgPSAodGl0bGUpID0+IHtcbiAgbGV0IHByb2plY3QgPSBjYXRlZ29yeUZhY3RvcnkodGl0bGUpO1xuICBjYXRlZ29yaWVzLnB1c2gocHJvamVjdCk7XG4gIHJldHVybiBjYXRlZ29yaWVzW2NhdGVnb3JpZXMubGVuZ3RoIC0gMV07XG59O1xuXG5jb25zdCBwcmludENhdGVnb3JpZXMgPSAobWVzc2FnZSkgPT4ge1xuICBpZiAoIW1lc3NhZ2UpIHtcbiAgICBjb25zb2xlLmxvZyhcIkEgbGlzdCBvZiBhbGwgY2F0ZWdvcmllczpcIik7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coXCJtZXNzYWdlXCIpO1xuICB9XG4gIGNhdGVnb3JpZXMuZm9yRWFjaCgoY2F0ZWdvcnksIGluZGV4KSA9PiB7XG4gICAgY29uc29sZS5sb2coXG4gICAgICBcIiBcIixcbiAgICAgIGAke2luZGV4fTpgLFxuICAgICAgY2F0ZWdvcnkuZ2V0VGl0bGUoKSxcbiAgICAgIGAoJHtjYXRlZ29yeS5wcm9qZWN0cy5sZW5ndGh9IHByb2plY3RzKWBcbiAgICApO1xuICB9KTtcbn07XG5cbmNvbnN0IHRyYW5zZmVyUHJvamVjdCA9IChjYXRlZ29yeUluZGV4QSwgY2F0ZWdvcnlJbmRleEIsIHByb2plY3RJbmRleCkgPT4ge1xuICBpZiAoIWNhdGVnb3JpZXNbY2F0ZWdvcnlJbmRleEFdKSB7XG4gICAgcmV0dXJuIGNvbnNvbGUubG9nKEVycm9yKFwiVGhlIHNwZWNpZmllZCBvcmlnaW4gaW5kZXggaXMgb3V0IG9mIHJhbmdlLlwiKSk7XG4gIH1cbiAgaWYgKCFjYXRlZ29yaWVzW2NhdGVnb3J5SW5kZXhCXSkge1xuICAgIHJldHVybiBjb25zb2xlLmxvZyhcbiAgICAgIEVycm9yKFwiVGhlIHNwZWNpZmllZCBkZXN0aW5hdGlvbiBpbmRleCBpcyBvdXQgb2YgcmFuZ2UuXCIpXG4gICAgKTtcbiAgfVxuICBsZXQgcHJvamVjdCA9IGNhdGVnb3JpZXNbY2F0ZWdvcnlJbmRleEFdLnByb2plY3RzLnNwbGljZShwcm9qZWN0SW5kZXgsIDEpWzBdO1xuICBjYXRlZ29yaWVzW2NhdGVnb3J5SW5kZXhCXS5wcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICBjYXRlZ29yaWVzW2NhdGVnb3J5SW5kZXhCXS5wcmludFByb2plY3RzKGBUaGUgcHJvamVjdCBoYXMgYmVlbiBhZGRlZC5gKTtcbn07XG5cbmV4cG9ydCB7IG1ha2VDYXRlZ29yeSwgcHJpbnRDYXRlZ29yaWVzLCB0cmFuc2ZlclByb2plY3QgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi4vc3R5bGUvZGVmYXVsdC5jc3NcIjtcbmltcG9ydCB7IG1ha2VDYXRlZ29yeSwgcHJpbnRDYXRlZ29yaWVzLCB0cmFuc2ZlclByb2plY3QgfSBmcm9tIFwiLi90by1kby5qc1wiO1xuXG5jb25zdCBkZW1vMSA9IG1ha2VDYXRlZ29yeShcIkRlbW9cIik7XG5cbmRlbW8xLm1ha2VQcm9qZWN0KHtcbiAgdGl0bGU6IFwiVG8tZG8gYXBwXCIsXG4gIGRlc2NyaXB0aW9uOiBcIkEgcGxhY2UgdG8gc3RvcmUgYWxsIG9mIHlvdXIgdGFza3NcIixcbiAgdGFza3M6IFtdLFxufSk7XG5cbmRlbW8xLnByb2plY3RzWzBdLm1ha2VUYXNrKHtcbiAgdGl0bGU6IFwiTG9vayBhcm91bmRcIixcbiAgZGVzY3JpcHRpb246IFwiR2V0IHRvIGtub3cgdGhlIGFwcC5cIixcbn0pO1xuXG5kZW1vMS5tYWtlUHJvamVjdCh7XG4gIHRpdGxlOiBcIkV4ZXJjaXNlIHNvbHV0aW9uc1wiLFxuICBkZXNjcmlwdGlvbjogXCJGaWd1cmUgb3V0IGFuIG9wdGltYWwgc2V0dXAgZm9yIGVhY2ggbWFqb3IgbXVzY2xlIGdyb3VwLlwiLFxuICB0YXNrczogW10sXG59KTtcblxuZGVtbzEucHJvamVjdHNbMV0ubWFrZVRhc2soe1xuICB0aXRsZTogXCJCdXkgcHVsbGV5c1wiLFxuICBkZXNjcmlwdGlvbjogXCJGb3IgZXhlcmNpc2VzIHRoYXQgcmVxdWlyZSBhbiB1cHdhcmQgZGlyY3Rpb24gb2YgcmVzaXN0YW5jZS5cIixcbn0pO1xuXG5kZW1vMS5wcm9qZWN0c1sxXS5tYWtlVGFzayh7XG4gIHRpdGxlOiBcIkdldCB3ZWlnaHQgcGxhdGVzXCIsXG4gIGRlc2NyaXB0aW9uOiBcIkEgbWluaW1hbGlzdGljIHNldCB0aGF0IGFsbG93cyBpbmNyZW1lbnRzIG9mIDVsYi5cIixcbn0pO1xuXG5kZW1vMS5wcm9qZWN0c1sxXS5tYWtlVGFzayh7XG4gIHRpdGxlOiBcIkZpbmQgc3VwcGxpZXNcIixcbiAgZGVzY3JpcHRpb246IFwiVGhpbmdzIGxpa2Ugcm9wZSwgd2ViYmluZywgY2FyaWJpbmVycywgY2hhaW5zLCBmb2FtLi4uIFwiLFxufSk7XG5cbmRlbW8xLnByb2plY3RzWzFdLm1ha2VUYXNrKHtcbiAgdGl0bGU6IFwiTWFrZSBzb21lIGVxdWlwbWVudFwiLFxuICBkZXNjcmlwdGlvbjogXCJBc2sgbW9tIHRvIHNldyB0b2dldGhlciBteSBpbnZlbnRpb25zXCIsXG59KTtcblxuZGVtbzEubWFrZVByb2plY3Qoe1xuICB0aXRsZTogXCIyNTAgYm94IGNoYWxsZW5nZVwiLFxuICBkZXNjcmlwdGlvbjogJ1wiLi4uZHJhdyBhIGJveCAtIHRoZW4gZG8gaXQgYWdhaW4gYW5vdGhlciAyNDkgdGltZXMuXCInLFxuICB0YXNrczogW10sXG59KTtcblxuZGVtbzEucHJvamVjdHNbMl0ubWFrZVRhc2soe1xuICB0aXRsZTogXCJGaW5kIGRyYXdpbmcgc3VwcGxpZXNcIixcbiAgZGVzY3JpcHRpb246IFwiYSBsYXJnZSBzdGFjayBvZiBwcml0ZXIgcGFwZXIgYW5kIGEgLjUgcGVuLlwiLFxufSk7XG5cbmRlbW8xLnByb2plY3RzWzJdLm1ha2VUYXNrKHtcbiAgdGl0bGU6IFwiZHJhdyA1IGJveGVzIG9uIGEgcGFnZVwiLFxuICBkZXNjcmlwdGlvbjogXCI1IGxlYXZlcyBlbm91Z2ggcm9vbSB0byBjaGVjayB0aGUgY29udmVyZ2VuY2VzXCIsXG59KTtcblxuZGVtbzEucHJvamVjdHNbMl0ubWFrZVRhc2soe1xuICB0aXRsZTogXCI1MCUgcnVsZVwiLFxuICBkZXNjcmlwdGlvbjpcbiAgICBcIkRyYXcgd2hhdGV2ZXIgeW91IHdhbnQgZm9yIHRoZSBzYW1lIGFtb3VudCBvZiB0aW1lIHNwZW50IHByYWN0aWNpbmcuXCIsXG59KTtcblxuZGVtbzEucHJpbnRQcm9qZWN0cygpO1xuXG5jb25zdCB3b3JrID0gbWFrZUNhdGVnb3J5KFwiV29ya1wiKTtcblxud29yay5tYWtlUHJvamVjdCh7XG4gIHRpdGxlOiBcIkJsb2NrIFdvcmxkXCIsXG4gIGRlc2NyaXB0aW9uOiBcImFuIG9yaWdpbmFsIHNhbmRib3ggZ2FtZSB3aGVyZSBldmVyeXRoaW5nIGlzIGJsb2NreVwiLFxufSk7XG5cbnByaW50Q2F0ZWdvcmllcygpO1xuXG50cmFuc2ZlclByb2plY3QoMCwgMSwgMCk7XG5wcmludENhdGVnb3JpZXMoKTtcblxuZGVtbzEucHJvamVjdHNbMF0ucHJpbnRUYXNrcygpO1xuZGVtbzEucHJpbnRQcm9qZWN0cygpO1xuZGVtbzEudHJhbnNmZXJUYXNrKDAsIDEsIDApO1xuXG5kZW1vMS5wcm9qZWN0c1sxXS50aXRsZSA9IFwiSW5zdGl0dXRpb25hbGl6ZWRcIjtcbmRlbW8xLnByaW50UHJvamVjdHMoKTtcblxuZGVtbzEucHJvamVjdHNbMF0udGFza3NbMF0udGl0bGUgPSBcImNoaWxsXCI7XG5kZW1vMS5wcm9qZWN0c1swXS50YXNrc1swXS5kZXNjcmlwdGlvbiA9IFwic3BhY2Ugb3V0IHRvIHNvbWUgYm9wc1wiO1xuZGVtbzEucHJvamVjdHNbMF0udGFza3NbMF0ucHJpb3JpdHkgPSBcImltcG9ydGFudFwiO1xuZGVtbzEucHJvamVjdHNbMF0ucHJpbnRUYXNrcygpO1xuXG5kZW1vMS5wcm9qZWN0c1swXS5yZW1vdmVUYXNrKDApO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9