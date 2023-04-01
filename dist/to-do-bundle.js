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

  const moveProject = (index, { destination }) => {
    if (!projects[index]) {
      return console.log(Error("The specified origin index is out of range."));
    }
    if (!projects[destination]) {
      return console.log(
        Error("The specified destination index is out of range.")
      );
    }
    let objectA = projects.splice(index, 1)[0];
    projects.splice(destination, 0, objectA);
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
    const transferTask = (taskIndex, { destinationProject }) => {
      if (!tasks[taskIndex]) {
        return console.log(Error("The specified task index is out of range."));
      }
      if (!projects[destinationProject]) {
        return console.log(
          Error("The specified destination index is out of range.")
        );
      }
      let task = tasks.splice(taskIndex, 1)[0];
      projects[destinationProject].tasks.push(task);
      projects[destinationProject].printTasks(
        `Task ${task.title} has been transfered.`
      );
    };
    const moveTask = (positionA, positionB) => {
      if (!tasks[positionA]) {
        return console.log(
          Error("The first specified task index is out of range.")
        );
      }
      if (!tasks[positionB]) {
        return console.log(
          Error("The second specified task index is out of range.")
        );
      }
      let task = tasks.splice(positionA, 1)[0];
      tasks.splice(positionB, 0, task);
      printTasks("The task list has been reordered.");
    };

    return {
      title,
      description,
      tasks,
      printTasks,
      makeTask,
      removeTask,
      transferTask,
      moveTask,
    };
  };

  const makeProject = ({ title, description }) => {
    projects.push(projectFactory({ title, description }));
    printProjects("A new project has been made.");
  };

  const transferProject = (projectIndex, { destinationCategory }) => {
    if (!categories[destinationCategory]) {
      return console.log(
        Error("The specified destination index is out of range.")
      );
    }
    let project = projects.splice(projectIndex, 1)[0];
    categories[destinationCategory].projects.push(project);
    categories[destinationCategory].printProjects(
      `The project "${project.title}" has been transfered.`
    );
  };

  return {
    renameCategory,
    getTitle,
    projects,
    printProjects,
    moveProject,
    removeProject,
    makeProject,
    transferProject,
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

demo1.transferProject(0, { destinationCategory: 1 });
(0,_to_do_js__WEBPACK_IMPORTED_MODULE_1__.printCategories)();

demo1.projects[0].printTasks();
demo1.printProjects();
demo1.projects[0].transferTask(0, { destinationProject: 1 });

demo1.projects[1].title = "Institutionalized";
demo1.printProjects();

demo1.projects[0].tasks[0].title = "chill";
demo1.projects[0].tasks[0].description = "space out to some bops";
demo1.projects[0].tasks[0].priority = "important";
demo1.projects[0].printTasks();

demo1.printProjects();
demo1.moveProject(0, { destination: 1 });

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUEsYUFBYSx1REFBWTs7QUFFekI7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCwwREFBZTs7QUFFZiwyQkFBMkIsd0JBQXdCO0FBQ25ELDBEQUFlOztBQUVmO0FBQ0E7QUFDQSxvQ0FBb0MsdUJBQXVCOztBQUUzRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLGdCQUFnQiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsZS9kZWZhdWx0LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvZ3JhbS90by1kby5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvZ3JhbS9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImNvbnN0IGNhdGVnb3J5RmFjdG9yeSA9IChjYXRlZ29yeSkgPT4ge1xuICBjb25zdCByZW5hbWVDYXRlZ29yeSA9IChpbnB1dCkgPT4ge1xuICAgIGlmICh0eXBlb2YgaW5wdXQgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZyhFcnJvcihcIlRoZSBzcGVjaWZpZWQgdGl0bGUgaXMgbm90IGEgc3RyaW5nLlwiKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhdGVnb3J5ID0gaW5wdXQ7XG4gICAgfVxuICB9O1xuXG4gIGxldCBnZXRUaXRsZSA9ICgpID0+IHtcbiAgICByZXR1cm4gY2F0ZWdvcnk7XG4gIH07XG5cbiAgY29uc3QgcHJvamVjdHMgPSBbXTtcblxuICBjb25zdCBwcmludFByb2plY3RzID0gKG1lc3NhZ2UpID0+IHtcbiAgICBpZiAocHJvamVjdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5sb2coRXJyb3IoYCR7Y2F0ZWdvcnl9IDogZW1wdHlgKSk7XG4gICAgfVxuICAgIGlmICghbWVzc2FnZSkge1xuICAgICAgY29uc29sZS5sb2coYCR7Y2F0ZWdvcnl9IDogQSBsaXN0IG9mIGFsbCBwcm9qZWN0czpgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coYCR7Y2F0ZWdvcnl9IDogJHttZXNzYWdlfWApO1xuICAgIH1cbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCIgXCIsIGluZGV4LCBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHByb2plY3QpKSk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgbW92ZVByb2plY3QgPSAoaW5kZXgsIHsgZGVzdGluYXRpb24gfSkgPT4ge1xuICAgIGlmICghcHJvamVjdHNbaW5kZXhdKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5sb2coRXJyb3IoXCJUaGUgc3BlY2lmaWVkIG9yaWdpbiBpbmRleCBpcyBvdXQgb2YgcmFuZ2UuXCIpKTtcbiAgICB9XG4gICAgaWYgKCFwcm9qZWN0c1tkZXN0aW5hdGlvbl0pIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZyhcbiAgICAgICAgRXJyb3IoXCJUaGUgc3BlY2lmaWVkIGRlc3RpbmF0aW9uIGluZGV4IGlzIG91dCBvZiByYW5nZS5cIilcbiAgICAgICk7XG4gICAgfVxuICAgIGxldCBvYmplY3RBID0gcHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKVswXTtcbiAgICBwcm9qZWN0cy5zcGxpY2UoZGVzdGluYXRpb24sIDAsIG9iamVjdEEpO1xuICAgIHByaW50UHJvamVjdHMoXCJUaGUgcHJvamVjdHMgaGF2ZSBiZWVuIHJlb3JkZXJlZC5cIik7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChpbmRleCkgPT4ge1xuICAgIGlmICghcHJvamVjdHNbaW5kZXhdKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5sb2coRXJyb3IoXCJUaGUgc3BlY2lmaWVkIGluZGV4IGlzIG91dCBvZiByYW5nZS5cIikpO1xuICAgIH1cbiAgICBsZXQgdGl0bGUgPSBwcm9qZWN0c1tpbmRleF0udGl0bGU7XG4gICAgcHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICBwcmludFByb2plY3RzKGBQcm9qZWN0IFwiJHt0aXRsZX1cIiBoYXMgYmVlbiByZW1vdmVkLmApO1xuICB9O1xuXG4gIGNvbnN0IHRhc2tGYWN0b3J5ID0gKHtcbiAgICB0aXRsZSA9IFwiXCIsXG4gICAgZGVzY3JpcHRpb24gPSBcIlwiLFxuICAgIGR1ZURhdGUgPSBcIlwiLFxuICAgIHByaW9yaXR5ID0gXCJcIixcbiAgfSkgPT4ge1xuICAgIGxldCB0YXNrU3RhdHVzID0gZmFsc2U7XG4gICAgY29uc3QgY2hlY2tDb21wbGV0aW9uU3RhdHVzID0gKCkgPT4ge1xuICAgICAgaWYgKHRhc2tTdGF0dXMpIHtcbiAgICAgICAgY29uc29sZS5sb2coYFRhc2sgXCIke3RpdGxlfVwiIGhhcyBiZWVuIGNvbXBsZXRlZC4gOkRgKTtcbiAgICAgIH1cbiAgICAgIGlmICghdGFza1N0YXR1cykge1xuICAgICAgICBjb25zb2xlLmxvZyhgVGFzayBcIiR7dGl0bGV9XCIgaGFzIG5vdCBiZWVuIGNvbXBsZXRlZC4gOi9gKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0YXNrU3RhdHVzO1xuICAgIH07XG4gICAgY29uc3QgY2hhbmdlQ29tcGxldGlvblN0YXR1cyA9ICgpID0+IHtcbiAgICAgIHRhc2tTdGF0dXMgPSB0YXNrU3RhdHVzID8gZmFsc2UgOiB0cnVlO1xuICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBkdWVEYXRlLFxuICAgICAgcHJpb3JpdHksXG4gICAgICBjaGVja0NvbXBsZXRpb25TdGF0dXMsXG4gICAgICBjaGFuZ2VDb21wbGV0aW9uU3RhdHVzLFxuICAgIH07XG4gIH07XG5cbiAgY29uc3QgcHJvamVjdEZhY3RvcnkgPSAoeyB0aXRsZSA9IFwiXCIsIGRlc2NyaXB0aW9uID0gXCJcIiB9KSA9PiB7XG4gICAgY29uc3QgdGFza3MgPSBbXTtcbiAgICBjb25zdCBwcmludFRhc2tzID0gKG1lc3NhZ2UgPSBgVGFza3MgaW4gXCIke3RpdGxlfVwiYCkgPT4ge1xuICAgICAgaWYgKHRhc2tzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gRXJyb3IoYFRoZXJlIGFyZSBubyB0YXNrcyBpbiBcIiR7dGl0bGV9XCIuYCk7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhgJHtjYXRlZ29yeX0gOiAke21lc3NhZ2V9YCk7XG4gICAgICB0YXNrcy5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIiBcIiwgaW5kZXgsIHRhc2spO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICBjb25zdCBtYWtlVGFzayA9ICh0YXNrID0ge30pID0+IHtcbiAgICAgIHRhc2tzLnB1c2godGFza0ZhY3RvcnkodGFzaykpO1xuICAgICAgcHJpbnRUYXNrcyhgQSBuZXcgdGFzayBoYXMgYmVlbiBhZGRlZCB0byBcIiR7dGl0bGV9XCIuYCk7XG4gICAgfTtcbiAgICBjb25zdCByZW1vdmVUYXNrID0gKGluZGV4KSA9PiB7XG4gICAgICBpZiAoIXRhc2tzW2luZGV4XSkge1xuICAgICAgICByZXR1cm4gY29uc29sZS5sb2coRXJyb3IoXCJUaGUgc3BlY2lmaWVkIHRhc2sgaW5kZXggaXMgb3V0IG9mIHJhbmdlLlwiKSk7XG4gICAgICB9XG4gICAgICBsZXQgdGl0bGUgPSB0YXNrc1tpbmRleF0udGl0bGU7XG4gICAgICB0YXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgcHJpbnRUYXNrcyhgVGhlIHRhc2sgXCIke3RpdGxlfVwiIGhhcyBiZWVuIHJlbW92ZWQuYCk7XG4gICAgfTtcbiAgICBjb25zdCB0cmFuc2ZlclRhc2sgPSAodGFza0luZGV4LCB7IGRlc3RpbmF0aW9uUHJvamVjdCB9KSA9PiB7XG4gICAgICBpZiAoIXRhc2tzW3Rhc2tJbmRleF0pIHtcbiAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKEVycm9yKFwiVGhlIHNwZWNpZmllZCB0YXNrIGluZGV4IGlzIG91dCBvZiByYW5nZS5cIikpO1xuICAgICAgfVxuICAgICAgaWYgKCFwcm9qZWN0c1tkZXN0aW5hdGlvblByb2plY3RdKSB7XG4gICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhcbiAgICAgICAgICBFcnJvcihcIlRoZSBzcGVjaWZpZWQgZGVzdGluYXRpb24gaW5kZXggaXMgb3V0IG9mIHJhbmdlLlwiKVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgbGV0IHRhc2sgPSB0YXNrcy5zcGxpY2UodGFza0luZGV4LCAxKVswXTtcbiAgICAgIHByb2plY3RzW2Rlc3RpbmF0aW9uUHJvamVjdF0udGFza3MucHVzaCh0YXNrKTtcbiAgICAgIHByb2plY3RzW2Rlc3RpbmF0aW9uUHJvamVjdF0ucHJpbnRUYXNrcyhcbiAgICAgICAgYFRhc2sgJHt0YXNrLnRpdGxlfSBoYXMgYmVlbiB0cmFuc2ZlcmVkLmBcbiAgICAgICk7XG4gICAgfTtcbiAgICBjb25zdCBtb3ZlVGFzayA9IChwb3NpdGlvbkEsIHBvc2l0aW9uQikgPT4ge1xuICAgICAgaWYgKCF0YXNrc1twb3NpdGlvbkFdKSB7XG4gICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhcbiAgICAgICAgICBFcnJvcihcIlRoZSBmaXJzdCBzcGVjaWZpZWQgdGFzayBpbmRleCBpcyBvdXQgb2YgcmFuZ2UuXCIpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAoIXRhc2tzW3Bvc2l0aW9uQl0pIHtcbiAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKFxuICAgICAgICAgIEVycm9yKFwiVGhlIHNlY29uZCBzcGVjaWZpZWQgdGFzayBpbmRleCBpcyBvdXQgb2YgcmFuZ2UuXCIpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBsZXQgdGFzayA9IHRhc2tzLnNwbGljZShwb3NpdGlvbkEsIDEpWzBdO1xuICAgICAgdGFza3Muc3BsaWNlKHBvc2l0aW9uQiwgMCwgdGFzayk7XG4gICAgICBwcmludFRhc2tzKFwiVGhlIHRhc2sgbGlzdCBoYXMgYmVlbiByZW9yZGVyZWQuXCIpO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIHRhc2tzLFxuICAgICAgcHJpbnRUYXNrcyxcbiAgICAgIG1ha2VUYXNrLFxuICAgICAgcmVtb3ZlVGFzayxcbiAgICAgIHRyYW5zZmVyVGFzayxcbiAgICAgIG1vdmVUYXNrLFxuICAgIH07XG4gIH07XG5cbiAgY29uc3QgbWFrZVByb2plY3QgPSAoeyB0aXRsZSwgZGVzY3JpcHRpb24gfSkgPT4ge1xuICAgIHByb2plY3RzLnB1c2gocHJvamVjdEZhY3RvcnkoeyB0aXRsZSwgZGVzY3JpcHRpb24gfSkpO1xuICAgIHByaW50UHJvamVjdHMoXCJBIG5ldyBwcm9qZWN0IGhhcyBiZWVuIG1hZGUuXCIpO1xuICB9O1xuXG4gIGNvbnN0IHRyYW5zZmVyUHJvamVjdCA9IChwcm9qZWN0SW5kZXgsIHsgZGVzdGluYXRpb25DYXRlZ29yeSB9KSA9PiB7XG4gICAgaWYgKCFjYXRlZ29yaWVzW2Rlc3RpbmF0aW9uQ2F0ZWdvcnldKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5sb2coXG4gICAgICAgIEVycm9yKFwiVGhlIHNwZWNpZmllZCBkZXN0aW5hdGlvbiBpbmRleCBpcyBvdXQgb2YgcmFuZ2UuXCIpXG4gICAgICApO1xuICAgIH1cbiAgICBsZXQgcHJvamVjdCA9IHByb2plY3RzLnNwbGljZShwcm9qZWN0SW5kZXgsIDEpWzBdO1xuICAgIGNhdGVnb3JpZXNbZGVzdGluYXRpb25DYXRlZ29yeV0ucHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICBjYXRlZ29yaWVzW2Rlc3RpbmF0aW9uQ2F0ZWdvcnldLnByaW50UHJvamVjdHMoXG4gICAgICBgVGhlIHByb2plY3QgXCIke3Byb2plY3QudGl0bGV9XCIgaGFzIGJlZW4gdHJhbnNmZXJlZC5gXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHJlbmFtZUNhdGVnb3J5LFxuICAgIGdldFRpdGxlLFxuICAgIHByb2plY3RzLFxuICAgIHByaW50UHJvamVjdHMsXG4gICAgbW92ZVByb2plY3QsXG4gICAgcmVtb3ZlUHJvamVjdCxcbiAgICBtYWtlUHJvamVjdCxcbiAgICB0cmFuc2ZlclByb2plY3QsXG4gIH07XG59O1xuXG5jb25zdCBjYXRlZ29yaWVzID0gW107XG5cbmNvbnN0IG1ha2VDYXRlZ29yeSA9ICh0aXRsZSkgPT4ge1xuICBsZXQgcHJvamVjdCA9IGNhdGVnb3J5RmFjdG9yeSh0aXRsZSk7XG4gIGNhdGVnb3JpZXMucHVzaChwcm9qZWN0KTtcbiAgcmV0dXJuIGNhdGVnb3JpZXNbY2F0ZWdvcmllcy5sZW5ndGggLSAxXTtcbn07XG5cbmNvbnN0IHByaW50Q2F0ZWdvcmllcyA9IChtZXNzYWdlKSA9PiB7XG4gIGlmICghbWVzc2FnZSkge1xuICAgIGNvbnNvbGUubG9nKFwiQSBsaXN0IG9mIGFsbCBjYXRlZ29yaWVzOlwiKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZyhcIm1lc3NhZ2VcIik7XG4gIH1cbiAgY2F0ZWdvcmllcy5mb3JFYWNoKChjYXRlZ29yeSwgaW5kZXgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcbiAgICAgIFwiIFwiLFxuICAgICAgYCR7aW5kZXh9OmAsXG4gICAgICBjYXRlZ29yeS5nZXRUaXRsZSgpLFxuICAgICAgYCgke2NhdGVnb3J5LnByb2plY3RzLmxlbmd0aH0gcHJvamVjdHMpYFxuICAgICk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgbWFrZUNhdGVnb3J5LCBwcmludENhdGVnb3JpZXMgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi4vc3R5bGUvZGVmYXVsdC5jc3NcIjtcbmltcG9ydCB7IG1ha2VDYXRlZ29yeSwgcHJpbnRDYXRlZ29yaWVzIH0gZnJvbSBcIi4vdG8tZG8uanNcIjtcblxuY29uc3QgZGVtbzEgPSBtYWtlQ2F0ZWdvcnkoXCJEZW1vXCIpO1xuXG5kZW1vMS5tYWtlUHJvamVjdCh7XG4gIHRpdGxlOiBcIlRvLWRvIGFwcFwiLFxuICBkZXNjcmlwdGlvbjogXCJBIHBsYWNlIHRvIHN0b3JlIGFsbCBvZiB5b3VyIHRhc2tzXCIsXG4gIHRhc2tzOiBbXSxcbn0pO1xuXG5kZW1vMS5wcm9qZWN0c1swXS5tYWtlVGFzayh7XG4gIHRpdGxlOiBcIkxvb2sgYXJvdW5kXCIsXG4gIGRlc2NyaXB0aW9uOiBcIkdldCB0byBrbm93IHRoZSBhcHAuXCIsXG59KTtcblxuZGVtbzEubWFrZVByb2plY3Qoe1xuICB0aXRsZTogXCJFeGVyY2lzZSBzb2x1dGlvbnNcIixcbiAgZGVzY3JpcHRpb246IFwiRmlndXJlIG91dCBhbiBvcHRpbWFsIHNldHVwIGZvciBlYWNoIG1ham9yIG11c2NsZSBncm91cC5cIixcbiAgdGFza3M6IFtdLFxufSk7XG5cbmRlbW8xLnByb2plY3RzWzFdLm1ha2VUYXNrKHtcbiAgdGl0bGU6IFwiQnV5IHB1bGxleXNcIixcbiAgZGVzY3JpcHRpb246IFwiRm9yIGV4ZXJjaXNlcyB0aGF0IHJlcXVpcmUgYW4gdXB3YXJkIGRpcmN0aW9uIG9mIHJlc2lzdGFuY2UuXCIsXG59KTtcblxuZGVtbzEucHJvamVjdHNbMV0ubWFrZVRhc2soe1xuICB0aXRsZTogXCJHZXQgd2VpZ2h0IHBsYXRlc1wiLFxuICBkZXNjcmlwdGlvbjogXCJBIG1pbmltYWxpc3RpYyBzZXQgdGhhdCBhbGxvd3MgaW5jcmVtZW50cyBvZiA1bGIuXCIsXG59KTtcblxuZGVtbzEucHJvamVjdHNbMV0ubWFrZVRhc2soe1xuICB0aXRsZTogXCJGaW5kIHN1cHBsaWVzXCIsXG4gIGRlc2NyaXB0aW9uOiBcIlRoaW5ncyBsaWtlIHJvcGUsIHdlYmJpbmcsIGNhcmliaW5lcnMsIGNoYWlucywgZm9hbS4uLiBcIixcbn0pO1xuXG5kZW1vMS5wcm9qZWN0c1sxXS5tYWtlVGFzayh7XG4gIHRpdGxlOiBcIk1ha2Ugc29tZSBlcXVpcG1lbnRcIixcbiAgZGVzY3JpcHRpb246IFwiQXNrIG1vbSB0byBzZXcgdG9nZXRoZXIgbXkgaW52ZW50aW9uc1wiLFxufSk7XG5cbmRlbW8xLm1ha2VQcm9qZWN0KHtcbiAgdGl0bGU6IFwiMjUwIGJveCBjaGFsbGVuZ2VcIixcbiAgZGVzY3JpcHRpb246ICdcIi4uLmRyYXcgYSBib3ggLSB0aGVuIGRvIGl0IGFnYWluIGFub3RoZXIgMjQ5IHRpbWVzLlwiJyxcbiAgdGFza3M6IFtdLFxufSk7XG5cbmRlbW8xLnByb2plY3RzWzJdLm1ha2VUYXNrKHtcbiAgdGl0bGU6IFwiRmluZCBkcmF3aW5nIHN1cHBsaWVzXCIsXG4gIGRlc2NyaXB0aW9uOiBcImEgbGFyZ2Ugc3RhY2sgb2YgcHJpdGVyIHBhcGVyIGFuZCBhIC41IHBlbi5cIixcbn0pO1xuXG5kZW1vMS5wcm9qZWN0c1syXS5tYWtlVGFzayh7XG4gIHRpdGxlOiBcImRyYXcgNSBib3hlcyBvbiBhIHBhZ2VcIixcbiAgZGVzY3JpcHRpb246IFwiNSBsZWF2ZXMgZW5vdWdoIHJvb20gdG8gY2hlY2sgdGhlIGNvbnZlcmdlbmNlc1wiLFxufSk7XG5cbmRlbW8xLnByb2plY3RzWzJdLm1ha2VUYXNrKHtcbiAgdGl0bGU6IFwiNTAlIHJ1bGVcIixcbiAgZGVzY3JpcHRpb246XG4gICAgXCJEcmF3IHdoYXRldmVyIHlvdSB3YW50IGZvciB0aGUgc2FtZSBhbW91bnQgb2YgdGltZSBzcGVudCBwcmFjdGljaW5nLlwiLFxufSk7XG5cbmRlbW8xLnByaW50UHJvamVjdHMoKTtcblxuY29uc3Qgd29yayA9IG1ha2VDYXRlZ29yeShcIldvcmtcIik7XG5cbndvcmsubWFrZVByb2plY3Qoe1xuICB0aXRsZTogXCJCbG9jayBXb3JsZFwiLFxuICBkZXNjcmlwdGlvbjogXCJhbiBvcmlnaW5hbCBzYW5kYm94IGdhbWUgd2hlcmUgZXZlcnl0aGluZyBpcyBibG9ja3lcIixcbn0pO1xuXG5wcmludENhdGVnb3JpZXMoKTtcblxuZGVtbzEudHJhbnNmZXJQcm9qZWN0KDAsIHsgZGVzdGluYXRpb25DYXRlZ29yeTogMSB9KTtcbnByaW50Q2F0ZWdvcmllcygpO1xuXG5kZW1vMS5wcm9qZWN0c1swXS5wcmludFRhc2tzKCk7XG5kZW1vMS5wcmludFByb2plY3RzKCk7XG5kZW1vMS5wcm9qZWN0c1swXS50cmFuc2ZlclRhc2soMCwgeyBkZXN0aW5hdGlvblByb2plY3Q6IDEgfSk7XG5cbmRlbW8xLnByb2plY3RzWzFdLnRpdGxlID0gXCJJbnN0aXR1dGlvbmFsaXplZFwiO1xuZGVtbzEucHJpbnRQcm9qZWN0cygpO1xuXG5kZW1vMS5wcm9qZWN0c1swXS50YXNrc1swXS50aXRsZSA9IFwiY2hpbGxcIjtcbmRlbW8xLnByb2plY3RzWzBdLnRhc2tzWzBdLmRlc2NyaXB0aW9uID0gXCJzcGFjZSBvdXQgdG8gc29tZSBib3BzXCI7XG5kZW1vMS5wcm9qZWN0c1swXS50YXNrc1swXS5wcmlvcml0eSA9IFwiaW1wb3J0YW50XCI7XG5kZW1vMS5wcm9qZWN0c1swXS5wcmludFRhc2tzKCk7XG5cbmRlbW8xLnByaW50UHJvamVjdHMoKTtcbmRlbW8xLm1vdmVQcm9qZWN0KDAsIHsgZGVzdGluYXRpb246IDEgfSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=