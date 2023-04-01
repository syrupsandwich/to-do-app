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

  return {
    renameCategory,
    getTitle,
    projects,
    printProjects,
    moveProject,
    removeProject,
    makeProject,
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
demo1.projects[0].transferTask(0, { destinationProject: 1 });

demo1.projects[1].title = "Institutionalized";
demo1.printProjects();

demo1.projects[0].tasks[0].title = "chill";
demo1.projects[0].tasks[0].description = "space out to some bops";
demo1.projects[0].tasks[0].priority = "important";
demo1.projects[0].printTasks();

demo1.projects[0].moveTask(0, 2);
demo1.projects[0].moveTask(2, 1);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQSxhQUFhLHVEQUFZOztBQUV6QjtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELDBEQUFlOztBQUVmLDBEQUFlO0FBQ2YsMERBQWU7O0FBRWY7QUFDQTtBQUNBLG9DQUFvQyx1QkFBdUI7O0FBRTNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsZS9kZWZhdWx0LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvZ3JhbS90by1kby5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvZ3JhbS9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImNvbnN0IGNhdGVnb3J5RmFjdG9yeSA9IChjYXRlZ29yeSkgPT4ge1xuICBjb25zdCByZW5hbWVDYXRlZ29yeSA9IChpbnB1dCkgPT4ge1xuICAgIGlmICh0eXBlb2YgaW5wdXQgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZyhFcnJvcihcIlRoZSBzcGVjaWZpZWQgdGl0bGUgaXMgbm90IGEgc3RyaW5nLlwiKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhdGVnb3J5ID0gaW5wdXQ7XG4gICAgfVxuICB9O1xuXG4gIGxldCBnZXRUaXRsZSA9ICgpID0+IHtcbiAgICByZXR1cm4gY2F0ZWdvcnk7XG4gIH07XG5cbiAgY29uc3QgcHJvamVjdHMgPSBbXTtcblxuICBjb25zdCBwcmludFByb2plY3RzID0gKG1lc3NhZ2UpID0+IHtcbiAgICBpZiAocHJvamVjdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5sb2coRXJyb3IoYCR7Y2F0ZWdvcnl9IDogZW1wdHlgKSk7XG4gICAgfVxuICAgIGlmICghbWVzc2FnZSkge1xuICAgICAgY29uc29sZS5sb2coYCR7Y2F0ZWdvcnl9IDogQSBsaXN0IG9mIGFsbCBwcm9qZWN0czpgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coYCR7Y2F0ZWdvcnl9IDogJHttZXNzYWdlfWApO1xuICAgIH1cbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCIgXCIsIGluZGV4LCBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHByb2plY3QpKSk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgbW92ZVByb2plY3QgPSAocG9zaXRpb25BLCBwb3NpdGlvbkIpID0+IHtcbiAgICBpZiAoIXByb2plY3RzW3Bvc2l0aW9uQV0pIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZyhFcnJvcihcIlRoZSBzcGVjaWZpZWQgb3JpZ2luIGluZGV4IGlzIG91dCBvZiByYW5nZS5cIikpO1xuICAgIH1cbiAgICBpZiAoIXByb2plY3RzW3Bvc2l0aW9uQl0pIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZyhcbiAgICAgICAgRXJyb3IoXCJUaGUgc3BlY2lmaWVkIGRlc3RpbmF0aW9uIGluZGV4IGlzIG91dCBvZiByYW5nZS5cIilcbiAgICAgICk7XG4gICAgfVxuICAgIGxldCBvYmplY3RBID0gcHJvamVjdHMuc3BsaWNlKHBvc2l0aW9uQSwgMSlbMF07XG4gICAgcHJvamVjdHMuc3BsaWNlKHBvc2l0aW9uQiwgMCwgb2JqZWN0QSk7XG4gICAgcHJpbnRQcm9qZWN0cyhcIlRoZSBwcm9qZWN0cyBoYXZlIGJlZW4gcmVvcmRlcmVkLlwiKTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVQcm9qZWN0ID0gKGluZGV4KSA9PiB7XG4gICAgaWYgKCFwcm9qZWN0c1tpbmRleF0pIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZyhFcnJvcihcIlRoZSBzcGVjaWZpZWQgaW5kZXggaXMgb3V0IG9mIHJhbmdlLlwiKSk7XG4gICAgfVxuICAgIGxldCB0aXRsZSA9IHByb2plY3RzW2luZGV4XS50aXRsZTtcbiAgICBwcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHByaW50UHJvamVjdHMoYFByb2plY3QgXCIke3RpdGxlfVwiIGhhcyBiZWVuIHJlbW92ZWQuYCk7XG4gIH07XG5cbiAgY29uc3QgdGFza0ZhY3RvcnkgPSAoe1xuICAgIHRpdGxlID0gXCJcIixcbiAgICBkZXNjcmlwdGlvbiA9IFwiXCIsXG4gICAgZHVlRGF0ZSA9IFwiXCIsXG4gICAgcHJpb3JpdHkgPSBcIlwiLFxuICB9KSA9PiB7XG4gICAgbGV0IHRhc2tTdGF0dXMgPSBmYWxzZTtcbiAgICBjb25zdCBjaGVja0NvbXBsZXRpb25TdGF0dXMgPSAoKSA9PiB7XG4gICAgICBpZiAodGFza1N0YXR1cykge1xuICAgICAgICBjb25zb2xlLmxvZyhgVGFzayBcIiR7dGl0bGV9XCIgaGFzIGJlZW4gY29tcGxldGVkLiA6RGApO1xuICAgICAgfVxuICAgICAgaWYgKCF0YXNrU3RhdHVzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBUYXNrIFwiJHt0aXRsZX1cIiBoYXMgbm90IGJlZW4gY29tcGxldGVkLiA6L2ApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRhc2tTdGF0dXM7XG4gICAgfTtcbiAgICBjb25zdCBjaGFuZ2VDb21wbGV0aW9uU3RhdHVzID0gKCkgPT4ge1xuICAgICAgdGFza1N0YXR1cyA9IHRhc2tTdGF0dXMgPyBmYWxzZSA6IHRydWU7XG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIGR1ZURhdGUsXG4gICAgICBwcmlvcml0eSxcbiAgICAgIGNoZWNrQ29tcGxldGlvblN0YXR1cyxcbiAgICAgIGNoYW5nZUNvbXBsZXRpb25TdGF0dXMsXG4gICAgfTtcbiAgfTtcblxuICBjb25zdCBwcm9qZWN0RmFjdG9yeSA9ICh7IHRpdGxlID0gXCJcIiwgZGVzY3JpcHRpb24gPSBcIlwiIH0pID0+IHtcbiAgICBjb25zdCB0YXNrcyA9IFtdO1xuICAgIGNvbnN0IHByaW50VGFza3MgPSAobWVzc2FnZSA9IGBUYXNrcyBpbiBcIiR7dGl0bGV9XCJgKSA9PiB7XG4gICAgICBpZiAodGFza3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBFcnJvcihgVGhlcmUgYXJlIG5vIHRhc2tzIGluIFwiJHt0aXRsZX1cIi5gKTtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKGAke2NhdGVnb3J5fSA6ICR7bWVzc2FnZX1gKTtcbiAgICAgIHRhc2tzLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiIFwiLCBpbmRleCwgdGFzayk7XG4gICAgICB9KTtcbiAgICB9O1xuICAgIGNvbnN0IG1ha2VUYXNrID0gKHRhc2sgPSB7fSkgPT4ge1xuICAgICAgdGFza3MucHVzaCh0YXNrRmFjdG9yeSh0YXNrKSk7XG4gICAgICBwcmludFRhc2tzKGBBIG5ldyB0YXNrIGhhcyBiZWVuIGFkZGVkIHRvIFwiJHt0aXRsZX1cIi5gKTtcbiAgICB9O1xuICAgIGNvbnN0IHJlbW92ZVRhc2sgPSAoaW5kZXgpID0+IHtcbiAgICAgIGlmICghdGFza3NbaW5kZXhdKSB7XG4gICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhFcnJvcihcIlRoZSBzcGVjaWZpZWQgdGFzayBpbmRleCBpcyBvdXQgb2YgcmFuZ2UuXCIpKTtcbiAgICAgIH1cbiAgICAgIGxldCB0aXRsZSA9IHRhc2tzW2luZGV4XS50aXRsZTtcbiAgICAgIHRhc2tzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICBwcmludFRhc2tzKGBUaGUgdGFzayBcIiR7dGl0bGV9XCIgaGFzIGJlZW4gcmVtb3ZlZC5gKTtcbiAgICB9O1xuICAgIGNvbnN0IHRyYW5zZmVyVGFzayA9ICh0YXNrSW5kZXgsIHsgZGVzdGluYXRpb25Qcm9qZWN0IH0pID0+IHtcbiAgICAgIGlmICghdGFza3NbdGFza0luZGV4XSkge1xuICAgICAgICByZXR1cm4gY29uc29sZS5sb2coRXJyb3IoXCJUaGUgc3BlY2lmaWVkIHRhc2sgaW5kZXggaXMgb3V0IG9mIHJhbmdlLlwiKSk7XG4gICAgICB9XG4gICAgICBpZiAoIXByb2plY3RzW2Rlc3RpbmF0aW9uUHJvamVjdF0pIHtcbiAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKFxuICAgICAgICAgIEVycm9yKFwiVGhlIHNwZWNpZmllZCBkZXN0aW5hdGlvbiBpbmRleCBpcyBvdXQgb2YgcmFuZ2UuXCIpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBsZXQgdGFzayA9IHRhc2tzLnNwbGljZSh0YXNrSW5kZXgsIDEpWzBdO1xuICAgICAgcHJvamVjdHNbZGVzdGluYXRpb25Qcm9qZWN0XS50YXNrcy5wdXNoKHRhc2spO1xuICAgICAgcHJvamVjdHNbZGVzdGluYXRpb25Qcm9qZWN0XS5wcmludFRhc2tzKFxuICAgICAgICBgVGFzayAke3Rhc2sudGl0bGV9IGhhcyBiZWVuIHRyYW5zZmVyZWQuYFxuICAgICAgKTtcbiAgICB9O1xuICAgIGNvbnN0IG1vdmVUYXNrID0gKHBvc2l0aW9uQSwgcG9zaXRpb25CKSA9PiB7XG4gICAgICBpZiAoIXRhc2tzW3Bvc2l0aW9uQV0pIHtcbiAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKFxuICAgICAgICAgIEVycm9yKFwiVGhlIGZpcnN0IHNwZWNpZmllZCB0YXNrIGluZGV4IGlzIG91dCBvZiByYW5nZS5cIilcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmICghdGFza3NbcG9zaXRpb25CXSkge1xuICAgICAgICByZXR1cm4gY29uc29sZS5sb2coXG4gICAgICAgICAgRXJyb3IoXCJUaGUgc2Vjb25kIHNwZWNpZmllZCB0YXNrIGluZGV4IGlzIG91dCBvZiByYW5nZS5cIilcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGxldCB0YXNrID0gdGFza3Muc3BsaWNlKHBvc2l0aW9uQSwgMSlbMF07XG4gICAgICB0YXNrcy5zcGxpY2UocG9zaXRpb25CLCAwLCB0YXNrKTtcbiAgICAgIHByaW50VGFza3MoXCJUaGUgdGFzayBsaXN0IGhhcyBiZWVuIHJlb3JkZXJlZC5cIik7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICB0aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgdGFza3MsXG4gICAgICBwcmludFRhc2tzLFxuICAgICAgbWFrZVRhc2ssXG4gICAgICByZW1vdmVUYXNrLFxuICAgICAgdHJhbnNmZXJUYXNrLFxuICAgICAgbW92ZVRhc2ssXG4gICAgfTtcbiAgfTtcblxuICBjb25zdCBtYWtlUHJvamVjdCA9ICh7IHRpdGxlLCBkZXNjcmlwdGlvbiB9KSA9PiB7XG4gICAgcHJvamVjdHMucHVzaChwcm9qZWN0RmFjdG9yeSh7IHRpdGxlLCBkZXNjcmlwdGlvbiB9KSk7XG4gICAgcHJpbnRQcm9qZWN0cyhcIkEgbmV3IHByb2plY3QgaGFzIGJlZW4gbWFkZS5cIik7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICByZW5hbWVDYXRlZ29yeSxcbiAgICBnZXRUaXRsZSxcbiAgICBwcm9qZWN0cyxcbiAgICBwcmludFByb2plY3RzLFxuICAgIG1vdmVQcm9qZWN0LFxuICAgIHJlbW92ZVByb2plY3QsXG4gICAgbWFrZVByb2plY3QsXG4gIH07XG59O1xuXG5jb25zdCBjYXRlZ29yaWVzID0gW107XG5cbmNvbnN0IG1ha2VDYXRlZ29yeSA9ICh0aXRsZSkgPT4ge1xuICBsZXQgcHJvamVjdCA9IGNhdGVnb3J5RmFjdG9yeSh0aXRsZSk7XG4gIGNhdGVnb3JpZXMucHVzaChwcm9qZWN0KTtcbiAgcmV0dXJuIGNhdGVnb3JpZXNbY2F0ZWdvcmllcy5sZW5ndGggLSAxXTtcbn07XG5cbmNvbnN0IHByaW50Q2F0ZWdvcmllcyA9IChtZXNzYWdlKSA9PiB7XG4gIGlmICghbWVzc2FnZSkge1xuICAgIGNvbnNvbGUubG9nKFwiQSBsaXN0IG9mIGFsbCBjYXRlZ29yaWVzOlwiKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZyhcIm1lc3NhZ2VcIik7XG4gIH1cbiAgY2F0ZWdvcmllcy5mb3JFYWNoKChjYXRlZ29yeSwgaW5kZXgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcbiAgICAgIFwiIFwiLFxuICAgICAgYCR7aW5kZXh9OmAsXG4gICAgICBjYXRlZ29yeS5nZXRUaXRsZSgpLFxuICAgICAgYCgke2NhdGVnb3J5LnByb2plY3RzLmxlbmd0aH0gcHJvamVjdHMpYFxuICAgICk7XG4gIH0pO1xufTtcblxuY29uc3QgdHJhbnNmZXJQcm9qZWN0ID0gKGNhdGVnb3J5SW5kZXhBLCBjYXRlZ29yeUluZGV4QiwgcHJvamVjdEluZGV4KSA9PiB7XG4gIGlmICghY2F0ZWdvcmllc1tjYXRlZ29yeUluZGV4QV0pIHtcbiAgICByZXR1cm4gY29uc29sZS5sb2coRXJyb3IoXCJUaGUgc3BlY2lmaWVkIG9yaWdpbiBpbmRleCBpcyBvdXQgb2YgcmFuZ2UuXCIpKTtcbiAgfVxuICBpZiAoIWNhdGVnb3JpZXNbY2F0ZWdvcnlJbmRleEJdKSB7XG4gICAgcmV0dXJuIGNvbnNvbGUubG9nKFxuICAgICAgRXJyb3IoXCJUaGUgc3BlY2lmaWVkIGRlc3RpbmF0aW9uIGluZGV4IGlzIG91dCBvZiByYW5nZS5cIilcbiAgICApO1xuICB9XG4gIGxldCBwcm9qZWN0ID0gY2F0ZWdvcmllc1tjYXRlZ29yeUluZGV4QV0ucHJvamVjdHMuc3BsaWNlKHByb2plY3RJbmRleCwgMSlbMF07XG4gIGNhdGVnb3JpZXNbY2F0ZWdvcnlJbmRleEJdLnByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gIGNhdGVnb3JpZXNbY2F0ZWdvcnlJbmRleEJdLnByaW50UHJvamVjdHMoYFRoZSBwcm9qZWN0IGhhcyBiZWVuIGFkZGVkLmApO1xufTtcblxuZXhwb3J0IHsgbWFrZUNhdGVnb3J5LCBwcmludENhdGVnb3JpZXMsIHRyYW5zZmVyUHJvamVjdCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuLi9zdHlsZS9kZWZhdWx0LmNzc1wiO1xuaW1wb3J0IHsgbWFrZUNhdGVnb3J5LCBwcmludENhdGVnb3JpZXMsIHRyYW5zZmVyUHJvamVjdCB9IGZyb20gXCIuL3RvLWRvLmpzXCI7XG5cbmNvbnN0IGRlbW8xID0gbWFrZUNhdGVnb3J5KFwiRGVtb1wiKTtcblxuZGVtbzEubWFrZVByb2plY3Qoe1xuICB0aXRsZTogXCJUby1kbyBhcHBcIixcbiAgZGVzY3JpcHRpb246IFwiQSBwbGFjZSB0byBzdG9yZSBhbGwgb2YgeW91ciB0YXNrc1wiLFxuICB0YXNrczogW10sXG59KTtcblxuZGVtbzEucHJvamVjdHNbMF0ubWFrZVRhc2soe1xuICB0aXRsZTogXCJMb29rIGFyb3VuZFwiLFxuICBkZXNjcmlwdGlvbjogXCJHZXQgdG8ga25vdyB0aGUgYXBwLlwiLFxufSk7XG5cbmRlbW8xLm1ha2VQcm9qZWN0KHtcbiAgdGl0bGU6IFwiRXhlcmNpc2Ugc29sdXRpb25zXCIsXG4gIGRlc2NyaXB0aW9uOiBcIkZpZ3VyZSBvdXQgYW4gb3B0aW1hbCBzZXR1cCBmb3IgZWFjaCBtYWpvciBtdXNjbGUgZ3JvdXAuXCIsXG4gIHRhc2tzOiBbXSxcbn0pO1xuXG5kZW1vMS5wcm9qZWN0c1sxXS5tYWtlVGFzayh7XG4gIHRpdGxlOiBcIkJ1eSBwdWxsZXlzXCIsXG4gIGRlc2NyaXB0aW9uOiBcIkZvciBleGVyY2lzZXMgdGhhdCByZXF1aXJlIGFuIHVwd2FyZCBkaXJjdGlvbiBvZiByZXNpc3RhbmNlLlwiLFxufSk7XG5cbmRlbW8xLnByb2plY3RzWzFdLm1ha2VUYXNrKHtcbiAgdGl0bGU6IFwiR2V0IHdlaWdodCBwbGF0ZXNcIixcbiAgZGVzY3JpcHRpb246IFwiQSBtaW5pbWFsaXN0aWMgc2V0IHRoYXQgYWxsb3dzIGluY3JlbWVudHMgb2YgNWxiLlwiLFxufSk7XG5cbmRlbW8xLnByb2plY3RzWzFdLm1ha2VUYXNrKHtcbiAgdGl0bGU6IFwiRmluZCBzdXBwbGllc1wiLFxuICBkZXNjcmlwdGlvbjogXCJUaGluZ3MgbGlrZSByb3BlLCB3ZWJiaW5nLCBjYXJpYmluZXJzLCBjaGFpbnMsIGZvYW0uLi4gXCIsXG59KTtcblxuZGVtbzEucHJvamVjdHNbMV0ubWFrZVRhc2soe1xuICB0aXRsZTogXCJNYWtlIHNvbWUgZXF1aXBtZW50XCIsXG4gIGRlc2NyaXB0aW9uOiBcIkFzayBtb20gdG8gc2V3IHRvZ2V0aGVyIG15IGludmVudGlvbnNcIixcbn0pO1xuXG5kZW1vMS5tYWtlUHJvamVjdCh7XG4gIHRpdGxlOiBcIjI1MCBib3ggY2hhbGxlbmdlXCIsXG4gIGRlc2NyaXB0aW9uOiAnXCIuLi5kcmF3IGEgYm94IC0gdGhlbiBkbyBpdCBhZ2FpbiBhbm90aGVyIDI0OSB0aW1lcy5cIicsXG4gIHRhc2tzOiBbXSxcbn0pO1xuXG5kZW1vMS5wcm9qZWN0c1syXS5tYWtlVGFzayh7XG4gIHRpdGxlOiBcIkZpbmQgZHJhd2luZyBzdXBwbGllc1wiLFxuICBkZXNjcmlwdGlvbjogXCJhIGxhcmdlIHN0YWNrIG9mIHByaXRlciBwYXBlciBhbmQgYSAuNSBwZW4uXCIsXG59KTtcblxuZGVtbzEucHJvamVjdHNbMl0ubWFrZVRhc2soe1xuICB0aXRsZTogXCJkcmF3IDUgYm94ZXMgb24gYSBwYWdlXCIsXG4gIGRlc2NyaXB0aW9uOiBcIjUgbGVhdmVzIGVub3VnaCByb29tIHRvIGNoZWNrIHRoZSBjb252ZXJnZW5jZXNcIixcbn0pO1xuXG5kZW1vMS5wcm9qZWN0c1syXS5tYWtlVGFzayh7XG4gIHRpdGxlOiBcIjUwJSBydWxlXCIsXG4gIGRlc2NyaXB0aW9uOlxuICAgIFwiRHJhdyB3aGF0ZXZlciB5b3Ugd2FudCBmb3IgdGhlIHNhbWUgYW1vdW50IG9mIHRpbWUgc3BlbnQgcHJhY3RpY2luZy5cIixcbn0pO1xuXG5kZW1vMS5wcmludFByb2plY3RzKCk7XG5cbmNvbnN0IHdvcmsgPSBtYWtlQ2F0ZWdvcnkoXCJXb3JrXCIpO1xuXG53b3JrLm1ha2VQcm9qZWN0KHtcbiAgdGl0bGU6IFwiQmxvY2sgV29ybGRcIixcbiAgZGVzY3JpcHRpb246IFwiYW4gb3JpZ2luYWwgc2FuZGJveCBnYW1lIHdoZXJlIGV2ZXJ5dGhpbmcgaXMgYmxvY2t5XCIsXG59KTtcblxucHJpbnRDYXRlZ29yaWVzKCk7XG5cbnRyYW5zZmVyUHJvamVjdCgwLCAxLCAwKTtcbnByaW50Q2F0ZWdvcmllcygpO1xuXG5kZW1vMS5wcm9qZWN0c1swXS5wcmludFRhc2tzKCk7XG5kZW1vMS5wcmludFByb2plY3RzKCk7XG5kZW1vMS5wcm9qZWN0c1swXS50cmFuc2ZlclRhc2soMCwgeyBkZXN0aW5hdGlvblByb2plY3Q6IDEgfSk7XG5cbmRlbW8xLnByb2plY3RzWzFdLnRpdGxlID0gXCJJbnN0aXR1dGlvbmFsaXplZFwiO1xuZGVtbzEucHJpbnRQcm9qZWN0cygpO1xuXG5kZW1vMS5wcm9qZWN0c1swXS50YXNrc1swXS50aXRsZSA9IFwiY2hpbGxcIjtcbmRlbW8xLnByb2plY3RzWzBdLnRhc2tzWzBdLmRlc2NyaXB0aW9uID0gXCJzcGFjZSBvdXQgdG8gc29tZSBib3BzXCI7XG5kZW1vMS5wcm9qZWN0c1swXS50YXNrc1swXS5wcmlvcml0eSA9IFwiaW1wb3J0YW50XCI7XG5kZW1vMS5wcm9qZWN0c1swXS5wcmludFRhc2tzKCk7XG5cbmRlbW8xLnByb2plY3RzWzBdLm1vdmVUYXNrKDAsIDIpO1xuZGVtbzEucHJvamVjdHNbMF0ubW92ZVRhc2soMiwgMSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=